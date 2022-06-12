import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    db.run('INSERT INTO users(login, password, type_user) VALUES($login, $password, $admin)', [req.body.login, req.body.password, req.body.typeUser], (err: any, row: any) => {
        if (err) {
            return res.json({ message: 'error register status code 500', statusCode: 500 })
        }

        db.all('SELECT * FROM users', (err: any, rows: any) => {
            if (err) {
                res.json({ message: 'error add user data status code 500', statusCode: 500 })
            }

            const user = rows.filter(el => el.login == req.body.login && el.password == req.body.password ? true : false);
    
            if (user.length > 0) {
                const userData = {
                    userName: user[0].login,
                    userId: user[0].id
                }
                res.json({ message: 'you registred', body: userData, statusCode: 200 })
            };
        });
    });
}