const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});


let queryType = process.argv[2];
console.log(queryType);


client.connect((err) => {
    if (err) {
        return console.error("Connection Error", err);
    }

    // YOU CANNOT RUN MORE THAN ON SQL ACTION IN A FILE - YOU CAN HAVE MORE THAN ONE BUT IT MUST HAVE LOGIC SO ONLY ONE RUNS AT TIME
    if (queryType === 'all') {

    client.query("SELECT * FROM famous_people", (err, result) => {
        if (err) {
            return console.error("error running query", err);
        }
        console.log(result.rows);
        client.end();
    });
}
//let idTest = process.argv.slice(2, 3);
//console.log(process.argv[2]);
//console.log(idTest);

if (queryType === 'one') {
    let id = process.argv[3];
    client.query("SELECT * FROM famous_people WHERE id = $1", [id], (err, result) => {
        if (err) {
            return console.error("error running query", err);
        }
        console.log(result.rows);
        client.end();
    });
}

});