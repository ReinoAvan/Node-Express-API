const { v4: uuidv4 } = require('uuid');

let products = []

exports.getProducts = (req,res,next) => {
    res.send(products);
}

exports.postProduct = (req,res,next) => {
    const product = req.body;
    products.push({ ...product, id: uuidv4() });
    res.send(`Product ${product.name} added to database`);
}

exports.getProductById = (req,res,next) => {
    const { id } = req.params;
    const findProduct = products.find((product) => product.id === id);
    res.send(findProduct);
}

exports.deleteProduct = (req,res,next) => {
    const { id } = req.params;
    products = products.filter((product) => product.id !== id);
    res.send(`Product ${id} delete from database`)
}

exports.updateProduct = (req,res,next) => {
    const { id } = req.params;
    const { name,price,stock } = req.body;
    const product = products.find((product) => product.id === id);

    if(name,price,stock) {
        product.name = name;
        product.price = price;  
        product.stock = stock;
    }
    res.send(`Product with id ${id} updated successfully`);
}