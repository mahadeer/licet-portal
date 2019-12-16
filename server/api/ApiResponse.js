'use strict';
module.exports = class ApiResponse {
    constructor(code, message) {
        this.__obj = {
            code,
            message,
            status: true,
            data: {}
        }
    }

    setContext(data) {
        this.__obj.data = data;
    }

    setMessage(message) {
        this.__obj.message = message;
    }

    setFailedStatus(message) {
        this.__obj.status = false;
        this.__obj.message = message;
    }

    json() {
        return { ...this.__obj };
    }
}