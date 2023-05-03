import React from 'react';
import { Carousel, Col, Container, Row, Table } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefData from '../ChefData/ChefData';

const Home = () => {

    const chefData = useLoaderData();
    // console.log(chefData)

    return (
        <div>

            {/* banner */}

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

            {/* carousel */}

            <div className='container my-5 py-5 rounded bg-danger bg-opacity-75 text-center'>

                <h3 className='mb-5 fs-2'>
                    Our Famous Recipes
                </h3>

                <Carousel className='px-5 mx-auto'>
                    <Carousel.Item>
                        <div className='d-flex '>
                            <img
                                className=" w-50 h-50 rounded "

                                src="https://i.ibb.co/0DW9gDq/fb6d7f-47e6a9c8151b450b8f5965c26d560ccb-mv2.webp"
                                alt="First slide"
                            />



                            <div className='px-5 '>
                                <h3 className='fs-3 fw-bold'>Manti</h3>
                                <p className='fs-5'><span className='fs-4 fw-bold'>Manti</span> is a traditional Turkish dish that consists of small dumplings typically filled with spiced ground lamb or beef and served with a yogurt sauce and melted butter or tomato sauce. The dumplings are usually made by hand and can be served boiled or baked.</p>
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
                                <h3 className='fs-3 fw-bold'>Sea Bass</h3>
                                <p className='fs-5'><span className='fs-4 fw-bold'>Sea Bass</span> refers to several species of fish that are popular in both commercial and recreational fishing. These fish are known for their mild, white flesh and are often considered a delicacy. Some common species of sea bass include the European sea bass, the black sea bass, and the Chilean sea bass.</p>
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
                                <h3 className='fs-3 fw-bold'>Baklava</h3>
                                <p className='fs-5'><span className='fs-4 fw-bold'>Baklava</span> is a sweet pastry that is popular in many Middle Eastern and Mediterranean countries, including Turkey, Greece, and Lebanon. The pastry is made by layering phyllo dough with a mixture of chopped nuts, such as pistachios, walnuts, or almonds, and a sweet syrup or honey. After baking, the pastry is cut into small diamond-shaped pieces and served as a dessert.
                                </p>
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
                                <h3 className='fs-3 fw-bold'>Lamb Kebab</h3>
                                <p className='fs-5'><span className='fs-4 fw-bold'>Lamb Kebab</span> is a popular dish that consists of grilled or roasted lamb meat that is typically served on skewers or with a variety of accompaniments, such as rice, vegetables, and bread. The meat used in lamb kebab is usually marinated in a mixture of spices, herbs, and other ingredients to add flavor and tenderize the meat before it is cooked.

                                </p>
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
                                <h3 className='fs-3 fw-bold'>Baklava</h3>
                                <p className='fs-5'>
                                    <span className='fs-4 fw-bold'>Baklava</span> is a sweet pastry that is popular in many Middle Eastern and Mediterranean countries, including Turkey, Greece, and Lebanon. The pastry is made by layering phyllo dough with a mixture of chopped nuts, such as pistachios, walnuts, or almonds, and a sweet syrup or honey. After baking, the pastry is cut into small diamond-shaped pieces and served as a dessert.
                                </p>
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
                                <h3 className='fs-3 fw-bold'>Manti</h3>
                                <p className='fs-5'><span className='fs-4 fw-bold'>Manti</span> is a traditional Turkish dish that consists of small dumplings typically filled with spiced ground lamb or beef and served with a yogurt sauce and melted butter or tomato sauce. The dumplings are usually made by hand and can be served boiled or baked.</p>
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
                                <h3 className='fs-3 fw-bold'> Kebab</h3>
                                <p className='fs-5'><span className='fs-4 fw-bold'>Kebab</span> is a dish that consists of grilled or roasted meat that is typically served on skewers or with a variety of accompaniments, such as rice, vegetables, and bread. Kebabs are popular in many Middle Eastern, Mediterranean, and South Asian countries, and are often associated with street food and outdoor grilling.</p>
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
                                <h3 className='fs-3 fw-bold'>Lahmacun</h3>
                                <p className='fs-5'><span className='fs-4 fw-bold'>Lahmacun</span> is a popular Middle Eastern and Mediterranean dish that is often referred to as "Turkish pizza". It consists of a thin, round piece of dough that is topped with a mixture of minced meat (usually lamb or beef), onions, tomatoes, herbs, and spices. The dough is then baked in a hot oven until crispy.</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>

            {/* chef cards */}

            <div className='container mx-auto'>
                <h3 className='text-center fs-1'>Famous Chef's</h3>
                <Container fluid >
                    <Row>

                        {
                            chefData.map(data => <ChefData
                                key={data._id}
                                data={data}
                            ></ChefData>)
                        }

                    </Row>

                </Container>
            </div>

            {/* Health section */}
            <div className='container my-5 py-5'>
                <h2 className='fs-4 text-center'>Healthy Delights from the Heart of Turkey: Nourishing Your Body and Soul with Turkish Cuisine</h2>
                <div className='container my-5 d-flex gap-5'>
                    <div className=' w-50 h-50 '>
                        <img className='w-100 rounded h-50' src="https://i.ibb.co/fF65L57/3637975.jpg" alt="" />
                    </div>
                    <div className='col py-5'>
                        <h3>Doctor's thoughts regarding famous Turkish food:</h3>
                        <p>
                            Turkish cuisine is known for its rich and diverse flavors, with a focus on fresh, seasonal ingredients. Many of the traditional Turkish dishes feature lean proteins, vegetables, and whole grains, which can provide a balanced and nutritious meal.
                            <br />
                            Some of the common ingredients in Turkish cuisine include vegetables like eggplant, peppers, tomatoes, and zucchini, which are rich in vitamins and minerals. Lean proteins like lamb, chicken, and fish are also commonly used, which can be a good source of protein, as well as omega-3 fatty acids.
                            <br />
                            Turkish cuisine also often includes legumes such as chickpeas and lentils, which are high in fiber and protein, as well as nuts like pistachios and walnuts, which can be a good source of healthy fats.
                            <br />
                            However, it is worth noting that some traditional Turkish dishes may be high in calories, sodium, and fat due to the use of oil, butter, and cheese. Portion control is important when consuming these dishes.
                            <br />
                            Overall, Turkish cuisine can be a healthy and nutritious option, especially when using fresh, whole ingredients and practicing moderation.
                        </p>
                    </div>
                </div>

                <div className='container my-5 d-flex gap-5'>
                    <div >
                        <Table striped bordered hover>
                            <thead>
                                <tr>

                                    <th>Nutrient</th>
                                    <th>Amount Per Serving</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Calories</td>
                                    <td>	377</td>

                                </tr>
                                <tr>

                                    <td>Total Fat</td>
                                    <td>11 g</td>

                                </tr>
                                <tr>

                                    <td >Saturated Fat</td>
                                    <td>2 g</td>
                                </tr>
                                <tr>

                                    <td >Trans Fat</td>
                                    <td>0 g</td>
                                </tr>
                                <tr>

                                    <td >Cholesterol</td>
                                    <td>	124 mg</td>
                                </tr>
                                <tr>

                                    <td >Sodium</td>
                                    <td>560 mg</td>
                                </tr>
                                <tr>

                                    <td >Total Carbohydrates</td>
                                    <td>19 g</td>
                                </tr>
                                <tr>

                                    <td >Dietary Fiber</td>
                                    <td>6 g</td>
                                </tr>
                                <tr>

                                    <td >Sugars</td>
                                    <td>8 g</td>
                                </tr>
                                <tr>

                                    <td >Protein</td>
                                    <td>50 g</td>
                                </tr>
                                <tr>

                                    <td >Vitamin D</td>
                                    <td>0.5 mcg</td>
                                </tr>
                                <tr>

                                    <td >Calcium</td>
                                    <td>55 mg</td>
                                </tr>
                                <tr>

                                    <td >Iron</td>
                                    <td>	3.2 mg</td>
                                </tr>
                                <tr>

                                    <td >Potassium</td>
                                    <td>955 mg</td>
                                </tr>
                            </tbody>
                        </Table>
                        <p>
                            Note: The nutrient amounts are approximate and may vary depending on the recipe and serving size.
                        </p>
                    </div>

                    <div className=' w-50 h-50 '>
                        <img className='w-100 rounded h-50' src="https://i.ibb.co/7zGZ0Nw/7878.jpg" alt="" />
                    </div>
                </div>

                <div className='container my-5 d-flex gap-5'>

                    <div className=' w-50 h-50 '>
                        <img className='w-100 rounded h-50' src="https://i.ibb.co/3TSVH1K/2002-i203-016-nutritionist-dietitian-cartoon.jpg" alt="" />
                    </div>

                    <div>
                        <h3>Some tips from nutritionist</h3>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Home;