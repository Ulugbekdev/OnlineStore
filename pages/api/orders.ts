import { faSortAmountAsc } from '@fortawesome/free-solid-svg-icons';
import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    db.all(`SELECT users.login as customer, products.name as product, orders.amount, products.price, orders.status, orders.date, products.price * orders.amount as total 
            FROM order_products
                INNER JOIN products ON order_products.product_id = products.id
                INNER JOIN orders ON order_products.order_id = orders.id
                INNER JOIN users ON order_products.customer_id = users.id`,
        (err, rows) => {
            if (err) return res.json({ message: err, statusCode: 500 });

            res.json({
                message: 'all successful',
                body: rows,
                statusCode: 200
            })
        }
    );
}