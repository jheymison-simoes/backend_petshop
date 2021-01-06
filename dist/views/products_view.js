"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(product) {
        return {
            id: product.id,
            description: product.description,
            amount: product.amount,
            value: product.value,
            image: product.image,
        };
    },
    renderMany(products) {
        return products.map(product => this.render(product));
    }
};
