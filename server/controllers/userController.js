var UserItemModel  = require("../../server/models/userItem");

function handleError(res, error) {
    res.statusCode = 500;
    log.error('Internal error(%d): %s',res.statusCode,error.message);
    return res.send({ error: 'Server error' });
}


var userController = {

    testApi: function (req, res) {
        res.send('{"result": "User API is running. You can work."}');
    },

    getUsersList: function (req, res) {
        UserItemModel.find(function (err, usersList) {
            if (!err) {
                res.send(usersList);
            } else {
                handleError(res, err);
            }
        });
    },

    getUserByName: function (req, res) {
        console.log(req.query);
        UserItemModel.find({ first_name: new RegExp(req.query.name, 'i')})
            .exec(function (err, user) {
                if (!err) {
                    return res.send(user);
                } else {
                    handleError(res, err);
                }
            });
    },

    getUserById: function (req, res) {
        return UserItemModel.findById(req.params.db_id, function (err, user) {
            if (!err) {
                res.send(user);
            } else {
                handleError(res, err);
            }
        });
    },


    createUser: function(req, res) {
        var item = new UserItemModel(req.body);

        item.save(function (err) {
            if (!err) {
                res.send({ status: 'OK', item: item });
            } else {
                console.log(err);
                if(err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation error' });
                } else {
                    res.statusCode = 500;
                    res.send({ error: 'Server error' });
                }
                log.error('Internal error(%d): %s',res.statusCode,err.message);
            }
        });
    },

    updateUserById: function (req, res) {
        console.log(req.body);
        UserItemModel.findByIdAndUpdate(req.params.db_id, {
                first_name: req.body.first_name,
                last_name: req.body.last_name
            },
            function(err, user) {
                if (!err) {
                    res.send(user);
                } else {
                    handleError(res, err);
                }
            })

    },

    // Альтернативный способ обновлять пользователя
    // можете не использовать
    updateUser: function(req, res) {
        return UserItemModel.findById(req.params.db_id, function (err, user) {
            if (!err) {

                user.first_name = req.body.first_name;
                user.last_name=  req.body.last_name;
                user.save(function (err) {
                    if (!err) {
                        res.send({ status: 'OK', user: user });
                    } else {
                        handleError(res, err);
                    }
                });

            } else {
                handleError(res, err);
            }
        });
    }

};

module.exports = userController;
