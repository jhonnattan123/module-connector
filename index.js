'use strict'
/**
 * @version 1.0.0
 * @author Jhonnattan Rivera
 * v1.0.0 creation
 * @description 
 * object used to connect different backend and frontend components.
 */
class moduleConnector {

    constructor() {

        /** @boolean */
        this.success = false;

        /** @string @max_100 description of response */
        this.message = "module_connector";

        /** @integer HTTP code response */ 
        this.code = 500;

        /** @obj || @array content of response*/
        this.response = [];

        Object.preventExtensions(this);
    };

    writeMessageAndReponse( response, message) {
        if( typeof response == "string" && typeof message != "string" ) {
            message = response;
        } else {
            this.response = response;
        };
        if( typeof message != "undefined"){
            this.message = message;
        }
        return this
    };

    successFunctions ( response, message, code ) {
        this.code = code;
        this.success = true;
        return this.writeMessageAndReponse( response, message);
    };

    failedFunctions ( response, message, code ) {
        this.code = code;
        this.success = false;
        return this.writeMessageAndReponse( response, message);
    };

    ok ( response, message) {
        return this.successFunctions( response, message, 200);
    };

    created ( response, message) {
        return this.successFunctions( response, message, 201);
    };

    badRequest ( response, message) {
        return this.failedFunctions( response, message, 400);
    };

    unauthorized ( response, message) {
        return this.failedFunctions( response, message, 401);
    };

    forbidden ( response, message) {
        return this.failedFunctions( response, message, 403);
    };

    notFound ( response, message) {        
        return this.failedFunctions( response, message, 404);
    };

    conflict ( response, message) {        
        return this.failedFunctions( response, message, 409);
    };

}

module.exports = moduleConnector;