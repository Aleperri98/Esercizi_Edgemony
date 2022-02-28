import {products} from "./products.js";

function createProduct (parent, imgUrl, productBrand, textPrice, textDescription) {
    const product = document.createElement("div");
    product.className= "product";


    createImg(product, imgUrl, productBrand);
    createText(product, productBrand, textPrice, textDescription);
    parent.appenChild(product);
}

function createImg (parent, imgUrl, productBrand) {
    const image = document.createElement("img");
    image.src = imgUrl;
    image.alt = productBrand;
    parent.appenChild(image);
}

function createText (parent, productBrand, textPrice, textDescription) {
    const textBrand = document.createElement("h4");
    textBrand.textContent = productBrand;

    const price = document.createElement("p");
    price.textContent = `${textPrice}`;

    const description = document.createElement("p");
    description.textContent = textDescription;

    parent.append(textBrand, price, description);
}

const wrapperProducts = document.querySelector('.wrapperProducts');

function renderProduct (parent){
products.map(product => {
createProduct(wrapperProducts, product.image, product.brand, product.price, product.description);
});
}

renderProduct(wrapperProducts);


