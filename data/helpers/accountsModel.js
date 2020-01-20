const knex = require('knex')
const knexConfig = require('../../knexfile')
const db = require('../dbConfig');

module.exports ={
    get,
    insert,
    update,
    remove
};

function get(){
    return db('accounts');
}

function insert (account){
    return db('accounts')
    .insert(account)
    .then(ids => ({ id: ids[0] }));
}

function update(id, account){
    return db('users')
    .where('id', Number(id))
    .update(account);
}

function remove(id){
    return db('accounts')
    .where('id',Number(id))
    .del()
}