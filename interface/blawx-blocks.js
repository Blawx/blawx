Blockly.Blocks['declare_type'] = {
  init: function() {
    this.jsonInit({
  "type": "declare_type",
  "message0": "%1 is a Category",
  "args0": [
    {
      "type": "field_input",
      "name": "type_name",
      "text": "default"
    }
  ],
  "previousStatement": null,
  "nextStatement": "category_customize",
  "colour": 20,
  "tooltip": "A Category exists.",
  "helpUrl": "/docs/blocks/new_category/"
})
  }
};

    Blockly.Blocks['declare_type_is_type'] = {
        init: function () {
            this.jsonInit({
                "type": "declare_type_is_type",
                "message0": "A %1 is a %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "first_type",
                        "check": "TYPE"
                    },
                    {
                        "type": "input_value",
                        "name": "second_type",
                        "check": "TYPE"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 20,
                "tooltip": "An object in the first category is also in the second category.",
                "helpUrl": "/docs/blocks/category_equivalence/"
            });
        }
    }

    Blockly.Blocks['entity_declaration'] = {
        init: function () {
            this.jsonInit({
                "type": "entity_declaration",
                "message0": "%1 is an Object",
                "args0": [
                    {
                        "type": "field_input",
                        "name": "entity_name",
                        "text": "object"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "An object exists.",
                "helpUrl": "/docs/blocks/new_object/"
            });
        }
    }

    Blockly.Blocks['entity_is_type'] = {
        init: function () {
            this.jsonInit({
                "type": "entity_is_type",
                "message0": "%1 is in the category %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "entity name",
                        "check": "ENTITY"
                    },
                    {
                        "type": "input_value",
                        "name": "type name",
                        "check": "TYPE"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "Object is in a category.",
                "helpUrl": "/docs/blocks/object_category/"
            });
        }
    }

    Blockly.Blocks['rule'] = {
        init: function () {
            this.jsonInit({
                "type": "rule",
                "message0": "Rule Name: %1 %2 We know %3 if %4",
                "args0": [
                    {
                        "type": "field_input",
                        "name": "rule_name",
                        "text": "name"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "conclusion",
                        "align": "RIGHT"
                    },
                    {
                        "type": "input_statement",
                        "name": "conditions",
                        "align": "RIGHT"
                    }
                ],
                "colour": 260,
                "tooltip": "If the conditions are known, the conclusion is also known.",
                "helpUrl": "/docs/blocks/rule/"
            });
        }
    }

    Blockly.Blocks['variable_selector'] = {
        init: function () {
            this.jsonInit({
                "type": "variable_selector",
                "message0": "%1",
                "args0": [
                    {
                        "type": "field_input",
                        "name": "variable_selected",
                        "text": "A"
                    }
                ],
                "output": "ENTITY",
                "colour": 60,
                "tooltip": "Match to an object or data value.",
                "helpUrl": "/docs/blocks/variable_selector/"
            });
        }
    }

    Blockly.Blocks['conjunction'] = {
        init: function () {
            this.jsonInit({
                "type": "conjunction",
                "message0": "%1 and %2 %3",
                "args0": [
                    {
                        "type": "input_statement",
                        "name": "first_statement"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "second_statement"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290,
                "tooltip": "Both statements are true. (Vertically stacking statements has the same effect.)",
                "helpUrl": "/docs/blocks/and/"
            });
        }
    }

    Blockly.Blocks['disjunction'] = {
        init: function () {
            this.jsonInit({
                "type": "disjunction",
                "message0": "%1 or %2 %3",
                "args0": [
                    {
                        "type": "input_statement",
                        "name": "first_statement"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "second_statement"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290,
                "tooltip": "One of the two statements is true.",
                "helpUrl": "/docs/blocks/or/"
            });
        }
    }

    Blockly.Blocks['negation'] = {
        init: function () {
            this.jsonInit({
                "type": "negation",
                "message0": "not %1",
                "args0": [
                    {
                        "type": "input_statement",
                        "name": "NAME"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290,
                "tooltip": "The statement is known to be false.",
                "helpUrl": "/docs/blocks/not/"
            });
        }
    }

    Blockly.Blocks['fact'] = {
        init: function () {
            this.jsonInit({
                "type": "fact",
                "message0": "We know %1",
                "args0": [
                    {
                        "type": "input_statement",
                        "name": "statement"
                    }
                ],
                "colour": 260,
                "tooltip": "The statement is known to be true.",
                "helpUrl": "/docs/blocks/fact/"
            });
        }
    }

    Blockly.Blocks['query'] = {
        init: function () {
            this.jsonInit({
                "type": "query",
                "message0": "Is it true that: %1",
                "args0": [
                    {
                        "type": "input_statement",
                        "name": "query"
                    }
                ],
                "colour": 260,
                "tooltip": "Pose a question to the Blawx resoner.",
                "helpUrl": "/docs/blocks/question/"
            });
        }
    }

    Blockly.Blocks['naf_negation'] = {
        init: function () {
            this.jsonInit({
                "type": "naf_negation",
                "message0": "n.a.f. not %1",
                "args0": [
                    {
                        "type": "input_statement",
                        "name": "NAME"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290,
                "tooltip": "Either the statement is known to be false, or it cannot be proven.",
                "helpUrl": "/docs/blocks/naf_not/"
            });
        }
    }

    Blockly.Blocks['entity_identity'] = {
        init: function () {
            this.jsonInit({
                "type": "entity_identity",
                "message0": "%1 and %2 are the same object",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "first_entity",
                        "check": "ENTITY"
                    },
                    {
                        "type": "input_value",
                        "name": "second_entity",
                        "check": "ENTITY"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "These two objects are the same thing.",
                "helpUrl": "/docs/blocks/object_equivalence/"
            });
        }
    }

    Blockly.Blocks['attribute_declaration'] = {
        init: function () {
            this.jsonInit({
                "type": "attribute_declaration",
                "message0": "%1 , which is a  %2",
                "args0": [
                    {
                        "type": "field_input",
                        "name": "attribute_name",
                        "text": "name"
                    },
                    {
                        "type": "input_value",
                        "name": "attribute_type",
                        "check": [
                            "TYPE",
                            "DATATYPE"
                        ]
                    }
                ],
                "inputsInline": true,
                "previousStatement": "ATTRIBUTE_DECLARATION",
                "nextStatement": "ATTRIBUTE_DECLARATION",
                "colour": 45,
                "tooltip": "The category has an attribute with the name and type. Type is a datatype or Category.",
                "helpUrl": "/docs/blocks/new_attribute/"
            });
        }
    }

    Blockly.Blocks['implication'] = {
        init: function () {
            this.jsonInit({
                "type": "implication",
                "message0": "%1 implies %2 %3 %4",
                "args0": [
                    {
                        "type": "input_statement",
                        "name": "first_statement"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "implication type",
                        "options": [
                            [
                                "==>",
                                "implies_1"
                            ],
                            [
                                "~~>",
                                "implies_2"
                            ],
                            [
                                "<==>",
                                "bdimplies_1"
                            ],
                            [
                                "<~~>",
                                "bdimplies_2"
                            ]
                        ]
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "second_statement"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290,
                "tooltip": "For all data that matches the top statement, the bottom statement is also true. See documentation for variations.",
                "helpUrl": "/docs/blocks/implication/"
            });
        }
    }

    Blockly.Blocks['quantifier'] = {
        init: function () {
            this.jsonInit({
                "type": "quantifier",
                "message0": "For %1 of the entities %2 it is true that %3",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "quantifier_type",
                        "options": [
                            [
                                "any",
                                "exists"
                            ],
                            [
                                "all",
                                "forall"
                            ]
                        ]
                    },
                    {
                        "type": "input_value",
                        "name": "NAME",
                        "check": "ENTITY"
                    },
                    {
                        "type": "input_statement",
                        "name": "predicate_statement",
                        "align": "RIGHT"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290,
                "tooltip": "Check whether the statement is true for all, or any given values or objects.",
                "helpUrl": "/docs/blocks/quantifier/"
            });
        }
    }

    Blockly.Blocks['override'] = {
        init: function () {
            this.jsonInit({
                "type": "override",
                "message0": "Rule %1 overrides rule %2",
                "args0": [
                    {
                        "type": "field_input",
                        "name": "first_rule",
                        "text": "rule name"
                    },
                    {
                        "type": "field_input",
                        "name": "second_rule",
                        "text": "rule name"
                    }
                ],
                "colour": 260,
                "tooltip": "Rules with the first name override rules with the second name.",
                "helpUrl": "/docs/blocks/override/"
            });
        }
    }

    Blockly.Blocks['declare_type_with_attributes'] = {
        init: function () {
            this.jsonInit({
                "type": "declare_type_with_attributes",
                "message0": "A %1 has attributes %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "type",
                        "check": "TYPE"
                    },
                    {
                        "type": "input_statement",
                        "name": "NAME",
                        "check": "ATTRIBUTE_DECLARATION"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 20,
                "tooltip": "Add attributes to a category.",
                "helpUrl": "/docs/blocks/category_attribute/"
            });
        }
    }


    Blockly.Blocks['boolean_datatype'] = {
        init: function () {
            this.jsonInit({
                "type": "boolean_datatype",
                "message0": "%1 Yes / No",
                "args0":[
                  {
                    "type": "field_image",
                    "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABE0lEQVR4AbTTgWYDQRAG4KIogiAIiiAIgiCAQzkUARQQBHmM4gBFEUBRBFAUAfQB8gAFFBAEARyCw+ErDI5bd4r+LHasb8eOvfn34A45NrEy3P4FGGGHSjslCgz6kBlOgA+sMccEK3wCvjFOI4xxxgWrjssecQ2s3Rn2qLDo6XqIDaBIdVPjtQd5QoklvlBqDgBrwLwHqXHEAFtA1jxUQHP0XUjUFoBNC8IAS1yQJZEI7gHbJrQFZIEdcUXRQiLIAXmzOAG8xD4wWkgE76gQzxDBATUWDWyXRixRY5eayhQlfjDpmN4DLjhhlD5EhjLWM6ZRHyLHG+CMWd9/m+IgnRp7jH9HSimgAI3NeiiOBhtAawAAtsUaDV9xaDsAAAAASUVORK5CYII=",
                    "width": 15,
                    "height": 15,
                    "alt": "",
                    "flipRtl": false
                  }
                ],
                "output": "DATATYPE",
                "colour": 160,
                "tooltip": "Yes or no values.",
                "helpUrl": "/docs/blocks/true_false/"
            });
        }
    }

    Blockly.Blocks['number_datatype'] = {
        init: function () {
            this.jsonInit({
                "type": "number_datatype",
                "message0": "%1 Number",
                "args0":[
                  {
                    "type": "field_image",
                    "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADASURBVDhPYxh0gBFKM/z//18FSBUDsQZYgDC4AMSdjIyML0AcJhABBc1AHAFhEgUSgLgcwkQCQBftB2EolyBAV4/sIhQAVRgP5WLwcQKoQrANUDYugKyGoIsWQOkDQNwAxSAA4sPksAN0G4BsEKiHcrHxiXIRyQCrQUg2NYCcAQJIfLgrkAFdwgjExxn9UD6m63BK4ADo6pHz2nog5QDEoDxEDDAA4jXAvJYK4iCHUSsQg8KAWLADiDshzMEHGBgAFnW9mZqHm3AAAAAASUVORK5CYII=",
                    "width": 15,
                    "height": 15,
                    "alt": "",
                    "flipRtl": false
                  }
                ],
                "output": "DATATYPE",
                "colour": 160,
                "tooltip": "Numbers.",
                "helpUrl": "/docs/blocks/number/"
            });
        }
    }

    Blockly.Blocks['string_datatype'] = {
        init: function () {
            this.jsonInit({
                "type": "string_datatype",
                "message0": "%1 Text",
                "args0":[
                  {
                    "type": "field_image",
                    "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
                    "width": 15,
                    "height": 15,
                    "alt": "",
                    "flipRtl": false
                  }
                ],
                "output": "DATATYPE",
                "colour": 160,
                "tooltip": "Words, letters, and lines of text.",
                "helpUrl": "/docs/blocks/text/"
            });
        }
    }

    Blockly.Blocks['comparitor'] = {
        init: function () {
            this.jsonInit({
                "type": "comparitor",
                "message0": "%1 %2 %3 %4",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "first_value"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "comparitor",
                        "options": [
                            [
                                "<",
                                "lt"
                            ],
                            [
                                "<=",
                                "lte"
                            ],
                            [
                                ">",
                                "gt"
                            ],
                            [
                                ">=",
                                "gte"
                            ],
                            [
                                "==",
                                "eq"
                            ],
                            [
                                "!=",
                                "neq"
                            ],
                            [
                                "!==",
                                "nid"
                            ]
                        ]
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_value",
                        "name": "second_value"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 290,
                "tooltip": "The comparison of the two values is true.",
                "helpUrl": "/docs/blocks/comparison/"
            });
        }
    }

    Blockly.Blocks['aggregate_statement'] = {
        init: function () {
            this.jsonInit({
                "type": "aggregate_statement",
                "message0": "The  %1 of %2 where %3",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "aggregation_operation",
                        "options": [
                            [
                                "minimum",
                                "min"
                            ],
                            [
                                "maximum",
                                "max"
                            ],
                            [
                                "count",
                                "count"
                            ],
                            [
                                "distinct count",
                                "countdistinct"
                            ],
                            [
                                "average",
                                "avg"
                            ],
                            [
                                "distinct average",
                                "avgdistinct"
                            ],
                            [
                                "sum",
                                "sum"
                            ],
                            [
                                "distinct sum",
                                "sumdistinct"
                            ]
                        ]
                    },
                    {
                        "type": "input_value",
                        "name": "aggregate_variable",
                        "check": "ENTITY"
                    },
                    {
                        "type": "input_statement",
                        "name": "aggregate_conditions"
                    }
                ],
                "inputsInline": true,
                "output": "Number",
                "colour": 230,
                "tooltip": "Obtain one value from a list of values.",
                "helpUrl": "/docs/blocks/aggregate/"
            });
        }
    }

    Blockly.Blocks['object_selector'] = {
        init: function () {
            this.jsonInit({
                "type": "object_selector",
                "message0": "%1",
                "args0": [
                    {
                        "type": "field_label",
                        "text": "Object",
                        "name": "objectName"
                    }
                ],
                "output": "ENTITY",
                "colour": 230,
                "tooltip": "The named object.",
                "helpUrl": "/docs/blocks/object_selector/",
                "mutator": "object_selector_mutator"
            });
        }
    }

    Blockly.Blocks['category_selector'] = {
        init: function () {
            this.jsonInit({
                "type": "category_selector",
                "message0": "%1",
                "args0": [
                    {
                        "type": "field_label",
                        "text": "Category",
                        "name": "categoryName"
                    }
                ],
                "output": "TYPE",
                "colour": 20,
                "tooltip": "The named category.",
                "helpUrl": "/docs/blocks/category_selector/",
                "mutator": "category_selector_mutator"
            });
        }
    }

    Blockly.Blocks['assignment'] = {
      init: function () {
        this.jsonInit({
  "type": "assignment",
  "message0": "%1 is set to %2",
  "args0": [
    {
      "type": "input_value",
      "name": "variable",
      "check": "ENTITY"
    },
    {
      "type": "input_value",
      "name": "value"
    }
  ],
  "inputsInline": true,
  "previousStatement": "ATTRIBUTE_ASSIGNMENT",
  "nextStatement": "ATTRIBUTE_ASSIGNMENT",
  "colour": 60,
  "tooltip": "The variable on the left has the value on the right in this statement.",
  "helpUrl": "/docs/blocks/variable_assignment/"
})
      }
    }

    Blockly.Blocks['math_operator'] = {
      init: function () {
        this.jsonInit(
          {
  "type": "math_operator",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "left_value",
      "check": [
        "ENTITY",
        "Number",
        "DATE",
        "DURATION",
        "TIME",
        "DATETIME"
      ]
    },
    {
      "type": "field_dropdown",
      "name": "operator",
      "options": [
        [
          "+",
          "add"
        ],
        [
          "-",
          "subtract"
        ],
        [
          "*",
          "multiply"
        ],
        [
          "/",
          "divide"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "right_value",
      "check": [
        "ENTITY",
        "Number",
        "DATE",
        "DURATION",
        "TIME",
        "DATETIME"
      ]
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 230,
  "tooltip": "Do math to two numbers. Must be placed inside a calculation block.",
  "helpUrl": "/docs/blocks/math_operator/"
}
        );
      }
    }

    Blockly.Blocks['attribute_selector'] = {
      init: function () {
        this.jsonInit({
  "type": "attribute_selector",
  "message0": "%1 's %2 is %3",
  "args0": [
    {
      "type": "input_value",
      "name": "entity",
      "check": "ENTITY"
    },
    {
      "type": "field_label",
      "text": "Attribute",
      "name": "attributeName"
    },
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "CALCULATED TYPE HERE",
        "ENTITY"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Set or check the value of an object's attribute.",
  "helpUrl": "/docs/blocks/attribute_selector/",
  "mutator": "attribute_selector_mutator"
});
      }
    }

    Blockly.Blocks['import_ruleset'] = {
      init: function () {
        this.jsonInit(
         {
          "type": "import_ruleset",
          "message0": "Include: %1",
          "args0": [
            {
              "type": "field_label_serializable",
              "name": "uri",
              "text": "filename.blawx"
            }
          ],
          "colour": 260,
          "tooltip": "Include code from a Blawx workspace online.",
          "helpUrl": "/docs/blocks/include/"
        }

        )
    }
    }

    Blockly.Blocks['data_property'] = {
      init: function() {
        this.jsonInit(
          {
            "type": "data_property",
            "message0": "%1 's %2 is %3 %4",
            "args0": [
              {
                "type": "input_value",
                "name": "subject",
                "check": [
                  "ENTITY",
                  "String"
                ]
              },
              {
                "type": "field_input",
                "name": "predicate",
                "text": "property"
              },
              {
                "type": "input_dummy"
              },
              {
                "type": "input_value",
                "name": "object"
              }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 0,
            "tooltip": "The object (first blank) has an attribute (second blank) with a value (third blank).",
            "helpUrl": "/docs/blocks/data_attribute/"
          }
        )
      }
    }

    Blockly.Blocks['data_dictionary'] = {
      init: function() {
        this.jsonInit(
          {
        "type": "data_dictionary",
        "message0": "There is an object named %1 %2 : %3",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_input",
            "name": "dictionary_name",
            "text": "data"
          },
          {
            "type": "input_statement",
            "name": "NAME",
            "check": "KVP"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 0,
        "tooltip": "Create a data object. It may contain data dictionaries, and data values.",
        "helpUrl": "/docs/blocks/data_object/"
      }
        )
      }
    }

Blockly.Blocks['kvp_basic'] = {
      init: function() {
        this.jsonInit(
          {
            "type": "kvp_basic",
            "message0": "%1 : %2",
            "args0": [
              {
                "type": "field_input",
                "name": "key",
                "text": "key"
              },
              {
                "type": "input_value",
                "name": "value",
                "check": [
                  "Boolean",
                  "Number",
                  "String",
                  "DATE",
                  "DATETIME",
                  "TIME",
                  "DURATION"
                ]
              }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 0,
            "tooltip": "Creates a data type value inside a data object or data dictionary.",
            "helpUrl": "/docs/blocks/data_value/"
          }
        )
      }
}

Blockly.Blocks['data_dictionary_sub'] = {
      init: function() {
        this.jsonInit(
          {
            "type": "data_dictionary_sub",
            "message0": "%1 : %2",
            "args0": [
              {
                "type": "field_input",
                "name": "dictionary_name",
                "text": "key"
              },
              {
                "type": "input_statement",
                "name": "NAME",
                "check": "KVP"
              }
            ],
            "previousStatement": "KVP",
            "nextStatement": "KVP",
            "colour": 0,
            "tooltip": "Create a dictionary inside a data object or data dictionary. It can contain data dictionaries, or data values.",
            "helpUrl": "/docs/blocks/data_list/"
          }
        )
      }
}

Blockly.Blocks['calculation'] = {
    init: function() {
      this.jsonInit(
        {
            "type": "calculation",
            "message0": "%1 = %2 %3",
            "args0": [
              {
                "type": "input_value",
                "name": "variable",
                "check": "ENTITY"
              },
              {
                "type": "input_dummy"
              },
              {
                "type": "input_value",
                "name": "calculation",
                "check": "Number"
              }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "A variable on the left is given the value calculated using mathematical operation blocks on the right.",
            "helpUrl": "/docs/blocks/calculation/"
        }
      )
    }
}

Blockly.Blocks['boolean_value'] = {
    init: function() {
      this.jsonInit(
        {
            "type": "boolean_value",
            "message0": "%1",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "value",
                "options": [
                  [
                    "true",
                    "true"
                  ],
                  [
                    "false",
                    "false"
                  ]
                ]
              }
            ],
            "output": "Boolean",
            "colour": 195,
            "tooltip": "Yes or No.",
            "helpUrl": "/docs/blocks/tf_value"
          }
      )
    }
}

Blockly.Blocks['date_datatype'] = {
    init: function() {
      this.jsonInit(
{
    "type": "date_datatype",
    "message0": "%1 Date",
    "args0":[
      {
        "type": "field_image",
        "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdElEQVR4Ae3PgQXDYBBH8UMBRQAFFNAxjg7QMTpAAcU3WkboQMWvEBwEFwKVx3Pw97ioYEJiikpzE0hAbtrgjIEPLHdesW5eONXQEzA3hUcNDYgmgLFfqM96aHTc4bU/CB0hZFN419DdNr64RQVXZNNLLPwAidY8ploh57UAAAAASUVORK5CYII=",
        "width": 15,
        "height": 15,
        "alt": "",
        "flipRtl": false
      }
    ],
    "output": "DATATYPE",
    "colour": 160,
    "tooltip": "A date, in YYYY-M-D format.",
    "helpUrl": "/docs/blocks/date/"
  }
  )
}
}

Blockly.Blocks['time_datatype'] = {
    init: function() {
      this.jsonInit(
  {
    "type": "time_datatype",
    "message0": "%1 Time",
    "args0":[
      {
        "type": "field_image",
        "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
        "width": 15,
        "height": 15,
        "alt": "",
        "flipRtl": false
      }
    ],
    "output": "DATATYPE",
    "colour": 160,
    "tooltip": "A time of day.",
    "helpUrl": "/docs/blocks/time/"
  }
  )
}
}

Blockly.Blocks['datetime_datatype'] = {
    init: function() {
      this.jsonInit(
  {
    "type": "datetime_datatype",
    "message0": "%1 %2 Date and Time",
    "args0":[
      {
        "type": "field_image",
        "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdElEQVR4Ae3PgQXDYBBH8UMBRQAFFNAxjg7QMTpAAcU3WkboQMWvEBwEFwKVx3Pw97ioYEJiikpzE0hAbtrgjIEPLHdesW5eONXQEzA3hUcNDYgmgLFfqM96aHTc4bU/CB0hZFN419DdNr64RQVXZNNLLPwAidY8ploh57UAAAAASUVORK5CYII=",
        "width": 15,
        "height": 15,
        "alt": "",
        "flipRtl": false
      },
      {
        "type": "field_image",
        "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
        "width": 15,
        "height": 15,
        "alt": "",
        "flipRtl": false
      }
    ],
    "output": "DATATYPE",
    "colour": 160,
    "tooltip": "A date and time.",
    "helpUrl": "/docs/blocks/datetime/"
  }
  )
}
}

Blockly.Blocks['duration_datatype'] = {
    init: function() {
      this.jsonInit(
  {
    "type": "duration_datatype",
    "message0": "%1 Duration",
    "args0":[
      {
        "type": "field_image",
        "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABBUlEQVR4AbXTAaTCUBTG8eFiCA9heAgPEAAeQoQwAIQwhBAghBACBAgQQghDgABDAAhhCGGAEEIY1v8Ac52tFn38sLPru/eaOUXJssxFw+I6FSNFbdhpf1LkIbB4VUtcjBDhghghBjACrVcl/0ggOSPEGkdIYuzxgFdU0sAdCXzlvZ/bZFJ2mghXeLnZVuSef3FDDKOVdCHp2eXCmgWQ+FrRFDeYN4pqkCy1oh0O6nWhzI/YFxUlynwilPkJK61oDqJ/UmttHSmG2sumcm81sgYp/ooWbCDpl5QEkMzKdqohgmSNZm7eQgjJAebVsQ3GeECSghBmWMCt8uP+oIMxZghQd76dJxd5zAMEIzMrAAAAAElFTkSuQmCC",
        "width": 15,
        "height": 15,
        "alt": "",
        "flipRtl": false
      }
    ],
    "output": "DATATYPE",
    "colour": 160,
    "tooltip": "A duration of time.",
    "helpUrl": "/docs/blocks/duration/"
  }
  )
}
}

Blockly.Blocks['duration'] = {
    init: function() {
      this.jsonInit(  {
    "type": "duration",
    "message0": "%1 Y: %2 M: %3 D: %4 H: %5 M: %6 S: %7",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "sign",
        "options": [
          [
            "+",
            "pos"
          ],
          [
            "-",
            "neg"
          ]
        ]
      },
      {
        "type": "field_number",
        "name": "years",
        "value": 0,
        "min": 0
      },
      {
        "type": "field_number",
        "name": "months",
        "value": 0,
        "min": 0
      },
      {
        "type": "field_number",
        "name": "days",
        "value": 0,
        "min": 0
      },
      {
        "type": "field_number",
        "name": "hours",
        "value": 0,
        "min": 0
      },
      {
        "type": "field_number",
        "name": "minutes",
        "value": 0,
        "min": 0
      },
      {
        "type": "field_number",
        "name": "seconds",
        "value": 0,
        "min": 0,
        "precision": 0.01
      }
    ],
    "inputsInline": true,
    "output": "DURATION",
    "colour": 330,
    "tooltip": "A duration, in +/- Years, Months, Days, Hours, Minues, Seconds format. Seconds are precise to two digits.",
    "helpUrl": "/docs/blocks/duration_value/"
  }
  )
}
}

Blockly.Blocks['time'] = {
    init: function() {
      this.jsonInit(  {
    "type": "time",
    "message0": "%1 : %2 : %3 %4",
    "args0": [
      {
        "type": "field_number",
        "name": "hours",
        "value": 0,
        "min": 1,
        "max": 12
      },
      {
        "type": "field_number",
        "name": "minutes",
        "value": 0,
        "min": 0,
        "max": 59
      },
      {
        "type": "field_number",
        "name": "seconds",
        "value": 0,
        "min": 0,
        "max": 59.99,
        "precision": 0.01
      },
      {
        "type": "field_dropdown",
        "name": "daypart",
        "options": [
          [
            "am",
            "am"
          ],
          [
            "pm",
            "pm"
          ]
        ]
      }
    ],
    "output": "TIME",
    "colour": 330,
    "tooltip": "Time. Choose hours (1-12), minutes (0-59), and seconds (0-59.99), and part of day (am/pm).",
    "helpUrl": "/docs/blocks/time_value/"
  }
  )
}
}

Blockly.Blocks['date'] = {
    init: function() {
      this.jsonInit(
            {
    "type": "date",
    "message0": "%1 / %2 / %3",
    "args0": [
      {
        "type": "field_number",
        "name": "year",
        "value": 2020
      },
      {
        "type": "field_number",
        "name": "month",
        "value": 1,
        "min": 1,
        "max": 12
      },
      {
        "type": "field_number",
        "name": "day",
        "value": 1,
        "min": 1,
        "max": 31
      }
    ],
    "output": "DATE",
    "colour": 330,
    "tooltip": "Date. In YYYY/M/D format.",
    "helpUrl": "/docs/blocks/date_value/"
  }
  )
}
}

Blockly.Blocks['datetime'] = {
    init: function() {
      this.jsonInit(  {
    "type": "datetime",
    "message0": "%1 / %2 / %3 at %4 : %5 : %6 %7",
    "args0": [
      {
        "type": "field_number",
        "name": "year",
        "value": 2020
      },
      {
        "type": "field_number",
        "name": "month",
        "value": 1,
        "min": 1,
        "max": 12
      },
      {
        "type": "field_number",
        "name": "day",
        "value": 1,
        "min": 1,
        "max": 31
      },
      {
        "type": "field_number",
        "name": "hours",
        "value": 0,
        "min": 1,
        "max": 12
      },
      {
        "type": "field_number",
        "name": "minutes",
        "value": 0,
        "min": 0,
        "max": 59
      },
      {
        "type": "field_number",
        "name": "seconds",
        "value": 0,
        "min": 0,
        "max": 59.99,
        "precision": 0.01
      },
      {
        "type": "field_dropdown",
        "name": "daypart",
        "options": [
          [
            "am",
            "am"
          ],
          [
            "pm",
            "pm"
          ]
        ]
      }
    ],
    "output": "DATETIME",
    "colour": 330,
    "tooltip": "A date and time in YYYY/M/D at h:m:s am/pm format. Seconds are precise to two digits.",
    "helpUrl": "/docs/blocks/datetime_value/"
  }
  )
    }
}


Blockly.Blocks['currency_datatype'] = {
  init: function() {
    this.jsonInit(  
{
  "type": "currency_datatype",
  "message0": "💰 Currency",
  "output": "DATATYPE",
  "colour": 180,
  "tooltip": "An amount of currency.",
  "helpUrl": "/docs/blocks/currency/"
}
)}}

Blockly.Blocks['concat_text'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "concat_text",
  "message0": "%1 %2 with %3 %4 %5 appended is %6 %7 %8",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "first_text",
      "check": [
        "String",
        "ENTITY"
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "second_text",
      "check": [
        "String",
        "ENTITY"
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "result",
      "check": [
        "String",
        "ENTITY"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 165,
  "tooltip": "Makes one text value out of two text values by appending them.",
  "helpUrl": "/docs/blocks/text_append/"
}
)}}


Blockly.Blocks['length_text'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "length_text",
  "message0": "length of %1 %2 is %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "text",
      "check": [
        "String",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADASURBVDhPYxh0gBFKM/z//18FSBUDsQZYgDC4AMSdjIyML0AcJhABBc1AHAFhEgUSgLgcwkQCQBftB2EolyBAV4/sIhQAVRgP5WLwcQKoQrANUDYugKyGoIsWQOkDQNwAxSAA4sPksAN0G4BsEKiHcrHxiXIRyQCrQUg2NYCcAQJIfLgrkAFdwgjExxn9UD6m63BK4ADo6pHz2nog5QDEoDxEDDAA4jXAvJYK4iCHUSsQg8KAWLADiDshzMEHGBgAFnW9mZqHm3AAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "Number",
        "ENTITY"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 165,
  "tooltip": "Returns the length of a text value.",
  "helpUrl": "/docs/blocks/text_length/"
}
)}}


Blockly.Blocks['toupper_text'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "toupper_text",
  "message0": "%1 %2 in uppercase is %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "text",
      "check": [
        "String",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "output",
      "check": [
        "String",
        "ENTITY"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 165,
  "tooltip": "Returns the text in ALL CAPS",
  "helpUrl": "/docs/blocks/text_upper/"
}
)}}


Blockly.Blocks['tolower_text'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "tolower_text",
  "message0": "%1 %2 in lowercase is %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "text",
      "check": [
        "String",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "output",
      "check": [
        "String",
        "ENTITY"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 165,
  "tooltip": "Returns the text in lowercase",
  "helpUrl": "/docs/blocks/text_lower/"
}
)}}


Blockly.Blocks['startswith_text'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "startswith_text",
  "message0": "%1 %2 starts with %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "target",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 165,
  "tooltip": "States whether the first text begins with the second text.",
  "helpUrl": "/docs/blocks/text_starts/"
}
)}}


Blockly.Blocks['endswith_text'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "endswith_text",
  "message0": "%1 %2 ends with %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "target",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 165,
  "tooltip": "States whether the first text ends with the second text.",
  "helpUrl": "/docs/blocks/text_ends/"
}
)}}


Blockly.Blocks['substring_text'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "substring_text",
  "message0": "%1 %2 from character %3 %4 to character %5 %6 is %7 %8",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADASURBVDhPYxh0gBFKM/z//18FSBUDsQZYgDC4AMSdjIyML0AcJhABBc1AHAFhEgUSgLgcwkQCQBftB2EolyBAV4/sIhQAVRgP5WLwcQKoQrANUDYugKyGoIsWQOkDQNwAxSAA4sPksAN0G4BsEKiHcrHxiXIRyQCrQUg2NYCcAQJIfLgrkAFdwgjExxn9UD6m63BK4ADo6pHz2nog5QDEoDxEDDAA4jXAvJYK4iCHUSsQg8KAWLADiDshzMEHGBgAFnW9mZqHm3AAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "start",
      "check": "Number"
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADASURBVDhPYxh0gBFKM/z//18FSBUDsQZYgDC4AMSdjIyML0AcJhABBc1AHAFhEgUSgLgcwkQCQBftB2EolyBAV4/sIhQAVRgP5WLwcQKoQrANUDYugKyGoIsWQOkDQNwAxSAA4sPksAN0G4BsEKiHcrHxiXIRyQCrQUg2NYCcAQJIfLgrkAFdwgjExxn9UD6m63BK4ADo6pHz2nog5QDEoDxEDDAA4jXAvJYK4iCHUSsQg8KAWLADiDshzMEHGBgAFnW9mZqHm3AAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "length",
      "check": "Number"
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAaElEQVR4AWOgOvj//78DENeTiE3QDQn+Tz5AGAY1/T/JvoCAegyDSPCiA16D4GzCoJ4YgxRANhLACsPLRfXUijUHXAbRKB1BQD8ZKdsZ1SAEWE5CXgsG6cfqIkpzfj3MEEoN0mAYLAAATaRgs9TeCMkAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "output",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 165,
  "tooltip": "Returns a part of a text. -1 means the end of the text value.",
  "helpUrl": "/docs/blocks/text_part/"
}
)}}

Blockly.Blocks['date_before'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "date_before",
  "message0": "%1 %2 %3 is before %4 %5 %6",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdElEQVR4Ae3PgQXDYBBH8UMBRQAFFNAxjg7QMTpAAcU3WkboQMWvEBwEFwKVx3Pw97ioYEJiikpzE0hAbtrgjIEPLHdesW5eONXQEzA3hUcNDYgmgLFfqM96aHTc4bU/CB0hZFN419DdNr64RQVXZNNLLPwAidY8ploh57UAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "first_date",
      "check": [
        "DATE",
        "DATETIME",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdElEQVR4Ae3PgQXDYBBH8UMBRQAFFNAxjg7QMTpAAcU3WkboQMWvEBwEFwKVx3Pw97ioYEJiikpzE0hAbtrgjIEPLHdesW5eONXQEzA3hUcNDYgmgLFfqM96aHTc4bU/CB0hZFN419DdNr64RQVXZNNLLPwAidY8ploh57UAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "second_date",
      "check": [
        "DATE",
        "DATETIME",
        "ENTITY"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Whether the first date (or datetime) is before the second",
  "helpUrl": "/docs/blocks/date_before/"
}
)}}


Blockly.Blocks['date_before_or_eq'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "date_before_or_eq",
  "message0": "%1 %2 %3 is before or at %4 %5 %6",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdElEQVR4Ae3PgQXDYBBH8UMBRQAFFNAxjg7QMTpAAcU3WkboQMWvEBwEFwKVx3Pw97ioYEJiikpzE0hAbtrgjIEPLHdesW5eONXQEzA3hUcNDYgmgLFfqM96aHTc4bU/CB0hZFN419DdNr64RQVXZNNLLPwAidY8ploh57UAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "first_date",
      "check": [
        "DATE",
        "DATETIME",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdElEQVR4Ae3PgQXDYBBH8UMBRQAFFNAxjg7QMTpAAcU3WkboQMWvEBwEFwKVx3Pw97ioYEJiikpzE0hAbtrgjIEPLHdesW5eONXQEzA3hUcNDYgmgLFfqM96aHTc4bU/CB0hZFN419DdNr64RQVXZNNLLPwAidY8ploh57UAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "second_date",
      "check": [
        "DATE",
        "DATETIME",
        "ENTITY"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Whether the first date or datetime is before or exactly the same as the second.",
  "helpUrl": "/docs/blocks/date_before_equal/"
}
)}}


Blockly.Blocks['time_before_or_eq'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "time_before_or_eq",
  "message0": "%1 %2 is before or at %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "first_time",
      "check": [
        "TIME",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "second_time",
      "check": [
        "TIME",
        "ENTITY"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Whether the first time is before or exactly the same as the second.",
  "helpUrl": "/docs/blocks/time_before_equal"
}
)}}


Blockly.Blocks['time_before'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "time_before",
  "message0": "%1 %2 is before %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "first_time",
      "check": [
        "TIME",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "second_time",
      "check": [
        "TIME",
        "ENTITY"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Whether the first time is before the second.",
  "helpUrl": "/docs/blocks/time_before/"
}
)}}


Blockly.Blocks['time_plus_dur'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "time_plus_dur",
  "message0": "%1 %2 plus %3 %4 is %5 %6",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "time",
      "check": [
        "TIME",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABBUlEQVR4AbXTAaTCUBTG8eFiCA9heAgPEAAeQoQwAIQwhBAghBACBAgQQghDgABDAAhhCGGAEEIY1v8Ac52tFn38sLPru/eaOUXJssxFw+I6FSNFbdhpf1LkIbB4VUtcjBDhghghBjACrVcl/0ggOSPEGkdIYuzxgFdU0sAdCXzlvZ/bZFJ2mghXeLnZVuSef3FDDKOVdCHp2eXCmgWQ+FrRFDeYN4pqkCy1oh0O6nWhzI/YFxUlynwilPkJK61oDqJ/UmttHSmG2sumcm81sgYp/ooWbCDpl5QEkMzKdqohgmSNZm7eQgjJAebVsQ3GeECSghBmWMCt8uP+oIMxZghQd76dJxd5zAMEIzMrAAAAAElFTkSuQmCC",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "duration",
      "check": [
        "DURATION",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "output",
      "check": [
        "TIME",
        "ENTITY"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Add a time and a duration to get a new time.",
  "helpUrl": "/docs/blocks/time_plus/"
}
)}}


Blockly.Blocks['date_plus_dur'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "date_plus_dur",
  "message0": "%1 %2 %3 plus %4 %5 is %6 %7 %8",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdElEQVR4Ae3PgQXDYBBH8UMBRQAFFNAxjg7QMTpAAcU3WkboQMWvEBwEFwKVx3Pw97ioYEJiikpzE0hAbtrgjIEPLHdesW5eONXQEzA3hUcNDYgmgLFfqM96aHTc4bU/CB0hZFN419DdNr64RQVXZNNLLPwAidY8ploh57UAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "date",
      "check": [
        "DATE",
        "DATETIME",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABBUlEQVR4AbXTAaTCUBTG8eFiCA9heAgPEAAeQoQwAIQwhBAghBACBAgQQghDgABDAAhhCGGAEEIY1v8Ac52tFn38sLPru/eaOUXJssxFw+I6FSNFbdhpf1LkIbB4VUtcjBDhghghBjACrVcl/0ggOSPEGkdIYuzxgFdU0sAdCXzlvZ/bZFJ2mghXeLnZVuSef3FDDKOVdCHp2eXCmgWQ+FrRFDeYN4pqkCy1oh0O6nWhzI/YFxUlynwilPkJK61oDqJ/UmttHSmG2sumcm81sgYp/ooWbCDpl5QEkMzKdqohgmSNZm7eQgjJAebVsQ3GeECSghBmWMCt8uP+oIMxZghQd76dJxd5zAMEIzMrAAAAAElFTkSuQmCC",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "duration",
      "check": [
        "DURATION",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdElEQVR4Ae3PgQXDYBBH8UMBRQAFFNAxjg7QMTpAAcU3WkboQMWvEBwEFwKVx3Pw97ioYEJiikpzE0hAbtrgjIEPLHdesW5eONXQEzA3hUcNDYgmgLFfqM96aHTc4bU/CB0hZFN419DdNr64RQVXZNNLLPwAidY8ploh57UAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "output",
      "check": [
        "DATE",
        "DATETIME",
        "ENTITY"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "Add a date or datetime and a duration to get a new time.",
  "helpUrl": "/docs/blocks/date_plus/"
}
)}}


Blockly.Blocks['time_minus_time'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "time_minus_time",
  "message0": "%1 %2 minus %3 %4 is %5 %6",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "time",
      "check": [
        "TIME",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "second_time",
      "check": [
        "TIME",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABBUlEQVR4AbXTAaTCUBTG8eFiCA9heAgPEAAeQoQwAIQwhBAghBACBAgQQghDgABDAAhhCGGAEEIY1v8Ac52tFn38sLPru/eaOUXJssxFw+I6FSNFbdhpf1LkIbB4VUtcjBDhghghBjACrVcl/0ggOSPEGkdIYuzxgFdU0sAdCXzlvZ/bZFJ2mghXeLnZVuSef3FDDKOVdCHp2eXCmgWQ+FrRFDeYN4pqkCy1oh0O6nWhzI/YFxUlynwilPkJK61oDqJ/UmttHSmG2sumcm81sgYp/ooWbCDpl5QEkMzKdqohgmSNZm7eQgjJAebVsQ3GeECSghBmWMCt8uP+oIMxZghQd76dJxd5zAMEIzMrAAAAAElFTkSuQmCC",
      "width": 15,
      "height": 15,
      "alt": "",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "output",
      "check": [
        "DURATION",
        "ENTITY"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "State the duration between two times.",
  "helpUrl": "/docs/blocks/time_minus/"
}
)}}


Blockly.Blocks['date_minus_date'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "date_minus_date",
  "message0": "%1 %2 %3 minus %4 %5 %6 is %7 %8",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdElEQVR4Ae3PgQXDYBBH8UMBRQAFFNAxjg7QMTpAAcU3WkboQMWvEBwEFwKVx3Pw97ioYEJiikpzE0hAbtrgjIEPLHdesW5eONXQEzA3hUcNDYgmgLFfqM96aHTc4bU/CB0hZFN419DdNr64RQVXZNNLLPwAidY8ploh57UAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "date",
      "check": [
        "DATE",
        "DATETIME",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdElEQVR4Ae3PgQXDYBBH8UMBRQAFFNAxjg7QMTpAAcU3WkboQMWvEBwEFwKVx3Pw97ioYEJiikpzE0hAbtrgjIEPLHdesW5eONXQEzA3hUcNDYgmgLFfqM96aHTc4bU/CB0hZFN419DdNr64RQVXZNNLLPwAidY8ploh57UAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABEElEQVR4AbXRAWfDQBjG8SAIgqEIiqIoggCGYARDP0IQ5EMUQzDAEAzDUAwwFAUM+wBFAQUURQGHIgjS/8vhnOtV0Icf8nrz5OSCh2cYhggFKi1HOKZgghYd7Cg0iO+VLHCE5AclUsywxC8keyS3ShKccMbS87ECF10WuxbW6JBa8xav1qyCpHGdpseH4wP/qBzzLRRCc1hCko4oqiHJzWGDISAjijJIKrtIEjte+MMWiTWfQlI7j+koesIXFFYIjduTFObyDJJ3z7U/Y4eVfv5Gh8he3KBH5ikLESFDj9a1NIfCAVNP2QvOOGJyaymH0t4wN/5TgU9ITlgEvuiTbeBKj7V9g97oC6jRaKUueGyuUFDoynUXVjgAAAAASUVORK5CYII=",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "second_date",
      "check": [
        "DATE",
        "DATETIME",
        "ENTITY"
      ]
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABBUlEQVR4AbXTAaTCUBTG8eFiCA9heAgPEAAeQoQwAIQwhBAghBACBAgQQghDgABDAAhhCGGAEEIY1v8Ac52tFn38sLPru/eaOUXJssxFw+I6FSNFbdhpf1LkIbB4VUtcjBDhghghBjACrVcl/0ggOSPEGkdIYuzxgFdU0sAdCXzlvZ/bZFJ2mghXeLnZVuSef3FDDKOVdCHp2eXCmgWQ+FrRFDeYN4pqkCy1oh0O6nWhzI/YFxUlynwilPkJK61oDqJ/UmttHSmG2sumcm81sgYp/ooWbCDpl5QEkMzKdqohgmSNZm7eQgjJAebVsQ3GeECSghBmWMCt8uP+oIMxZghQd76dJxd5zAMEIzMrAAAAAElFTkSuQmCC",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "output",
      "check": [
        "DURATION",
        "ENTITY"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "State the duration bewteen two dates or date times.",
  "helpUrl": "/docs/blocks/date_minus/"
}
)}}

Blockly.Blocks['blawx_string'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "blawx_string",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
      "width": 15,
      "height": 15,
      "alt": "\"",
      "flipRtl": false
    },
    {
      "type": "field_input",
      "name": "string",
      "text": ""
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": 165,
  "tooltip": "A letter, word, or line of text.",
  "helpUrl": "/docs/blocks/text/"
}
)}}


Blockly.Blocks['cardinality_up_to'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "cardinality_up_to",
  "message0": "%1 , which is up to  %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "attribute_name",
      "text": "default"
    },
    {
      "type": "field_number",
      "name": "maximum_cardinality",
      "value": 1,
      "min": 1
    },
    {
      "type": "input_value",
      "name": "attribute_type",
      "check": [
        "TYPE",
        "DATATYPE"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": "ATTRIBUTE_DECLARATION",
  "nextStatement": ["ATTRIBUTE_DECLARATION","ATTRIBUTE_CUSTOMIZATION"],
  "colour": 45,
  "tooltip": "A category has an attribute with a maximum number of values.",
  "helpUrl": "/docs/blocks/attribute_up_to/"
}
)}}


Blockly.Blocks['cardinality_or_more'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "cardinality_or_more",
  "message0": "%1 , which is  %2 or more %3",
  "args0": [
    {
      "type": "field_input",
      "name": "attribute_name",
      "text": "default"
    },
    {
      "type": "field_number",
      "name": "minimum_cardinality",
      "value": 0,
      "min": 0
    },
    {
      "type": "input_value",
      "name": "attribute_type",
      "check": [
        "TYPE",
        "DATATYPE"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": "ATTRIBUTE_DECLARATION",
  "nextStatement": ["ATTRIBUTE_DECLARATION","ATTRIBUTE_CUSTOMIZATION"],
  "colour": 45,
  "tooltip": "A category has an attribute with a minimum number of values.",
  "helpUrl": "/docs/blocks/attribute_or_more/"
}
)}}


Blockly.Blocks['cardinality_exactly'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "cardinality_exactly",
  "message0": "%1 , which is exactly %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "attribute_name",
      "text": "default"
    },
    {
      "type": "field_number",
      "name": "cardinality",
      "value": 1,
      "min": 1
    },
    {
      "type": "input_value",
      "name": "attribute_type",
      "check": [
        "TYPE",
        "DATATYPE"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": "ATTRIBUTE_DECLARATION",
  "nextStatement": ["ATTRIBUTE_DECLARATION","ATTRIBUTE_CUSTOMIZATION"],
  "colour": 45,
  "tooltip": "A category has an attribute with a specific number of values.",
  "helpUrl": "/docs/blocks/attribute_exactly/"
}
)}}


Blockly.Blocks['cardinality_between'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "cardinality_between",
  "message0": "%1 , which is between %2 and %3 %4",
  "args0": [
    {
      "type": "field_input",
      "name": "attribute_name",
      "text": "default"
    },
    {
      "type": "field_number",
      "name": "minimum_cardinality",
      "value": 0,
      "min": 0
    },
    {
      "type": "field_number",
      "name": "maximum_cardinality",
      "value": 1,
      "min": 1
    },
    {
      "type": "input_value",
      "name": "attribute_type",
      "check": [
        "TYPE",
        "DATATYPE"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": "ATTRIBUTE_DECLARATION",
  "nextStatement": ["ATTRIBUTE_DECLARATION","ATTRIBUTE_CUSTOMIZATION"],
  "colour": 45,
  "tooltip": "A category has an attribute with a minimum and maximum number of values.",
  "helpUrl": "/docs/blocks/attribute_between/"
}
)}}


Blockly.Blocks['cardinality_any'] = {
  init: function() {
    this.jsonInit( 
{
  "type": "cardinality_any",
  "message0": "%1 , which is any number of %2",
  "args0": [
    {
      "type": "field_input",
      "name": "attribute_name",
      "text": "default"
    },
    {
      "type": "input_value",
      "name": "attribute_type",
      "check": [
        "TYPE",
        "DATATYPE"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": "ATTRIBUTE_DECLARATION",
  "nextStatement": ["ATTRIBUTE_DECLARATION","ATTRIBUTE_CUSTOMIZATION"],
  "colour": 45,
  "tooltip": "A category has an attribute with any number of values.",
  "helpUrl": "/docs/blocks/attribute_any/"
}
)}}

Blockly.Blocks['unnamed_variable'] = {
  init: function() {
    this.jsonInit(
{
  "type": "unnamed_variable",
  "message0": "any",
  "output": "ENTITY",
  "colour": 60,
  "tooltip": "Match any object or value.",
  "helpUrl": "/docs/blocks/unnamed_variable/"
}
)}}


Blockly.Blocks['silent_variable_selector'] = {
  init: function() {
    this.jsonInit(
{
  "type": "silent_variable_selector",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAzElEQVR4AWOgG/j//78zEJuQokEDiOvRxHYD8e//EDCbWIPqoRr6oXwZqCHBQFwMxN+BWIJYw/rRDAuG0gpQcQcQnyzDcBlErsskoN50ICe2JqN7E4htiNVsAMT7gZgDyv6PxZsyUDUy+AwSgWq0gPIvoxsGpHWA+DMQ8xBy1XaojSxQl8UD8XI0wzRwGoAWQ6+hiVEHKsYCsQBhGGGACIfdUI3voYnxN8SrCMNIMhCq+Two/GBJg1zD9oMwjnRWT2ri7MeRNzUYBi0AANQgbf4Gx9YVAAAAAElFTkSuQmCC",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_input",
      "name": "variable_selected",
      "text": "A"
    }
  ],
  "output": "ENTITY",
  "colour": 60,
  "tooltip": "Match to a variable that may be used again, but which is not reported in queries.",
  "helpUrl": "/docs/blocks/silent_variable/"
}
)}}

Blockly.Blocks['new_object_of_type'] = {
  init: function() {
    this.jsonInit(
{
  "type": "new_object_of_type",
  "message0": "%1 is in the category %2",
  "args0": [
    {
      "type": "field_input",
      "name": "object_name",
      "text": "default"
    },
    {
      "type": "field_label_serializable",
      "name": "category_name",
      "text": "Object"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "An object exists.",
  "helpUrl": "/docs/blocks/new_object"
}
)}}


Blockly.Blocks['custom_attribute_declaration'] = {
  init: function() {
    this.jsonInit(
{
  "type": "custom_attribute_declaration",
  "message0": "Appearing as: %1 %2 %3 %4 %5 %6 %7 %8 %9",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "order",
      "options": [
        [
          "object, then value",
          "object_first"
        ],
        [
          "value, then object",
          "value_first"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_input",
      "name": "prefix",
      "text": ""
    },
    {
      "type": "field_label_serializable",
      "name": "first_element",
      "text": "object"
    },
    {
      "type": "field_input",
      "name": "infix",
      "text": "'s attribute name is"
    },
    {
      "type": "field_label_serializable",
      "name": "second_element",
      "text": "value"
    },
    {
      "type": "field_input",
      "name": "postfix",
      "text": ""
    },
    {
      "type": "field_image",
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "inputsInline": false,
  "previousStatement": "ATTRIBUTE_CUSTOMIZATION",
  "nextStatement": "ATTRIBUTE_DECLARATION",
  "colour": 45,
  "tooltip": "Customize the appearance of the attribute declared directly above it.",
  "helpUrl": "/docs/pages/custom_attribute",
  "extensions": ['changeCustomAttributeText']
}
)}}

Blockly.Blocks['custom_attribute_selector'] = {
  init: function() {
    this.jsonInit(
{
  "type": "custom_attribute_selector",
  "message0": "%1 %2 %3 %4 %5",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "prefix",
      "text": ""
    },
    {
      "type": "input_value",
      "name": "first_entity",
      "check": "FIRST COMPUTED TYPE HERE"
    },
    {
      "type": "field_label_serializable",
      "name": "infix",
      "text": "'s attribute_name is"
    },
    {
      "type": "input_value",
      "name": "second_entity",
      "check": "SECOND COMPUTED TYPE HERE"
    },
    {
      "type": "field_label_serializable",
      "name": "postfix",
      "text": ""
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Use to specify that an entity is related to another entity.",
  "helpUrl": "/docs/blocks/customized_attribute_selector",
  "mutator": "custom_attribute_selector_mutator"
}
)}}

Blockly.Blocks['category_weight'] = {
  init: function() {
    this.jsonInit(
{
  "type": "category_weight",
  "message0": "Category weight: %1",
  "args0": [
    {
      "type": "field_number",
      "name": "weight",
      "value": 0
    }
  ],
  "previousStatement": "category_customize",
  "nextStatement": null,
  "colour": 20,
  "tooltip": "Use this block to change the order in which your categories are collected from users.",
  "helpUrl": "/docs/blocks/category_weight"
}
)}}

Blockly.Blocks['abducibility'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "abducibility",
        "message0": "Hypothesize about whether %1",
        "args0": [
          {
            "type": "input_statement",
            "name": "statement"
          }
        ],
        "colour": 260,
        "tooltip": "Tell the reasoner that when answering queries it can hypothesize about this statement if required.",
        "helpUrl": "/docs/blocks/hypothesize"
      }
      )}}