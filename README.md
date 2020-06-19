# module-connector

object used to connect different backend and frontend components. in order to better control the different scenarios that could occur with the communication of these

## structure

| Attribute  | Type | Default | Description |
| ------------- | :-------------: | :-------------: | ------------- |
| success  | boolean | false | tells us if the process that the component is in charge of is completed successfully or not |
| message  | string | module_connector | a message is left here depending on the conclusion of the component. for example: created_user, existing_name, id_no_found  |
| response  | array / object | [] | All the content that should come from the component is sent here, it can be a list, an element as such, but never a string, boolean or integer value, for reasons of scalability  |
| code  | integer | 500 | HTTP code |

## Simple example

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

## Example with http-based methods

using http-based methods it is possible to shorten the previous sentence making it smaller and more readable

### Success methods

in this case using the ok() for send a success true response with code 200. same as the previous example

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
output.ok( arrayClientList, "array_clients_list" );

//return output
return output;

```

### Faileds methods

in this case using the badRequest() for send a success false response with code 400.

```javascript

// for output with response and message
output.badRequest( arrayClientList, "array_clients_list" );

// this return
{
    success : false,
    message : "array_clients_list",
    code : 400,
    response : [
        { id:1, name: "diana" },
        { id:2, name: "jorge" }
    ]
}

```

also if you don't have an object to add to your output you can just write the message (this also applies to successful responses)

```javascript
// for output with message only
output.badRequest( "array_clients_list" );

// this return
{
    success : false,
    message : "array_clients_list",
    code : 400,
    response : []
}
```

## Methods
it is recommended that all requests with code 2XX are always true and that 3XX, 4XX and 5XX are always false
| Method&nbsp;Name  | Success | Code |
| :------------- | :-------------: | :-------------: |
| .ok()  | true | 200 |
| .created()  | true | 201 |
| .accepted()  | true | 202 |
| .nonAuthoritative()  | true | 203 |
| .noContent()  | true | 203 |
| .badRequest()  | false | 400 |
| .unauthorized()  | false | 401 |
| .forbidden()  | false | 403 |
| .notFound()  | false | 404 |
| .conflict()  | false | 409 |
