"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var sessions_routes_1 = __importDefault(require("./routes/sessions.routes"));
var signup_routes_1 = __importDefault(require("./routes/signup.routes"));
var users_routes_1 = __importDefault(require("./routes/users.routes"));
// app
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
var uri = 'mongodb+srv://rosa1702:rosa1702@cluster0.m7oe2.mongodb.net/skydb?retryWrites=true&w=majority';
mongoose_1.default.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, function (err) {
    if (err)
        throw err;
    console.log('database connected!');
});
// eslint-disable-next-line import/first
require('./models/User');
// rotas
app.use(signup_routes_1.default);
app.use(sessions_routes_1.default);
app.use(users_routes_1.default);
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("server is running on port " + port);
});
