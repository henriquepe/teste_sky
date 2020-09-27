"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var mongoose = __importStar(require("mongoose"));
var sessions_routes_1 = __importDefault(require("./routes/sessions.routes"));
var signup_routes_1 = __importDefault(require("./routes/signup.routes"));
var users_routes_1 = __importDefault(require("./routes/users.routes"));
// app
var app = express();
app.use(express.json());
var uri = 'mongodb+srv://rosa1702:rosa1702@cluster0.m7oe2.mongodb.net/skydb?retryWrites=true&w=majority';
mongoose.connect(uri, {
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
app.listen(3333, function () {
    console.log('server is running on port 3333');
});
