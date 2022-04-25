import type { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
let db = new sqlite3.Database("./base/admin.db");

type Product = {
    id: number
    name: string 
    price: string
    status: string
    imgSrc: string
}

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    db.all("SELECT * FROM products", (err, row) => {
        if (err) return res.json({ message: err, statusCode: 500 });
        const arrayProducts: Array<Product> = row.map((el) => {
            return {
                id: el.id,
                name: el.name,
                price: el.price,
                status: el.status,
                imgSrc: el.img_src
            }
        });
        res.json({
            message: "all successful",
            body: arrayProducts,
            statusCode: 200
        })
    });
}