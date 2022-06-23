import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    return (
        <div>

            <h1>  welcome to : {productId}</h1>
            <Link to='/checkout'>Proceed checkout</Link>


        </div>
    );
};

export default ProductDetails;