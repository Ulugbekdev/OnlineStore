import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    db.run(
        'INSERT INTO products (name, price, status, img_src) VALUES (?, ?, ?, ?)',
        [req.body.name, req.body.price, req.body.status, req.body.imgSrc],
        (err: any) => {
            if (err) return res.json({ message: 'Add product. Error status code 500', statusCode: 500 });

            res.json({
                message: 'Adding product',
                statusCode: 200
            })
        }
    );
}