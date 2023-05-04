import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import RecipesCard from '../RecipesCard/RecipesCard';
import { Row } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {

    const ChefData = useLoaderData();
    console.log(ChefData)

    const { _id, chefBio, chefName, chefPicture, likes, numberOfRecipes,
        yearsOfExperience, recipes } = ChefData;
    return (
        <div className='container mx-auto my-5'>
            <div className='my-5 d-flex gap-5'>
                <div className='w-75 h-75 '>
                    <LazyLoad height={762}>
                        <img className='rounded' style={{ width: '28rem', height: " 25rem" }} src={chefPicture} alt="" />
                    </LazyLoad>
                </div>
                <div>
                    <h3>{chefName}</h3>
                    <p><span className='fw-bold'>Bio: </span>{chefBio}</p>
                    <p><span className='fw-bold'>Total recipes: </span> {numberOfRecipes} recipes.</p>
                    <p><span className='fw-bold'>Years of experience: </span> {yearsOfExperience} years.</p>
                    <p><span className='fw-bold'><FaHeart className='text-danger' /> Likes: </span>{likes} . </p>
                </div>
            </div>
            {/* recipes card */}
            <section className='container mb-5 py-5'>
                <Row>
                    {
                        recipes.map((recipe, i) => <RecipesCard
                            key={i}
                            recipe={recipe}
                        ></RecipesCard>)
                    }
                </Row>
            </section>
        </div>
    );
};

export default ChefDetails;