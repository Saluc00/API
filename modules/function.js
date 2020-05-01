const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()

export function get(route, request) {
    app.get(route, (req, res) => {
        let data = []
        db.all(request, [], (err, rows) => {
            if (err) {
              throw err;
            }
            for (let i = 0; i < 10; i++) {
                const element = rows[i];
                data.push(element);
            }
            console.log(data)
            res.send({
                data: data
            })
          });
    })
}