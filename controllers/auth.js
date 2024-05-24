const { ERROR } = require("../constans");
const { registers, logins, refreshTokens, forgotPasswords, createNewPasswords } = require('../services/auth');

const login = async (req, res) => {
    const { email } = req.body;
    try {
        res.status(200).send(await logins(email, res));
    } catch (error) {
        console.log({
            name: error.name,
            message: error.message
        })
        res.status(400).send({ msg: ERROR });
    }
}

const register = async (req, res) => {
    try {
        res.status(200).send(await registers(req.body));
    } catch (error) {
        console.log({
            name: error.name,
            message: error.message
        })
        res.status(400).send({ msg: ERROR });
    }
}

const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.headers.refresh;
        res.status(200).send(await refreshTokens(refreshToken, res));
    } catch (error) {
        console.log({
            name: error.name,
            message: error.message
        })
        res.status(400).send({ msg: ERROR });
    }
}

const forgotPassword = async (req, res) => {
    console.log(req)
    try {
        const { email } = req.body
        res.status(200).send(await forgotPasswords(email, res));
    } catch (error) {
        console.log({
            name: error.name,
            message: error.message
        })
        res.status(400).send({ msg: ERROR });
    }
}

const createNewPassword = async (req, res) => {
    try {
        res.status(200).send(await createNewPasswords(req, res));
    } catch (eror) {
        console.log({
            name: eror.name,
            message: eror.message
        })
        res.status(400).send({ msg: ERROR });
    }
}

module.exports = {
    login,
    register,
    refreshToken,
    forgotPassword,
    createNewPassword
};