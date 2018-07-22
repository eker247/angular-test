export class Product {
    name: string;
    img: string[];

    public constructor(name: string, img: string[] = null) {
        this.name = name;
        this.img = img;
    }
}