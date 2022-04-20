import type { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
let db = new sqlite3.Database("./base/admin.db");

export default (req: NextApiRequest, res: NextApiResponse) => {
    db.all("SELECT * FROM users", (err, rows) => {
        if (err) res.json({ message: err, statusCode: 500 });
        const users = rows.filter(el => el.login == req.body.login && el.password == req.body.password ? true : false);
        if (users.length > 0) return res.json({ userData: users[0], message: 'all correct', statusCode: 200 });
        res.json({ message: 'wrong login or password', statusCode: 401 });
    });
}