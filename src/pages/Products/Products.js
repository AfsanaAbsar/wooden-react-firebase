import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useProduct from '../../hooks/useProduct';
import SingleProduct from '../Home/SingleProduct/SingleProduct';
import './Products.css'
const Products = () => {

    const [products, setProducts] = useProduct();
    return (
        <Row xs={1} md={3} className="g-4">
            {

                products.map(product => <SingleProduct
                    key={product.id}
                    product={product}
                ></SingleProduct>)

            }
        </Row>
    );
};

export default Products;