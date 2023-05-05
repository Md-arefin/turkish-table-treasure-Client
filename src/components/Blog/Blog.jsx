import React from 'react';
import { Container } from 'react-bootstrap';
import Pdf from "react-to-pdf";
import useTitle from "../../Hooks/useTitle"


const Blog = () => {
    const ref = React.createRef();

    useTitle("Blog")

    return (

        <Container>


            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>



                <div>
                    <h1>
                        1. Tell us the differences between uncontrolled and controlled components.
                    </h1>
                    <p>
                        In software development, the terms "uncontrolled components" and "controlled components" refer to two different ways of handling user input in a user interface.

                        Uncontrolled components are components where the input values are controlled by the DOM, rather than the component itself. This means that the value of the input is determined by the browser, and not by the component. Uncontrolled components are typically used for simple forms or for cases where you don't need to do anything with the user input after it's entered.

                        Controlled components, on the other hand, are components where the input value is controlled by the component itself. The component keeps track of the value of the input and updates it when the user makes changes. Controlled components are typically used for more complex forms, where you need to validate the input, format it, or perform some other action based on the user's input.

                        One advantage of using controlled components is that they give you more control over the user input, which can help you prevent errors and make your code more predictable. However, they also require more code to set up and maintain, so it's important to weigh the benefits against the costs when deciding which approach to use.
                    </p>
                </div>

                <div>
                    <h1>
                        2. How to validate React props using PropTypes
                    </h1>
                    <p>

                        PropTypes is a library in React that helps you validate the props passed to a component. It ensures that the values are of the expected type and shape. You can use PropTypes to specify the types of props and whether they are required or not. This helps you prevent errors and make your code more predictable.
                    </p>
                </div>

                <div>
                    <h1>3. Tell us the difference between nodejs and express js.</h1>

                    <p>
                        Node.js and Express.js are both technologies used for building web applications in JavaScript, but they serve different purposes.

                        Node.js is a server-side JavaScript runtime that allows you to execute JavaScript code outside of a browser. It provides a platform for building scalable network applications, such as web servers, chat applications, and IoT applications. Node.js has a rich set of built-in modules, which allow you to perform various tasks like file system operations, network communication, and more.

                        Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools to make it easier to build web applications using Node.js. Express.js is designed to provide a simple and flexible way to create web applications and APIs. It provides routing, middleware, and other tools to help you manage HTTP requests and responses.

                        To summarize, Node.js is a runtime environment for executing JavaScript code outside of a browser, while Express.js is a web application framework built on top of Node.js to simplify the process of building web applications and APIs.
                    </p>
                </div>

                <div>
                    <h1>
                        4. What is a custom hook, and why will you create a custom hook?
                    </h1>
                    <p>
                        In React, a custom hook is a JavaScript function that allows you to reuse logic across different components. Custom hooks are a way to extract reusable code from components and create independent functions that can be used in multiple places.

                        Custom hooks are created using the use prefix, and they follow the same rules as regular hooks. They can use other hooks, state, and effects, and they can return any value that a regular hook can return.

                        There are several reasons why you might want to create a custom hook in React:

                        Reusability: If you find yourself duplicating code across multiple components, you can extract that code into a custom hook and reuse it.

                        Abstraction: Custom hooks can abstract complex logic into simple functions that are easy to use.

                        Organization: Custom hooks can help you organize your code by separating concerns and creating reusable building blocks.

                        Testing: Custom hooks can be easily tested in isolation, which can make testing your application easier and more reliable.

                        Overall, custom hooks are a powerful feature of React that can help you write cleaner, more maintainable code.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default Blog;