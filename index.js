'use strict'
/**
 * @version 1.0.8
 * @author Jhonnattan Rivera
 * @description 
 * object used to connect different backend and frontend components.
 */
class moduleConnector {

    constructor( objectDefaultData ) {

        /** @boolean */
        this.success = false;

        /** @string @max_100 description of response */
        this.message = "module_connector";

        /** @integer HTTP code response */ 
        this.code = 500;

        /** @obj || @array content of response*/
        this.response = [];

        // set message when new instance is created
        if( typeof objectDefaultData === "string" ){
            this.message = objectDefaultData;
        }

        Object.preventExtensions(this);
    };

    writeMessageAndReponse( response = [], message) {
        if( typeof response == "string" && typeof message != "string" ) {
            message = response;
        } else {
            this.response = response || [];
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

    accepted ( response, message) {
        return this.successFunctions( response, message, 202);
    };
    
    nonAuthoritative ( response, message) {
        return this.successFunctions( response, message, 203);
    };

    noContent ( response, message) {
        return this.successFunctions( response, message, 204);
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