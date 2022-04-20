import type { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
let db = new sqlite3.Database("./base/admin.db");

export default (req: NextApiRequest, res: NextApiResponse) => {
    db.run("INSERT INTO users(login, password) VALUES($login, $password)", [req.body.login, req.body.password], (err, row) => {
        if (err) return res.json({ message: err, statusCode: 500 });
        db.all("SELECT * FROM users", (err, rows) => {
            if (err) res.json({ message: err, statusCode: 500 });
            const user = rows.filter(el => el.login == req.body.login && el.password == req.body.password ? true : false);
            if (user.length > 0) res.json({ message: 'you registred', userData: user[0], statusCode: 200 });
        });
    });
}