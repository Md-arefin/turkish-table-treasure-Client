import React from 'react';
import { Carousel } from 'react-bootstrap';


const Home = () => {
    return (
        <div>
            <div className='w-auto h-75 position-relative bg-black' >

                <div>
                    <img className='img-fluid opacity-50' src="https://i.ibb.co/B2yD0B0/flat-lay-frame-with-grains-stucco-background-86.jpg" alt="" />
                </div>

                <div className='position-absolute bottom-50 start-50 translate-middle-x text-center text-white w-100 px-5'>

                    <h1 className=' my-2 fs-1'>
                        Discover the Rich Flavors of Turkey
                    </h1>

                    <p className=' fs-4 '>
                        The title "Discover the Rich Flavors of Turkey" and the website name TurkishTableTreasure.com perfectly capture the essence of this food recipe website. Visitors to the site will find a treasure trove of Turkish culinary delights, ranging from traditional dishes to modern interpretations. The site is a virtual journey through the tastes of Turkey, offering a sensory exploration of the country's diverse and delicious cuisine. Whether you're an experienced chef or a novice cook, Turkish Table Treasure is the perfect place to discover new flavors and expand your culinary repertoire.
                    </p>
                </div>
            </div>

            <div className='container my-5 py-5 rounded bg-danger bg-opacity-50 text-center'>
                <h3 className='mb-5 fs-2'>Our Famous Recipes</h3>

                <Carousel className='px-5 mx-auto'>
                    <Carousel.Item>
                        <div className='d-flex'>
                            <img
                                className=" w-50 h-50 rounded "

                                src="https://i.ibb.co/0DW9gDq/fb6d7f-47e6a9c8151b450b8f5965c26d560ccb-mv2.webp"
                                alt="First slide"
                            />



                            <div className='px-5 '>
                                <h3 className='fs-3'>First slide label</h3>
                                <p className='fs-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>

                        </div>

                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='d-flex'>
                        <img
                            className="d-block w-50 h-25  rounded"
                            src="https://i.ibb.co/X2ktQnh/Sea-bass.jpg"
                            alt="Second slide"
                        />

                        <div className='px-5 '>
                            <h3 className='fs-3'>First slide label</h3>
                            <p className='fs-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='d-flex'>
                        <img
                            className="d-block w-50 h-25  rounded  "
                            src="https://i.ibb.co/314Xt59/Baklava-Recipe-16.jpg"
                            alt="Third slide"
                        />

                        <div className='px-5 '>
                            <h3 className='fs-3'>First slide label</h3>
                            <p className='fs-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='d-flex'>
                        <img
                            className="d-block w-50 h-25  rounded  "
                            src="https://i.ibb.co/HPGJ24Q/best-lamb-kebab-recipe.jpg"
                            alt="First slide"
                        />

                        <div className='px-5 '>
                            <h3 className='fs-3'>First slide label</h3>
                            <p className='fs-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                       <div className='d-flex'>
                       <img
                            className="d-block w-50 h-25  rounded  "
                            src="https://i.ibb.co/dsTKyN4/baklava-recipe-3.jpg"
                            alt="Second slide"
                        />

                        <div className='px-5 '>
                            <h3 className='fs-3'>First slide label</h3>
                            <p className='fs-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                       </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='d-flex'>
                        <img
                            className="d-block w-50 h-25 rounded  "
                            src="https://i.ibb.co/k3pR4pr/Manti-84d39c9632cf40fcb0ca7625d63556b5.jpg"
                            alt="Third slide"
                        />

                        <div className='px-5 '>
                            <h3 className='fs-3'>First slide label</h3>
                            <p className='fs-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                       <div className='d-flex'>
                       <img
                            className="d-block w-50 h-25  rounded  "
                            src="https://i.ibb.co/zxg77C2/turkish-adana-kebab-720x720.jpg"
                            alt="Third slide"
                        />
                        <div className='px-5 '>
                            <h3 className='fs-3'>First slide label</h3>
                            <p className='fs-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                       </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='d-flex'>
                        <img
                            className="d-block w-50 h-25  rounded  "
                            src="https://i.ibb.co/4Tnsmk7/Turkish-Pizza-Lahmacun.jpg"
                            alt="Third slide"
                        />
                        <div className='px-5 '>
                            <h3 className='fs-3'>First slide label</h3>
                            <p className='fs-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>

        </div >
    );
};

export default Home;