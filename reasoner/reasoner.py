#!/usr/bin/python3

# Imports
import cgi
import pexpect
import tempfile
import subprocess
import sys, json, types
import re
import time

# Print Headers
print("Content-type: application/json;charset=utf-8")
print() 

debugmode = False # Causes it to print Flora-2 interactions
testmode = False # Causes it to use provided blawx files for testing if True

if not debugmode and not testmode:
    # Collect "code" and "data" from environment
    input = cgi.FieldStorage(encoding="utf8")
    code = input.getvalue('code')
    data = input.getvalue('data')
    # Put the .blawx code in a temporary file
    blawxfile = tempfile.NamedTemporaryFile(delete=False,prefix="Blawx",suffix=".blawx")
    blawxfile.write(code.encode())
    blawxfilename = blawxfile.name
    blawxfile.close()
else:
    # Load the default blawx code provided with the software
    blawxfile = open('/usr/lib/cgi-bin/demo2.blawx','r')
    blawxfilename = blawxfile.name
    blawxfile.close()
    data = ''

# Run "decode.js" on the blawx code.
floracode = subprocess.run(["node", "/var/www/html/decode.js", blawxfilename],
                capture_output=True,text=True).stdout

# For testing code generation with s(CASP)
print(floracode)
exit

# Take the queries out of the code and save them.
# Also, think about whether or not this is necessary. Maybe not.

flora_query_re = re.compile("^\?-.*?\.$", re.MULTILINE | re.S)
queries = re.findall(flora_query_re,floracode)
noqueryfloracode = re.sub(flora_query_re,'',floracode)

# Put the remaining flora code in a temporary file
floracodefile = tempfile.NamedTemporaryFile(delete=False,prefix="Blawx",suffix=".flr")
floracodefile.write(noqueryfloracode.encode())

# Software can't access files that are still open.
user_rules = floracodefile.name
floracodefile.close()

# run json2f2 on the json code.

def json2flora(key,value,parentname="data",root=False):
  retstr = ""
  # If this is not a leaf:
  if isinstance(value, (list,dict,tuple)):
    # for each of the subvariables, json2flora it
    if isinstance(value, list):
      if root:
        retstr += parentname + "[" + key + "->\\#[list->{"
      else:
        retstr += "{"
      if len(value):
        for i, v in enumerate(value):
          if isinstance(v, (list,dict,tuple)):
            retstr += json2flora(key,v,parentname)
          else:
            retstr += jsonvalue2flora(v)
          retstr += ", "
        retstr = retstr[ :-2 ]
      if root:
        retstr += "}]]"
      else:
        retstr += "}"
    elif isinstance(value, dict):
      #retstr += "The elements of the dict are: \n\n"
      if root:
        retstr += parentname + "[" + key + "->\\#["
      else:
        retstr += "\\#["
      if len(value):
        for k, v in value.items():
          #retstr += str(k) + ": " + str(v) + "\n\n"
          retstr += k + "->"
          if isinstance(v, (list,dict,tuple)):
            retstr += json2flora(k,v,"")
          else:
            retstr += jsonvalue2flora(v)
          retstr += ", "
        retstr = retstr[ :-2 ]
      retstr += "]"
      if root:
        retstr += "]"
    elif isinstance(value, tuple):
      # Convert tuple to a list, and try again
      # I'm not sure if this is correct... need to test.
      newvalue = list(value)
      #retstr += "Converting " + str(value) + " to " + str(newvalue) + " and retrying.\n\n"
      retstr += json2flora(key,newvalue,parentname)
  else:
    if root:
      retstr += parentname + "["
    retstr += str(key) + "->" + jsonvalue2flora(value)
    if root:
      retstr += "]"
  return retstr
  
def jsonvalue2flora(value):
  if isinstance(value,str):
    if not (value[0] == "'" and value[-1] == "'"):
      return "'" + str(value) + "'"
    else:
      return str(value)
  elif isinstance(value,type(None)):
    return "\@?"
  elif isinstance(value,bool):
    if value:
      return "\\true"
    else:
      return "\\false"
  elif isinstance(value,(int,float)):
    return str(value)
  else:
    return str(value) + ":" + type(value).__name__


flora_data = []
 
if data and data != '':
    data_dictionary = json.loads(data)

    # Convert the resulting Python dictionary to a list of Flora-2 Entries.
    for k,v in data_dictionary.items():
        flora_data.append(json2flora(k,v,root=True))    

# Start Flora-2
flora2prompt = 'flora2 \?\- '
flora2error = '\+\+Error\[Flora\-2\]'
console = pexpect.spawn('sudo -u root /var/Flora-2/flora2/runflora',encoding='utf-8',echo=False)
if debugmode:
    console.logfile = sys.stdout
expected_result = console.expect([flora2prompt, flora2error])
if expected_result != 0:
    raise Exception("Error running Flora-2" + str(console))
# Set Expert Mode
console.sendline("expert{on}.")
expected_result = console.expect([flora2prompt, flora2error])
if expected_result != 0:
    raise Exception("Error setting expert mode." + str(console))

# Turn on Argumentation Theory
# This needs to be in the flora file, so has been moved to the decode.js file.

# Load System Modules
console.sendline("['/usr/lib/cgi-bin/dateminus.flr'>>datemin].")
expected_result = console.expect([flora2prompt, flora2error])
if expected_result != 0:
    raise Exception("Error loading date math library." + str(console))

# Load Rules
console.sendline("['" + user_rules + "'].")
expected_result = console.expect([flora2prompt, flora2error])
if expected_result != 0:
    raise Exception("Error loading blawx code." + str(console))

# Set Default Opposes
console.sendline('insert{\opposes(?_x[?_y->\\true],?_x[?_y->\\false]) :- ?_x:?_T, ?_T[|?_y=>\\boolean|]}.')
expected_result = console.expect([flora2prompt, flora2error])
if expected_result != 0:
    raise Exception("Error defining default opposition." + str(console))

# Insert Facts
for f in flora_data:
    console.sendline("insert{" + f + "}.")
    expected_result = console.expect([flora2prompt, flora2error])
    if expected_result != 0:
        raise Exception("Error loading user data." + str(console))

# Send Query
console.sendline(queries[0][3:]) #strips the "?- " from the start of the query
expected_result = console.expect([flora2prompt, flora2error])
if expected_result != 0:
    raise Exception("Error sending query." + str(console))

# Process the output into a data object
query_response = console.before

response_data = {}
response_data['answers'] = {}
answercount = 0
answersdone = False
lines = query_response.splitlines()
for l in lines:
    if l == "" and not answersdone:
        answercount += 1
        response_data['answers'][str(answercount)] = {}
    elif l == queries[0][3:]:
        pass
    elif "Times (in seconds)" in l:
        answersdone = True
        del response_data['answers'][str(answercount)]
    elif "solution(s)" in l:
        answersdone = True
        del response_data['answers'][str(answercount)]
    elif l != "Yes" and l != "No" and l != "":
        lineparts = l.split(" = ", 2)
        if "flora'skolem" in lineparts[1]:
            lineparts[1] = "Unnamed Object"
        if lineparts[0][0:1] == '?':
            if lineparts[1][0:1] == "\\":
                response_data['answers'][str(answercount)][lineparts[0][1:]] = lineparts[1][1:]
            else:
                response_data['answers'][str(answercount)][lineparts[0][1:]] = lineparts[1]
        else:
            if lineparts[1][0:1] == "\\":
                response_data['answers'][str(answercount)][lineparts[0]] = lineparts[1][1:]
            else:
                response_data['answers'][str(answercount)][lineparts[0]] = lineparts[1]
    elif l == "Yes" or l == "No":
        response_data['main'] = l

# Send the json version of the data object
print(json.dumps(response_data))

# Halt Flora-2
console.sendline("\halt.")
console.close()

# Nice-To-Have Features:
# Ideally, there should be a debug mode that
# would include all feedback from all the steps
# in the "answers" that get returned.




