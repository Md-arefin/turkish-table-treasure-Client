import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
const RecipesCard = ({ recipe }) => {
    console.log(recipe)
    const { image, ingredients, name, steps } = recipe;

    return (
        <Col className='py-3'>
            <Card style={{ width: '30rem', height: " 75rem" }}>
                <Card.Img style={{ width: '30rem', height: " 30rem" }} variant="top" src={image} />

                <Card.Body className='position-relative'>
                    <Card.Title className='fs-2 text-center'>{name}</Card.Title>
                    <Card.Text>
                        <div className='py-3'>
                            <span className='fw-bold fs-5'>Ingredients: </span>
                            {
                                ingredients.map((items, i) => <li key={i}>{items}</li>)
                            }
                        </div>
                        <div className='pb-2'>
                            <p><span className='fw-bold fs-5'>Cooking Methods: </span> {steps}</p>
                        </div>
                        <p className='d-flex gap-2'><span className='fw-bold fs-5'>Ratings: 4.5</span>
                            <Rating
                                style={{ maxWidth: 105}}
                                value={4.5}
                                readOnly
                            />
                        </p>
                    </Card.Text>
                    <Button
                        className='border rounded bg-success w-100
                        position-absolute bottom-0 start-0'
                        variant="">
                        <span className='fw-bold fs-5 px-5'>Favorite</span>
                        <FaHeart className='text-danger fs-3' />
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default RecipesCard;