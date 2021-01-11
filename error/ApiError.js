class ApiError {
    constructor(message, code) {
        this.code = code;
        this.message = message;
    }

    static badRequest(message, code = 400) {
        return new ApiError(message, code);
    }

    static internal(message) {
        return new ApiError(message, 500);
    }
}

module.exports = ApiError;