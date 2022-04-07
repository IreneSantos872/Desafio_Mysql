module.exports = server => {


   const connection = require('../database/connection');

    server.get('/', (require, response) => {
        response.json({message: 'Bem vindo ao catálogo de séries e filmes'})
    })


    server.get('/movies', (require, response) => {

        connection.connect(function(err){
            if(!err){
                console.log("Database is connected");
            } else {
                console.log("Error while connecting with database");
                console.log(err);
            }
        });

        const sql = 'Select * from movies';
        connection.query(sql, (error, res) => {
            if (error){
                return error;
            } console.log("movies: ", res);

            response.json(res)
        });

        connection.end();


    })
};
