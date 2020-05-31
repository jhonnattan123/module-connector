# module-connector



object used to connect different backend and frontend components. in order to better control the different scenarios that could occur with the communication of these

## structure
| Attribute  | Type | Default | Description |
| ------------- | :-------------: | :-------------: | ------------- |
| success  | boolean | false | tells us if the process that the component is in charge of is completed successfully or not |
| message  | string | module_connector | a message is left here depending on the conclusion of the component. for example: created_user, existing_name, id_no_found  |
| response  | array / object | [] | All the content that should come from the component is sent here, it can be a list, an element as such, but never a string, boolean or integer value, for reasons of scalability  |
| code  | integer | 500 | HTTP code |

## example

although the component is called a module connector. The most recommended is to define a variable with the name of output when creating a new connector, since it is more readable. it is also recommended to define it as let so that it never deceives us with other classes, functions or services

```javascript

//include library
let moduleConnector = require("module-connector");

//create default output from module connector
let output = new moduleConnector();

//you code
let arrayClientList = [
    { id:1, name: "diana" },
    { id:2, name: "jorge" }
];

//modify output
output.success = true;
output.message = "array_clients_list";
output.code = 200;
output.response = arrayClientList;

//return output
return output;

```
