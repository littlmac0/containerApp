/**
 * User.js
 *
 * @description :: User model. Defines users.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

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

        lastLoggedIn: {
            type: 'datetime'
        },

        food: {
            collection: 'food',
            via: 'user'
        },


    }
};

