var runCode
runCode = function(button) {
    $output = document.getElementById('output');
    $output.textContent = "Thinking...\n";
    var code = "";
    var main_xml = Blockly.Xml.workspaceToDom(demoWorkspace);
    var main_xml_text = Blockly.Xml.domToText(main_xml);
    code += main_xml_text;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/cgi-bin/reasoner.py", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         var reasoner_output = JSON.parse(this.responseText);
    //         //console.log(reasoner_output);
    //         var text = "";
    //         text += "The answer is: " + reasoner_output['main'] + "\n\n";
    //         var answers = reasoner_output['answers'];
    //         //console.log(answers);
    //         if (answers) {
    //             for (const [k, v] of Object.entries(answers)) {
    //                 //console.log(k, v);
    //                 for (const [k2, v2] of Object.entries(v)) {
    //                     //console.log(k2, v2);
    //                     //Remove XML DataType Information
    //                     var v2clean = v2.replace(/\^\^\\.*$/s,"");
    //                     text += k2 + ": " + v2clean + ", ";	
    //                 }
    //                 text = text.substr(0,text.length-2);
    //                 text += "\n";
    //             }
    //         }
    //     $output.textContent = text;
// }   
    $output.textContent = this.responseText;
    };
    //xhttp.send("code=" + encodeURI(code));
    xhttp.send("code=" + encodeURIComponent(code));
    Blockly.hideChaff();
}
var clearBlocks;
clearBlocks = function(button) {
    demoWorkspace.clear();
    Blockly.hideChaff();
}
var clearImport;
clearImport = function(button) {
    importWorkspace.clear();
    Blockly.hideChaff();
}
var getLoadFile;
getLoadFile = function(button) {
    element = document.getElementById('loadfile');
    element.click();
    Blockly.hideChaff();
}
var getImportFile;
getImportFile = function(button) {
    element = document.getElementById('importfile');
    element.click();
    Blockly.hideChaff();
}
var exportBlocks;
exportBlocks = function(button) {
try {
    var xml = Blockly.Xml.workspaceToDom(demoWorkspace);
    var xml_text = Blockly.Xml.domToText(xml);
    
    var link = document.createElement('a');
    link.download="project.blawx";
    link.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml_text);
    document.body.appendChild(link);
    link.click();
    link.remove();
    Blockly.hideChaff();
} catch (e) {
    window.location.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml_text);
    alert(e);
}
}
var gotoHelp;
gotoHelp = function(button) {
    window.open('/docs');
}
demoWorkspace.registerButtonCallback('menuRunCode', runCode);
demoWorkspace.registerButtonCallback('menuClear', clearBlocks);
demoWorkspace.registerButtonCallback('menuLoad', getLoadFile);
demoWorkspace.registerButtonCallback('menuSave', exportBlocks);
demoWorkspace.registerButtonCallback('menuHelp', gotoHelp);

function loadBlocksFile(element) {
    try {	
      var file = element.files[0];
      var fr = new FileReader();           
      fr.onload = function (event) {
        var xml = Blockly.Xml.textToDom(event.target.result);
        demoWorkspace.clear();
        Blockly.Xml.domToWorkspace(xml, demoWorkspace);
      };
      fr.readAsText(file);
      document.getElementById(element.id).value = "";
    } catch (e) {
      alert(e);
    }	  
  }

function importBlocksFile(element) {
try {
    var file = element.files[0];
    var fr = new FileReader();
    fr.onload = function (event) {
    var xml = Blockly.Xml.textToDom(event.target.result);
    importWorkspace.clear();
    Blockly.Xml.domToWorkspace(xml, importWorkspace);
    };
    fr.readAsText(file);
    document.getElementById(element.id).value = "";
} catch (e) {
    alert(e);
}
}
