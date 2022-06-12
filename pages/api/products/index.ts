import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');
import { ProductData } from './../../../lib/types/productType/productType';

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    db.all('SELECT * FROM products', (err: any, row: any) => {
        if (err) return res.json({ message: err, statusCode: 500 });

        const arrayProducts: Array<ProductData> = row.map((el: any): ProductData => {
            return {
                id: el.id,
                title: el.name,
                price: el.price,
                status: el.status,
                imgSrc: el.img_src
            }
        });

        res.json({
            message: 'all successful',
            body: arrayProducts,
            statusCode: 200
        })
    });
}