const parseError = (error:any, custom = false, field = null) => {
    if (custom) {
        return {
            status: "error",
            error: { code: 404, message: error, field: field },
        };
    } else if (error.response) {
        const field = error.response.data.error;
        const message = error.response.message;
        const code = error.response.status;
        return {
            status: "error",
            error: { code: code, message: message, field: field },
        };
    } else {
        return {
            status: "error",
            error: { code: 404, message: "please check api point or network" },
        };
    }
}

export default parseError