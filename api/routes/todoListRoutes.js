'use strict';

module.exports = function(app) {
    const todoList = require('../controllers/todoListController'),
    userAuth = require('../../auth/AuthController'),
    users = require('../admin/controllers/UserController'),
    middlewareVerifyToken = require('../../auth/VerifyToken');


    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);


    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    app.route('/register')
        .post(userAuth.createUser);

    //add midleware to get token route
    //adding this middleware make users with verified tokens
    //can access the resources!
    app.route('/me', middlewareVerifyToken)
        .get(userAuth.getToken);

    app.route('/login')
        .post(userAuth.userLogin);

    app.route('/logout')
        .get(userAuth.logOut);

    app.route('/admin/users/all')
        .get(users.getUsers);

};