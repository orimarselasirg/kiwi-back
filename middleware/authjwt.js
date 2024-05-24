const {
    USER_NOT_FOUND, ROLE_ERROR, TOKEN_ERROR } = require('../constans');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Verificamos si el token existe o es valido

const verifyToken = async (req, res, next) => {
    try {
        //Objeto headers con la propiedad "x-access-token"
        const token = req.headers["x-access-token"] || req.query.access_token || req.headers["authorization"] || req.cookies.access_token;
        //Verificamos si el token es asignado
        if (!token) {
            return res.status(403).json({ message: TOKEN_ERROR });
        }

        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }

        if (token) {
            //Verificamos si el usuario existe y el token es valido
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id, { password: 0 });
            req.userId = decoded.id;
            if (!user) return res.status(404).json({ message: USER_NOT_FOUND });
            next();
        }
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized", error });
    }
};

// Verificamos si el rol del usuario es Administrador
const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if (user.role !== "admin") return res.status(401).json({ message: ROLE_ERROR });
        next();
    } catch (error) {
        return res.status(401).json({ error });
    }
}

module.exports = {
    verifyToken,
    isAdmin
};

