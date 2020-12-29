import Product from '../models/Products';

export default {
    render(product: Product){
        return {
            id: product.id,
            description: product.description,
            amount: product.amount,
            value: product.value,
            image: product.image,
            // group: product.group,
            // category: product.category
        };
    },

    renderMany(products: Product[]){
        return products.map(product => this.render(product));
    }
};