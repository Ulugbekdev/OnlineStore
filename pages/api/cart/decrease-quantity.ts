import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const customerId = req.body.userId;
    const productId = req.body.productId;

    db.all(`SELECT amount FROM cart_shopping WHERE cart_shopping.customer_id = ${customerId} AND cart_shopping.product_id = ${productId}`, (err: any, rows: any) => {
        if (err) {
            return res.json({ message: 'Selecting product. Error status code 500', statusCode: 500 })
        }
        const amountRow = +rows[0].amount;
        if (amountRow === 1) {
            db.run(`DELETE FROM cart_shopping WHERE product_id = ${productId} AND customer_id = ${customerId}`, (err: any) => {
                if (err) {
                    return res.json({ message: 'Remove statement. Error status code 500', statusCode: 500 })
                }
            });
        }
        const amount = amountRow - 1;
        db.run(`UPDATE cart_shopping SET amount = ${amount} WHERE product_id = ${productId} AND customer_id = ${customerId}`, (err: any) => {
            if (err) {
                return res.json({ message: 'Update amount. Error status code 500', statusCode: 500 })
            }
            res.json({ message: 'Update amount completed', statusCode: 200 });
        })
    })
};