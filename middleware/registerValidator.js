const { EMAIL_ERROR, PASSWORD_ERROR } = require('../constans');

const registerValidator = async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(401).json({
                status: false,
                msg: "Por favor ingresa todos los campos requeridos",
            });
        }

        // Email validation
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (!validEmail.test(email)) {
            return res.status(401).json({
                status: false,
                msg: EMAIL_ERROR
            });
        }

        // Password validation
        const validPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,16}$/;

        if (!validPwd.test(password)) {
            return res.status(401).json({
                status: false,
                msg: PASSWORD_ERROR
            });
        }

    } catch (error) {
        console.log({
            name: error.name,
            msg: error.message,
        });
        return res.status(400).json({
            status: false,
            msg: "error middleware",
        });
    }
    next();
};

module.exports = {
    registerValidator,
};
