import React from "react";
import {
    Card,CardText, CardBody, CardTitle, CardSubtitle, Button,CardHeader, CardFooter
  } from 'reactstrap';

// Product List to render all card components.
const ProductCard = (props) =>{
  
    console.log(props);
    const {productCardObj} = props;
    const {name,category, description,stocked,price} = productCardObj;

    const loopProductCard = () => 
        <div className="col d-flex justify-content-center" >
            <Card style={{width: '25rem', marginBottom: 15 }}>
    
            <CardHeader>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {(stocked) ? `in stock` : `out of stock`}
                    </CardSubtitle> 
            </CardHeader>
                
            <CardBody>
                <CardText>{category}</CardText>
                <CardText>{description}</CardText>
                <Button disabled={!stocked}>Add to Cart</Button>
            </CardBody>
            
            <CardFooter>
                Price: ${price}     
            </CardFooter>
            </Card>
        </div>
        
    return loopProductCard();
}

export default ProductCard;