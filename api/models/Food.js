/**
 * Food.js
 *
 * @description :: Food items
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        name : {
            type: 'string',
            size: 1000,
            required: true
        },

        default : {
            type: 'boolean',
            defaultsTo: false,
            index: true
        },

        green : {
            type: 'integer',
            defaultsTo: 0
        },

        red : {
            type: 'integer',
            defaultsTo: 0
        },

        yellow : {
            type: 'integer',
            defaultsTo: 0
        },

        purple : {
            type: 'integer',
            defaultsTo: 0
        },

        blue : {
            type: 'integer',
            defaultsTo: 0
        },

        orange : {
            type: 'integer',
            defaultsTo: 0
        },

        spoon : {
            type: 'integer',
            defaultsTo: 0
        },

        user: {
            model: 'user'
        }
    }
};

