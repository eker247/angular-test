import { Product } from "../model/product";

export class ProductMockServer {
    products: Product[] = [
        new Product("skoda", [
            "https://2.allegroimg.com/original/0358ba/c83c6bed4c6c91104bbbe72329f2",
            "https://f.allegroimg.com/original/03413e/f688e9f5474dbf0d0ee9798141af",
            "https://a.allegroimg.com/s512/037cd3/2a58e0474e379109951b8e5a09aa",
            "https://0.allegroimg.com/s512/036ae1/6c7749b9498caca321e9e00cdea0"
        ]),
        new Product("lenovo", [
            "https://1.allegroimg.com/s720/03bf25/57824b144e798bf229e24aabe841",
            "https://7.allegroimg.com/s720/03da53/b094813740ba83a58c9b5bee3f57",
            "https://3.allegroimg.com/s1440/03b97f/fcdc88f2408a9b355e60abcd85c3"
        ]),
        new Product("medion", [
            "https://8.allegroimg.com/s512/03e55f/c3c256b94a339cc7895269cd0d68",
            "https://4.allegroimg.com/original/03ed50/f0cb93754cf2af71edc44cb1a1b4"
        ])
    ];

    constructor() { }

    getProductsNames(): Product[] {
        let names = new Array<Product>();
        this.products.forEach(item => {
            names.push(new Product(item.name));
        });
        return names;
    }

    getProductDetails(product: Product) {
        return this.products.find((item: Product) => item.name == product.name);
    }
}