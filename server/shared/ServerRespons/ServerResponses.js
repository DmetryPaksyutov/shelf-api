
const generateServerCode = (res, code, data, fullError = '', msg = '', location = 'server') => {
    const errors= {
        location,
        fullError,
        msg,
    };


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    return res.status(code).json({
        code,
        data,
        errors,
    });
}

module.exports = {
    generateServerCode,
}