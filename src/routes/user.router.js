
const { getAll, create, getOne, remove, update, veryCode, login, logged } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJWT } = require('../utils/verifyJWT');


const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJWT, getAll)
    .post(create);

routerUser.route('/login')
    .post(login)
routerUser.route('/me')
    .post(verifyJWT, logged)
routerUser.route('/verify/:code')
    .get(veryCode)
routerUser.route('/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = routerUser;