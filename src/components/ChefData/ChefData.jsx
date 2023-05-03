import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";


const ChefData = ({ data }) => {
    const { _id, chefBio, chefName, chefPicture, likes, numberOfRecipes,
        yearsOfExperience, } = data;

    // style={{ width: '18rem' }}


    return (
        <Col>
            <Card className='my-4 mx-4' style={{ width: '20rem' }}>
                <Card.Img fluid='true' style={{ height: '20rem' }} variant="top" src={chefPicture} />
                <Card.Body>
                    <Card.Title className='text-center'>{chefName}</Card.Title>
                    <Card.Text>
                        <p><span className='fw-bold fs-6'>Years of experience:</span>
                            {yearsOfExperience} years.
                        </p>
                        <p><span className='fw-bold fs-6'>Number of recipes:</span> {numberOfRecipes}.
                        </p>
                        <p><span className='fw-bold fs-6'>Social Media likes:</span>  <FaHeart className='text-danger' /> {likes}.
                        </p>
                    </Card.Text>
                    <Button variant="danger opacity-75">View Recipes</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefData;