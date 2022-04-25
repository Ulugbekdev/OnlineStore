import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../lib/types';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    db.run('INSERT INTO users(login, password, type_user) VALUES($login, $password, $admin)', [req.body.login, req.body.password, 'admin'], (err, row) => {
        if (err) {
            return res.json({ message: 'error register status code 500', statusCode: 500 })
        }

        db.all('SELECT * FROM users', (err, rows) => {
            if (err) {
                res.json({ message: 'error add user data status code 500', statusCode: 500 })
            }

            const user = rows.filter(el => el.login == req.body.login && el.password == req.body.password ? true : false);
    
            if (user.length > 0) {
                const userData:User = {
                    userName: user[0].login,
                    userId: user[0].id
                }
                res.json({ message: 'you registred', body: userData, statusCode: 200 })
            };
        });
    });
}