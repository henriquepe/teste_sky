"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var authConfig_1 = __importDefault(require("../config/authConfig"));
function ensureAuthenticated(request, response, next) {
    var authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.json({ mensagem: 'Not authorized - Invalid Session' });
    }
    var _a = authHeader.split(' '), token = _a[1];
    var secret = authConfig_1.default.jwt.secret;
    try {
        var decoded = jsonwebtoken_1.verify(token, secret);
        var sub = decoded.sub;
        request.user = {
            id: sub,
        };
        return next();
    }
    catch (_b) {
        return response.json({
            mensagem: 'Not authorized - Invalid Session',
        });
    }
}
exports.default = ensureAuthenticated;
