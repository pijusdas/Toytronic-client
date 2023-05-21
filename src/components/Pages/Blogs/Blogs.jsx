
const Blogs = () => {
    return (
        <div>
            <h1 className=" text-5xl font-bold text-center my-20">Lets explore The Tech World</h1>
            <div className=" mb-14 grid gap-16">

                <div className=" bg-green-300 p-10 mx-8 rounded-2xl shadow-2xl shadow-green-600">
                    <h1 className=" text-2xl font-bold mb-7">What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h1>
                    <p>An access token is a security credential that is issued to a client application after a successful authentication process. It is a short-lived token that acts as a proof of authorization, allowing the client to access protected resources or perform authorized actions on behalf of the authenticated user. The access token is typically included in the header or as a parameter of API requests to validate the clients identity and permissions. It serves as a temporary authorization key and expires after a certain period, requiring the client to obtain a new access token. On the client-side, the access token should be securely stored, typically in memory or local storage, to be used for subsequent API requests.</p>
                </div>
                <div className=" bg-green-300 p-10 mx-8 rounded-2xl shadow-2xl shadow-green-600">
                    <h1 className=" text-2xl font-bold mb-7">Compare SQL and NoSQL databases?
                    </h1>
                    <p>SQL (Structured Query Language) and NoSQL (Not only SQL) are two different types of database management systems. SQL databases are primarily relational, meaning they use structured tables with predefined schemas and enforce strict data consistency and integrity through ACID (Atomicity, Consistency, Isolation, Durability) properties. They are well-suited for complex queries and relationships between data. On the other hand, NoSQL databases are non-relational and offer a more flexible and scalable approach. They can handle large amounts of unstructured and semi-structured data, making them suitable for dynamic and rapidly changing data requirements. NoSQL databases provide high scalability and availability but sacrifice some data consistency in favor of performance. They are often used in modern web applications, big data processing, and real-time analytics.</p>
                </div>
                <div className=" bg-green-300 p-10 mx-8 rounded-2xl shadow-2xl shadow-green-600">
                    <h1 className=" text-2xl font-bold mb-7">What is express js? What is Nest JS?

                    </h1>
                    <p>
                        Express.js is a minimalistic web application framework for Node.js, providing essential features for building web applications and APIs. It is lightweight and widely used due to its simplicity and flexibility.

                        NestJS is a progressive Node.js framework that builds on top of Express.js. It follows an Angular-inspired architecture and promotes the use of TypeScript, decorators, and dependency injection to enhance developer productivity and maintainability.

                        NestJS aims to provide an opinionated structure and modular development approach for building scalable and efficient server-side applications.</p>
                </div>
                <div className=" bg-green-300 p-10 mx-8 rounded-2xl shadow-2xl shadow-green-600">
                    <h1 className=" text-2xl font-bold mb-7">What is MongoDB aggregate and how does it work?
                    </h1>
                    <p>The aggregate function in MongoDB is used for advanced data aggregation operations. It takes a pipeline of stages as input, where each stage performs a specific operation on the data and passes the result to the next stage. The pipeline stages can include operations like filtering, grouping, sorting, and calculating aggregations. Aggregation pipelines can be used to perform complex data manipulations and generate aggregated results based on the specified criteria. The output of the aggregate function is a cursor that can be iterated to access the aggregated data. It is a powerful tool for performing data analysis and generating customized reports in MongoDB.</p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;