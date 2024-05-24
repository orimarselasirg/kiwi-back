const mongoose = require("mongoose");
const { DB_USERNAME_KIWI, DB_PASSWORD_KIWI, DB_HOST_KIWI, DB_NAME_KIWI } =
  process.env;
const dbConnect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USERNAME_KIWI}:${DB_PASSWORD_KIWI}@${DB_HOST_KIWI}/${DB_NAME_KIWI}`,
      {
        ssl: true,
        sslValidate: true,
        useNewUrlParser: true,
      }
    );
    console.log("Conectado a database mongo");
  } catch (error) {
    console.log(error);
    throw new Error("Error en la conexion");
  }
};

module.exports = { dbConnect };
