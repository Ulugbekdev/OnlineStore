import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    db.all(`SELECT amount, name, price, product_id FROM cart_shopping as c INNER JOIN products as p ON c.customer_id = ${req.query.id} AND p.id = c.product_id `, (err: any, rows: any) => {
        if (err) {
            return res.json({ message: 'set user error status code 500', statusCode: 500 });
        }

        const arrayProductsCart = rows.map((el: any) => {
            return {
                ...el,
                id: el.product_id,
                total: el.amount * +el.price
            }
        });        
        
        res.json({ message: 'all successfull', statusCode: 200, products: arrayProductsCart });
    });
};