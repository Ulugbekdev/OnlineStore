import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');
import { LoginData } from '../../../lib/types/loginType/loginType';

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    db.all(`SELECT * FROM users WHERE type_user = "${req.body.typeUser}"`, (err: any, rows: any) => {
        if (err) {
            return res.json({ message: 'error status code 500', statusCode: 500 })
        }

        const user = rows.filter((el: any) => el.login == req.body.login && el.password == req.body.password ? true : false);
        
        if (user.length > 0) {
            const userData: LoginData = {
                userName: user[0].login,
                userId: user[0].id
            }
            return res.json({ body: userData, message: 'all correct', statusCode: 200 })
        }
        
        res.json({ message: 'wrong login or password', statusCode: 401 });
    });
}