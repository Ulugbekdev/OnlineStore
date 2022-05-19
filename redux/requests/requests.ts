import axios from 'axios';

const initial = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const login = {
    getLogin(data: any): any {
        const jsonData = JSON.stringify(data);
        return initial.post('login', jsonData);
    },
    register(data: any): any {
        const jsonData = JSON.stringify(data);
        return initial.post('register', jsonData);
    }
}

export const notes = {
    addNotes(data: any): any {
        const jsonData = JSON.stringify(data);
        return initial.post('notes/add', jsonData);
    },
    getNotes(userId: any): any {
        return initial.get(`notes/${userId}`);
    },
    delNotes(data: any): any {
        const jsonData = JSON.stringify(data);
        return initial.delete('notes/del', {
            data: jsonData
        });
    }
}

export const products = {
    getProducts(): any {
        return initial.get('products');
    },
    getProduct(id: any): any {
        return initial.get(`products/${id}`);
    },
    addProduct(data: any): any {
        const jsonData = JSON.stringify(data);
        return initial.post('products/add', jsonData);
    }
}

export const orders = {
    getOrders(): any {
        return initial.get('orders');
    },
    addOrder(data: any): any {
        const jsonData = JSON.stringify(data);
        return initial.post('orders/add', jsonData);
    }
}

export const cart = {
    getCart(userId: any): any {
        return initial.get(`cart/${userId}`);
    },
    addCart (data: any): any {
        const jsonData = JSON.stringify(data);
        return initial.post('cart/add', jsonData);
    }, 
    increaseNumber (data: any): any {
        const jsonData = JSON.stringify(data);
        return initial.post('cart/increase-number', jsonData);
    },
    decreaseQuantity (data: any): any {
        const jsonData = JSON.stringify(data);
        return initial.post('cart/decrease-quantity', jsonData);
    }
}