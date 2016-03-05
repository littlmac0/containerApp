/**
 * User.js
 *
 * @description :: User model. Defines users.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

module.exports = {

    attributes: {
        name: {
            type: 'string',
        },

        email : {
            type: 'string',
            unique: true,
            required: true,
            email: true,
            index: true
        },

        password : {
            type: 'string'
        },

        food: {
            collection: 'food',
            via: 'user'
        },

        verifyPassword: function (password) {
            return bcrypt.compareSync(password, this.password);
        },

        changePassword: function(newPassword, cb){
            this.newPassword = newPassword;
            this.save(function(err, u) {
                return cb(err,u);
            });
        },

        toJSON: function() {
            var obj = this.toObject();
            return obj;
        },
    },

    beforeCreate: function (attrs, cb) {
        bcrypt.hash(attrs.password, SALT_WORK_FACTOR, function (err, hash) {
            attrs.password = hash;
            return cb();
        });
    },

    beforeUpdate: function (attrs, cb) {
        if(attrs.newPassword){
            bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
                if (err) return cb(err);

                bcrypt.hash(attrs.newPassword, salt, function(err, crypted) {
                    if(err) return cb(err);

                    delete attrs.newPassword;
                    attrs.password = crypted;
                    return cb();
                });
            });
        }
        else {
            return cb();
        }
    }
};
