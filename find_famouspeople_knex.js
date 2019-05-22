const pg = require("pg");
const settings = require("./settings"); // settings.json


var knex = require('knex')({
    client: 'pg',
    connection: {
        host: settings.hostname,
        user: settings.user,
        password: settings.password,
        database: settings.database
    }
});

// let firstName = 'Paul';
// let lastName  = 'Giamatti';

console.log(process.argv);

let firstName = process.argv[2];
let lastName = process.argv[3];
let birthDate = process.argv[4];

console.log(firstName);
console.log(lastName);
console.log(birthDate);
// Select version
//----------
// there are a couple of syntax request here - they all do the same thing
// ----------------------------------
// replaces then
// knex.select('*').from('famous_people').asCallback(err,res) => {
//});
// knex.select().table('famous_people').where("first_name", "Paul").then(function (rows) {
//knex.select('*').from('famous_people').where("first_name", "Paul").then(function (rows) {
//     console.log(rows);
//     //return rows;
//     knex.destroy();
// });

//(first_name, name) should also work
//knex.select('*').from('famous_people').where(knex.raw('first_name = ?', [name])).then(function (rows) {
//knex.select('*').from('famous_people').where(knex.raw('first_name = ?', name)).then(function (rows) {

// simple select with and condition
//----------
// knex.select('*').from('famous_people')
// .where(knex.raw('first_name = ?', firstName))
// .where(knex.raw('last_name = ?', lastName))
// .then(function (rows) {
//     console.log(rows);
//     knex.destroy();
// });

// select with where clause and or clause
//----------
// knex.select('*').from('famous_people')
// .where(knex.raw('first_name = ?', firstName))
// .orWhere(knex.raw('last_name = ?', lastName))
// .then(function (rows) {
//     console.log(rows);
//     knex.destroy();
// });

// knex('famous_people').insert([
//     {first_name: firstName},
//     {last_name: lastName},
//     {birthdate: birthDate}
// ]);
knex('famous_people').insert([{first_name: firstName, last_name: lastName, birthdate: birthDate}]).asCallback((err, res) => {
        if (err) {
            console.log("Err", err);
        }
        console.log('Successful insert');
});