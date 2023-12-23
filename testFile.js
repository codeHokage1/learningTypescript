"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name;
name = "testFile";
var loginUser = function (username, password) {
    if (username === "admin" && password === "admin") {
        return true;
    }
    return false;
};
var createUser = function (user) {
    if (user.username && user.password) {
        return true;
    }
    return false;
};
createUser({ username: "admin", password: "admin" });
