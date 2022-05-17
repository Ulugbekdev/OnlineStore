import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    db.all(
        `SELECT products.name, products.price, users.login, orders.amount, orders.status, orders.date FROM products 
        INNER JOIN orders ON products.id = orders.product_id
        INNER JOIN users ON orders.customer_id = users.id`,
        (err: any, rows: any) => {
            if (err) return res.json({ message: err, statusCode: 500 });
            const arrayOrders = rows.map((el: any) => {
                return {
                    product: el.name,
                    price: el.price,
                    customer: el.login,
                    amount: el.amount,
                    status: el.status,
                    date: el.date,
                    total: +el.price * +el.amount
                }
            }) 
            
            res.json({
                message: 'all successful',
                body: arrayOrders,
                statusCode: 200
            })
        }
    );
}