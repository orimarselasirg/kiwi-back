const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { USER_NOT_FOUND,
    ERROR_ROLE,
    UNDEFINED,
    ROLE_ADMIN,
    ROLE_USER } = require('../constans')

const getAllUsers = async (organizationId) => {
    try {
        const allUsers = await User.find({organizationId})
        if(allUsers.length === 0) {
            return {
                status: false,
                message: "No existen usuarios"
            }
        }
        return allUsers
    } catch (error) {
        return {
            status: false,
            message: "No existen usuarios asociados a la organizacion"
        }
    }
}

const getAllUserById = async (data) => {
    const user = await User.findOne({ _id: data })
    if (!user) {
        return {
            status: false,
            message: USER_NOT_FOUND
        }
    }
    return user
};

const modifyUsers = async (id, data) => {
    const { name, email, password, rol } = data;
    if (rol !== ROLE_USER && rol !== ROLE_ADMIN && typeof rol !== UNDEFINED) {
        return {
            status: ERROR_ROLE
        }
    }

    let pwdEncrypt = bcrypt.hashSync(password, 10);
    const updatedUser = await User.findByIdAndUpdate(id, {
        name,
        email,
        password: pwdEncrypt,
        rol
    },
        {
            new: true
        });
    return updatedUser;
};

const deleteUsers = async (id) => {
    const delUser = await User.findOne({ _id: id })
    if (!delUser) {
        return {
            status: USER_NOT_FOUND
        }
    }
    const deletedtedUser = await User.findByIdAndUpdate(id, {
        status: false
    },
        {
            new: true
        });

    return deletedtedUser;

};

module.exports = {
    getAllUsers,
    getAllUserById,
    modifyUsers,
    deleteUsers
}