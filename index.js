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
    
}

module.exports = moduleConnector;