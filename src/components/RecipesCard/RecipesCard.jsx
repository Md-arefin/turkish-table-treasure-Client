import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
const RecipesCard = ({ recipe }) => {
    console.log(recipe)
    const {image, ingredients, name, steps } = recipe;

    return (
        <Col className='py-5'>
            <Card  style={{ width: '30rem'  }}>
                <Card.Img style={{ width: '30rem'  }} variant="top" src={image} />

                <Card.Body>
                    <Card.Title className='fs-2 text-center'>{name}</Card.Title>
                    <Card.Text>
                       <div>
                        <span className='fw-bold fs-5'>Ingredients: </span>
                        {
                           ingredients.map((items , i) => <li key={i}>{items}</li>) 
                        }
                       </div>
                       <div>
                        <p><span className='fw-bold fs-5'>Cooking Methods: </span> {steps}</p>
                       </div>
                    </Card.Text>
                    <Button className='border rounded bg-success ' variant="">
                        <span className='fw-bold fs-5 px-5'>Favorite</span>  
                        <FaHeart className='text-danger fs-3' /> 
                        </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default RecipesCard;