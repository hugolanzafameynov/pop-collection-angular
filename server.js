const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')

app.use(express.json());

app.use(cors())

const products = [
    {
        id: 1,
        title: "Peluche Harry Potter",
        description: "Peluche certifiÃ©e OEKO-TEX, coton bio issue du commerce Ã©quitable, taille 12 cm ",
        imageUrl: "https://media.auchan.fr/42f06d04-cd4f-4cf0-8d86-48c56c856e31_512x512/B2CD/",
        price: 2300,
        likes: 0,
        isLiked: false,
        createdDate: new Date('2022-02-28'),
        sizes: ['XL']
    },
    {
        id: 2,
        title: "Peluche Ronnald Weasley",
        description: "Peluche certifiÃ©e OEKO-TEX, coton bio issue du commerce Ã©quitable, taille 12 cm ",
        imageUrl: "https://media.auchan.fr/0f9dcc51-564c-45d8-bda1-a27cf1db4703_512x512/B2CD/",
        price: 2100,
        likes: 0,
        isLiked: false,
        createdDate: new Date('2022-02-27'),
        sizes: ['XL', 'L']
    }
]

const orderIds = [
    {
        id: 1,
        contactNme: "LoÃ¯se Fenoll",
        status: "Completed",
        orderId: "azerttyicp"
    },
    {
        id: 2,
        contactNme: "Jane Birkin",
        status: "Shipped",
        orderId: "ugyiuoijkbj"
    },
    {
        id: 3,
        contactNme: "Nicola Sirkis",
        status: "Payed",
        orderId: "yugumlkmlm"
    }
]

app.get('/products', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(products)
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.set('Access-Control-Allow-Origin', '*');
    res.json(products.find((p) => p.id == id))
});

app.put('/products/:id/likes', (req, res) => {
    const id = req.params.id;
    let product = products.find((p) => p.id == id);
    if (product.isLiked) {
        product.likes--;
    } else {
        product.likes++;
    }
    product.isLiked = !product.isLiked;

    res.set('Access-Control-Allow-Origin', '*');
    res.json(product)
})

app.post('/orders', (req, res) => {
    let contactName = req.body.contact.name;
    let random = (Math.random() + 1).toString(36).substring(7);
    let newOrder = {
        id: orderIds[orderIds.length - 1] + 1,
        contactNme: contactName,
        status: "Saved",
        orderId: random
    }
    orderIds.push(newOrder)
    res.set('Access-Control-Allow-Origin', '*');
    res.json(newOrder.id)
})

app.get('/orders', (req,res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(orderIds)
})

app.get('/orders/:id', (req,res) => {
    const id = req.params.id;
    res.set('Access-Control-Allow-Origin', '*');
    res.json(orderIds.find((o) => o.id == id))
})

app.listen(port, () => {
    console.log(`Application exemple Ã  l'Ã©coute sur le port ${port}!`)
});
