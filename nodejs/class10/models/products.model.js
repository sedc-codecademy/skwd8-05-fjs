class ProductsModel
{
    constructor(){
        this.products = [];
    }

    getProducts()
    {
        return this.products;
    }

    getProduct(id)
    {
        return this.products.filter(product => product.id == id);
    }

    addProduct(productData)
    {
        if(productData.name && productData.price)
        {
            this.products.push(
            {
                id: this.products.length + 1,
                name: productData.name, 
                price: productData.price
            });
            return true;
        }
        else
        return false;
    }

    updateProduct(id, productData)
    {
        let product = this.getProduct(id);

        if(product.length)
        {
            product = product[0];
            product.name = productData.name;
            product.price = productData.price;

            this.products.forEach((p, i) => {
                if(p.id == id)
                this.products[i] = product;
            });

            return true;
        }
        else
        return false;
    }

    deleteProduct(id)
    {
        let productIndex;

        this.products.map((product, index) => {
            if(product.id == id)
            productIndex = index;
        });
        
        if(productIndex)
        {
            this.products.splice(productIndex, 1);
            return true;
        }
        else
        return false;
    }
    
}

module.exports = ProductsModel;