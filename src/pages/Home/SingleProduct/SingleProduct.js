import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleProduct.css'
const SingleProduct = (props) => {
    const navigate = useNavigate()
    const { id, name, price, img } = props.product;
    const navigateToDetails = (id) => {
        navigate(`/products/${id}`)
    }
    return (

        <Col>
            <Card className='card-body'>
                <Card.Img variant="top" src={img} className='card-img' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{price}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <button onClick={() => navigateToDetails(id)} className='btn-light'>Details</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProduct;