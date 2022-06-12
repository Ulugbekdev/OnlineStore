import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');
import { ProductData } from './../../../lib/types/productType/productType';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    db.all(`SELECT * FROM products WHERE id = ${req.query.id}`, (err: any, rows: any) => {
        if (err) return res.json({ message: err, statusCode: 500 });
        
        const rowsProduct = rows[0];

        const product: ProductData = {
            id: rowsProduct.id,
            title: rowsProduct.name,
            price: rowsProduct.price,
            status: rowsProduct.status,
            imgSrc: rowsProduct.img_src
        };

        res.json({
            message: 'all successful',
            product: product,
            statusCode: 200
        })
    });
}