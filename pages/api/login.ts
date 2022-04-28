import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../lib/types';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    db.all(`SELECT * FROM users WHERE type_user = "${req.body.typeUser}"`, (err, rows) => {
        if (err) {
            return res.json({ message: 'error status code 500', statusCode: 500 })
        }

        const user = rows.filter(el => el.login == req.body.login && el.password == req.body.password ? true : false);
        
        if (user.length > 0) {
            const userData:User = {
                userName: user[0].login,
                userId: user[0].id
            }
            return res.json({ body: userData, message: 'all correct', statusCode: 200 })
        }
        
        res.json({ message: 'wrong login or password', statusCode: 401 });
    });
}