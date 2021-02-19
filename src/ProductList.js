import React from "react";
import ProductCard from "./ProductCard"
import productList from "./productList.json"

// Product List to render all card components.
const ProductList = (props) =>{
    
    const {productListObj} = props;
    
    // no parenthesis for arrow functions.
    // {} return statement.
    const loopProductList = () =>
        <div>
            {
                productListObj.map((currentProduct) => 
                //key for unquine elements -> 
                <ProductCard key={currentProduct.id} productCardObj = {currentProduct} />
            )}
        </div>
    
    return loopProductList();
}

export default ProductList;