const express = require("express");
const cors = require("cors");
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);
require("dotenv").config();
const cookieParser = require("cookie-parser");
const auth = require("./routes/auth");
const services = require("./routes/service");
const license = require("./routes/license");
const client = require("./routes/client");
const user = require("./routes/user");
const tech = require("./routes/tech");
const product = require("./routes/product");
const station = require("./routes/station");
const types = require("./routes/types.routes");
const organizations = require("./routes/organization")
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use(cors(
//     {
//         origin: process.env.FRONTEND_URL_DEPLOYED || process.env.FRONTEND_URL_LOCAL,
//         credentials: true
//     }
// ))

app.use("/api/v1", auth);
app.use("/api/v1", services);
app.use("/api/v1", license);
app.use("/api/v1", client);
app.use("/api/v1", user);
app.use("/api/v1", tech);
app.use("/api/v1", product);
app.use("/api/v1", station);
app.use("/api/v1", types);
app.use("/api/v1", organizations);

module.exports = { server, io };
