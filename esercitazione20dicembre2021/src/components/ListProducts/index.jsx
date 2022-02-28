import styles from "./ListProducts.module.scss"
import { useState, useEffect } from "react";


function ListProducts() {

    const products = [];

    const [products, setProducts] = useState(products);

    useEffect(()=> {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setProducts(data));
        }, [])

        return (
            
        )

    }

export {ListProducts};