import { faSortAmountAsc } from '@fortawesome/free-solid-svg-icons';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Order } from '../../lib/types';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    db.all(`SELECT users.login as customer, products.name as product, orders.amount, products.price, orders.status, orders.date, products.price * orders.amount as total 
            FROM order_products
                INNER JOIN products ON order_products.product_id = products.id
                INNER JOIN orders ON order_products.order_id = orders.id
                INNER JOIN users ON order_products.customer_id = users.id`,
        (err, row) => {
            if (err) return res.json({ message: err, statusCode: 500 });

            const arrayOrders:Array<Order> = row.map((el):Order => {
                return {
                    customer: el.customer,
                    product: el.product, 
                    amount: el.amount,
                    price: el.price,
                    status: el.status,
                    date: el.date,
                    total: el.total
                }
            })

            res.json({
                message: 'all successful',
                body: row,
                statusCode: 200
            })
        }
    );
}