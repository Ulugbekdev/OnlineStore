import type { NextApiRequest, NextApiResponse } from 'next';
import type { Product } from '../../../lib/types';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    db.all(`SELECT * FROM products WHERE id = ${req.query.id}`, (err: any, rows: any) => {
        if (err) return res.json({ message: err, statusCode: 500 });
        const product = rows[0];
        res.json({
            message: 'all successful',
            product: {
                id: product.id,
                name: product.name,
                price: product.price,
                status: product.status,
                imgSrc: product.img_src
            },
            statusCode: 200
        })
    });
}