// This file sets out how to translate Blawx blocks into the s(CASP) language,
// to be used in the s(CASP) version of decode.js


Blockly.sCASP['declare_type'] = function(block) {
    var text_type_name = block.getFieldValue('type_name');
    var code = text_type_name + '::Thing';
    return code;
  };
  
  Blockly.sCASP['declare_type_is_type'] = function(block) {
    var value_first_type = Blockly.sCASP.valueToCode(block, 'first_type', Blockly.sCASP.ORDER_ATOMIC);
    var value_second_type = Blockly.sCASP.valueToCode(block, 'second_type', Blockly.sCASP.ORDER_ATOMIC);
    var code = value_first_type + "::" + value_second_type;
    return code;
  };
  
  Blockly.sCASP['entity_declaration'] = function(block) {
    var text_entity_name = block.getFieldValue('entity_name');
    var code = text_entity_name;
    return code;
  };
  
  Blockly.sCASP['entity_is_type'] = function(block) {
    var value_entity_name = Blockly.sCASP.valueToCode(block, 'entity name', Blockly.sCASP.ORDER_ATOMIC);
    var value_type_name = Blockly.sCASP.valueToCode(block, 'type name', Blockly.sCASP.ORDER_ATOMIC);
    var code = value_entity_name + ":" + value_type_name;
    return code;
  };
  
  Blockly.sCASP['rule'] = function(block) {
    var text_rule_name = block.getFieldValue('rule_name');
    var statements_conclusion = Blockly.sCASP.statementToCode(block, 'conclusion');
    var code = "";
    if (text_rule_name) {
        code += '@{' + text_rule_name.replace(/ /g,"_") + "}\n";
    }
    var currentBlock = this.getInputTargetBlock('conclusion');
    while (currentBlock) {
      var codeForBlock = getCodeForSingleBlock(currentBlock);
      code += codeForBlock;
      currentBlock = currentBlock.getNextBlock();
      if (currentBlock) {
          code += ',\n';
      }
    }
    code += ' :-\n';
    currentBlock = this.getInputTargetBlock('conditions');
    while (currentBlock) {
      var codeForBlock = getCodeForSingleBlock(currentBlock);
      code += "  " + codeForBlock;
      currentBlock = currentBlock.getNextBlock();
      if (currentBlock) {
          code += ',\n';
      } else {
          code += '.\n';
      }
    }
    return code;
  };
  
  Blockly.sCASP['variable_selector'] = function(block) {
    var text_variable_selected = block.getFieldValue('variable_selected');
    var code = '?' + text_variable_selected;
    return [code, Blockly.sCASP.ORDER_ATOMIC];
  };
  
  Blockly.sCASP['object_selector'] = function(block) {
    var code = block.toString();
    return [code, Blockly.sCASP.ORDER_ATOMIC];
  }
  
  Blockly.sCASP['category_selector'] = function(block) {
    var code = block.toString();
    return [code, Blockly.sCASP.ORDER_ATOMIC];
  }
  
  Blockly.sCASP['attribute_selector'] = function(block) {
    var value_entity = Blockly.sCASP.valueToCode(block, 'entity', Blockly.sCASP.ORDER_ATOMIC);
    var value = Blockly.sCASP.valueToCode(block, 'value', Blockly.sCASP.ORDER_ATOMIC);
    var attributeName = block.getFieldValue('attributeName');
    var code = value_entity + '[' + attributeName + '->' + value + ']';
    return code;
  }
  
  Blockly.sCASP['conjunction'] = function(block) {
    var statements_first_statement = Blockly.sCASP.statementToCode(block, 'first_statement');
    var statements_second_statement = Blockly.sCASP.statementToCode(block, 'second_statement');
    var code = statements_first_statement + ',\n' + statements_second_statement;
    return code;
  };
  
//   Blockly.sCASP['disjunction'] = function(block) {
//     var code = "((\n";
//     var currentBlock = this.getInputTargetBlock('first_statement');
//     while (currentBlock) {
//         var codeForBlock = getCodeForSingleBlock(currentBlock);
//         code += codeForBlock;
//         currentBlock = currentBlock.getNextBlock();
//         if (currentBlock) {
//             code += ",\n";
//         } else {
//             code += "\n";
//         }
//     }
//     code += ");(";
//     var currentBlock = this.getInputTargetBlock('second_statement');
//     while (currentBlock) {
//         var codeForBlock = getCodeForSingleBlock(currentBlock);
//         code += codeForBlock;
//         currentBlock = currentBlock.getNextBlock();
//         if (currentBlock) {
//             code += ",\n";
//         } else {
//             code += "\n";
//         }
//     }
//     code += "))\n";
//     return code;
//   };
  
//   Blockly.sCASP['negation'] = function(block) {
//     var code = '\\neg (';
//     var currentBlock = this.getInputTargetBlock('NAME');
//     while (currentBlock) {
//         var codeForBlock = getCodeForSingleBlock(currentBlock);
//         code += codeForBlock;
//         currentBlock = currentBlock.getNextBlock();
//         if (currentBlock) {
//             code += ",\n";
//         } else {
//             code += "\n";
//         }
//     }
//     code += ")";
//     return code;};
  
  Blockly.sCASP['fact'] = function(block) {
    var code = '';
    var currentBlock = this.getInputTargetBlock('statement');
    while (currentBlock) {
      var codeForBlock = getCodeForSingleBlock(currentBlock);
      code += codeForBlock + '.\n';
      currentBlock = currentBlock.getNextBlock();
    }
    return code;
  };
  
  Blockly.sCASP['query'] = function(block) {
    var code = '?- '
    var currentBlock = this.getInputTargetBlock('query');
    while (currentBlock) {
        var codeForBlock = getCodeForSingleBlock(currentBlock);
        code += codeForBlock;
        currentBlock = currentBlock.getNextBlock();
        if (currentBlock) {
            code += ",\n";
        } else {
            code += ".\n";
        }
    }
    // Flora-2 gets confused if queries are more than one line.
    onelinecode = code.replace(/\r?\n|\r/g, "");
    return onelinecode;
  };
  
  Blockly.sCASP['naf_negation'] = function(block) {
    var code = '\\naf (';
    var currentBlock = this.getInputTargetBlock('NAME');
    while (currentBlock) {
        var codeForBlock = getCodeForSingleBlock(currentBlock);
        code += codeForBlock;
        currentBlock = currentBlock.getNextBlock();
        if (currentBlock) {
            code += ",\n";
        } else {
            code += "\n";
        }
    }
    code += ")";
    return code;
  };
  
  Blockly.sCASP['entity_identity'] = function(block) {
    var value_first_entity = Blockly.sCASP.valueToCode(block, 'first_entity', Blockly.sCASP.ORDER_ATOMIC);
    var value_second_entity = Blockly.sCASP.valueToCode(block, 'second_entity', Blockly.sCASP.ORDER_ATOMIC);
    var code = value_first_entity + ':=0=:' + value_second_entity;
    return code;
  };
  
  Blockly.sCASP['attribute_declaration'] = function(block) {
    var text_attribute_name = block.getFieldValue('attribute_name');
    var value_attribute_name = Blockly.sCASP.valueToCode(block, 'attribute_type', Blockly.sCASP.ORDER_ATOMIC);
    var code = text_attribute_name.replace(/ /g,"_") + '=>' + value_attribute_name;
    return code;
  };
  
  Blockly.sCASP['override'] = function(block) {
    var text_first_rule = block.getFieldValue('first_rule');
    var text_second_rule = block.getFieldValue('second_rule');
    var code = '\\overrides(' + text_first_rule + ", " + text_second_rule +").\n";
    return code;
  };
  
  Blockly.sCASP['declare_type_with_attributes'] = function(block) {
    var value_type = Blockly.sCASP.valueToCode(block, 'type', Blockly.sCASP.ORDER_ATOMIC);
    var statements_name = Blockly.sCASP.statementToCode(block, 'NAME');
    var code = value_type + '[|';
    var currentBlock = this.getInputTargetBlock('NAME');
    while (currentBlock) {
      var codeForBlock = getCodeForSingleBlock(currentBlock);
      code += codeForBlock;
      currentBlock = currentBlock.getNextBlock();
      if (currentBlock.type == "custom_attribute_declaration") {
        currentBlock = currentBlock.getNextBlock();
        // Skip custom attribute declarations of which there can only
        // be one in a row.
      }
      if (currentBlock) {
          code += ', ';
      }
    }
    code += '|]';
    return code;
  };
  
  Blockly.sCASP['boolean_datatype'] = function(block) {
    var code = "\\boolean";
    return [code, Blockly.sCASP.ORDER_ATOMIC];
  };
  
  Blockly.sCASP['number_datatype'] = function(block) {
    var code = '\\integer';
    return [code, Blockly.sCASP.ORDER_ATOMIC];
  };
  
  Blockly.sCASP['string_datatype'] = function(block) {
    var code = '\\string';
    return [code, Blockly.sCASP.ORDER_ATOMIC];
  };
  
  Blockly.sCASP['comparitor'] = function(block) {
    var value_first_value = Blockly.sCASP.valueToCode(block, 'first_value', Blockly.sCASP.ORDER_ATOMIC);
    var dropdown_comparitor = block.getFieldValue('comparitor');
    var value_second_value = Blockly.sCASP.valueToCode(block, 'second_value', Blockly.sCASP.ORDER_ATOMIC);
    var new_comparitor = ''
    switch (dropdown_comparitor) {
      case 'lt':
        new_comparitor = '<';
        break;
      case 'lte':
        new_comparitor = '<=';
        break;
      case 'gt':
        new_comparitor = '>';
        break;
      case 'gte':
        new_comparitor = '>=';
        break;
      case 'eq':
        new_comparitor = '==';
        break;
      case 'neq':
        new_comparitor = '!=';
        break;
      case 'nid':
        new_comparitor = "!==";
        break;
      default:
        new_comparitor = "not implemented";
    }
    var code = value_first_value + new_comparitor + value_second_value;
    return code;
  };
  
  Blockly.sCASP['assignment'] = function(block) {
    var value_variable = Blockly.sCASP.valueToCode(block, 'variable', Blockly.sCASP.ORDER_ATOMIC);
    var value_value = Blockly.sCASP.valueToCode(block, 'value', Blockly.sCASP.ORDER_ATOMIC);
    var code = value_variable + "=" + value_value;
    return code;
  };
  
  Blockly.sCASP['math_operator'] = function(block) {
    var value_left_value = Blockly.sCASP.valueToCode(block, 'left_value', Blockly.sCASP.ORDER_ATOMIC);
    var dropdown_operator = block.getFieldValue('operator');
    var value_right_value = Blockly.sCASP.valueToCode(block, 'right_value', Blockly.sCASP.ORDER_ATOMIC);
    switch(dropdown_operator) {
      case "add":
        var operator = "+";
        break;
      case "subtract":
        var operator = "-";
        break;
      case "multiply":
        var operator = "*";
        break;
      case "divide":
        var operator = "/";
        break;
      default:
        var operator = "not implemented";
    }
    var code = value_left_value + operator + value_right_value;
    return [code, Blockly.sCASP.ORDER_ATOMIC];
  };
  
  Blockly.sCASP['import_ruleset'] = function(block) {
    var text_ruleset_uri = block.getFieldValue('uri');
    var code = '';
    return code;
  };

  Blockly.sCASP['data_property'] = function(block) {
    var value_subject = Blockly.sCASP.valueToCode(block, 'subject', Blockly.sCASP.ORDER_ATOMIC);
    var text_predicate = block.getFieldValue('predicate');
    var value_object = Blockly.sCASP.valueToCode(block, 'object', Blockly.sCASP.ORDER_ATOMIC);
    var code = value_subject + '[' + text_predicate + '->' + value_object + ']';
    return code;
  };

  Blockly.sCASP['data_dictionary'] = function(block) {
    var text_dictionary_name = block.getFieldValue('dictionary_name');
    var statements_name = Blockly.sCASP.statementToCode(block, 'NAME');
    var code = '';
    // Add the starter code.
    code += text_dictionary_name + "[";
    // Add each of the sub-elements.
    var currentBlock = this.getInputTargetBlock('NAME');
    while (currentBlock) {
      var codeForBlock = getCodeForSingleBlock(currentBlock);
      code += codeForBlock;
      currentBlock = currentBlock.getNextBlock();
      if (currentBlock) {
          code += ', ';
      }
    }
    // Add the closer code
    code += "]";
    return code;
  };
  
  Blockly.sCASP['kvp_basic'] = function(block) {
    var text_key = block.getFieldValue('key');
    var value_value = Blockly.sCASP.valueToCode(block, 'value', Blockly.sCASP.ORDER_ATOMIC);
    var code = text_key + ' -> ' + value_value;
    return code;
  };
  
  Blockly.sCASP['data_dictionary_sub'] = function(block) {
    var text_dictionary_name = block.getFieldValue('dictionary_name');
    var statements_name = Blockly.sCASP.statementToCode(block, 'NAME');
    var code = '';
    // Add starter code
    code += text_dictionary_name + " -> \\#[";
    // Go through the sub-elements
    var currentBlock = this.getInputTargetBlock('NAME');
    while (currentBlock) {
      var codeForBlock = getCodeForSingleBlock(currentBlock);
      code += codeForBlock;
      currentBlock = currentBlock.getNextBlock();
      if (currentBlock) {
          code += ', ';
      }
    }
    // Add closer code
    code += "]";
    return code;
  };

  Blockly.sCASP['calculation'] = function(block) {
    var value_variable = Blockly.sCASP.valueToCode(block, 'variable', Blockly.sCASP.ORDER_ATOMIC);
    var value_calculation = Blockly.sCASP.valueToCode(block, 'calculation', Blockly.sCASP.ORDER_ATOMIC);
    var code = value_variable + " \\is " + value_calculation;
    return code;
  };

  Blockly.sCASP['boolean_value'] = function(block) {
    var dropdown_value = block.getFieldValue('value');
    var code = "";
    if (dropdown_value == "true") {
      code = "\\true";
    }
    if (dropdown_value == "false") {
      code = "\\false";
    }
    return [code, Blockly.sCASP.ORDER_ATOMIC];
  };

  Blockly.sCASP['blawx_string'] = function(block) {
    var text_string = block.getFieldValue('string');
    var code = '"' + text_string + '"^^\\string';
    return [code, Blockly.sCASP.ORDER_ATOMIC];
  };

  Blockly.sCASP['cardinality_up_to'] = function(block) {
    var text_attribute_name = block.getFieldValue('attribute_name');
    var number_maximum_cardinality = block.getFieldValue('maximum_cardinality');
    var value_attribute_type = Blockly.sCASP.valueToCode(block, 'attribute_type', Blockly.sCASP.ORDER_ATOMIC);
    var code = text_attribute_name + "{0.." + number_maximum_cardinality + "} =>" + value_attribute_type;
    return code;
  };
  
  Blockly.sCASP['cardinality_or_more'] = function(block) {
    var text_attribute_name = block.getFieldValue('attribute_name');
    var number_minimum_cardinality = block.getFieldValue('minimum_cardinality');
    var value_attribute_type = Blockly.sCASP.valueToCode(block, 'attribute_type', Blockly.sCASP.ORDER_ATOMIC);
    var code = text_attribute_name + "{" + number_minimum_cardinality + "..*} =>" + value_attribute_type;
    return code;
  };
  
  Blockly.sCASP['cardinality_exactly'] = function(block) {
    var text_attribute_name = block.getFieldValue('attribute_name');
    var number_cardinality = block.getFieldValue('cardinality');
    var value_attribute_type = Blockly.sCASP.valueToCode(block, 'attribute_type', Blockly.sCASP.ORDER_ATOMIC);
    var code = text_attribute_name + "{" + number_cardinality + ".." + number_cardinality + "} =>" + value_attribute_type;
    return code;
  };
  
  Blockly.sCASP['cardinality_between'] = function(block) {
    var text_attribute_name = block.getFieldValue('attribute_name');
    var number_minimum_cardinality = block.getFieldValue('minimum_cardinality');
    var number_maximum_cardinality = block.getFieldValue('maximum_cardinality');
    var value_attribute_type = Blockly.sCASP.valueToCode(block, 'attribute_type', Blockly.sCASP.ORDER_ATOMIC);
    var code = text_attribute_name + "{" + number_minimum_cardinality + ".." + number_maximum_cardinality + "} =>" + value_attribute_type;
    return code;
  };
  
  Blockly.sCASP['cardinality_any'] = function(block) {
    var text_attribute_name = block.getFieldValue('attribute_name');
    var value_attribute_type = Blockly.sCASP.valueToCode(block, 'attribute_type', Blockly.sCASP.ORDER_ATOMIC);
    var code = text_attribute_name + "=>" + value_attribute_type;
    return code;
  };

  Blockly.sCASP['unnamed_variable'] = function(block) {
    var code = '?_';
    return [code, Blockly.sCASP.ORDER_ATOMIC];
  };
  
  Blockly.sCASP['silent_variable_selector'] = function(block) {
    var text_variable_selected = block.getFieldValue('variable_selected');
    var code = '?_' + text_variable_selected;
    return [code, Blockly.sCASP.ORDER_ATOMIC];
  };

  Blockly.sCASP['new_object_of_type'] = function(block) {
    var text_object_name = block.getFieldValue('object_name');
    var category_name = block.getFieldValue('category_name');
    var code = text_object_name + ':' + category_name;
    return code;
  };

  Blockly.sCASP['custom_attribute_declaration'] = function(block) {
    var dropdown_order = block.getFieldValue('order');
    var text_prefix = block.getFieldValue('prefix');
    var text_infix = block.getFieldValue('infix');
    var text_postfix = block.getFieldValue('postfix');
    var code = '';
    return code;
  };

  Blockly.sCASP['custom_attribute_selector'] = function(block) {
    var attributeName = block.blawxAttributeName;
    var order = block.blawxAttributeOrder;
    if (order == "object_first") {
      var object_entity = 'first_entity';
      var value_entity = 'second_entity';
    } else {
      var object_entity = 'second_entity';
      var value_entity = 'first_entity';
    }
    var object_element = Blockly.sCASP.valueToCode(block, object_entity, Blockly.sCASP.ORDER_ATOMIC);
    var value_element = Blockly.sCASP.valueToCode(block, value_entity, Blockly.sCASP.ORDER_ATOMIC);
    var code = object_element + '[' + attributeName + '->' + value_element + ']';
    return code;
  }


function getCodeForSingleBlock(block) {
    if (!block) {
      return '';
    }
    if (block.disabled) {
      // Skip past this block if it is disabled.
      return getCodeForSingleBlock(block.getNextBlock());
    }
  
    var func = Blockly.sCASP[block.type];
    if (typeof func != "function") {
      throw Error("Language s(CASP) does not know how to generate code for block type " + block.type);
    }
    // First argument to func.call is the value of 'this' in the generator.
    // Prior to 24 September 2013 'this' was the only way to access the block.
    // The current prefered method of accessing the block is through the second
    // argument to func.call, which becomes the first parameter to the generator.
    var code = func.call(block, block);
    if (typeof code == "array") {
      if (!block.outputConnection || block.outputConnection == "") {
        throw Error("Expecting string from statement block " + block.type);
      }
      return [code[0], code[1]];
    } else if (typeof code == "string") {
      var id = block.id.replace(/\$/g, '$$$$');  // Issue 251.
      if (this.STATEMENT_PREFIX) {
        code = this.STATEMENT_PREFIX.replace(/%1/g, '\'' + id + '\'') +
            code;
      }
      return code;
    } else if (code === null) {
      // Block has handled code generation itself.
      return '';
    } else {
      throw ReferenceError('Invalid code generated: ' + code);
    }
  };
