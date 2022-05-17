import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-5 p-4 '>
            <h3>Difference between Node.JS and Javascript</h3>
            <p >
                <span className='fw-bold'>Javascript:</span> Javascript is a computer language that may be used to create website scripts. Javascript is only available in browsers. It's mostly used on the client's end. Javascript has the ability to add HTML and manipulate the DOM. Javascript can run in any browser engine, such as Safari's JS core and Firefox's Spidermonkey. In frontend development, Javascript is used. RamdaJS, TypedJS, and other javascript frameworks are examples. It's an improved version of ECMA script that runs on Chrome's C++-based V8 engine.
            </p>
            <p >
                <span className='fw-bold'>Node.JS:</span> NodeJS is a runtime environment for Javascript. With the help of NodeJS, we can run Javascript outside of the browser. It's primarily utilized on the server. Nodejs does not support the addition of HTML tags. V8 is the node.js Javascript engine that parses and executes Javascript. In server-side development, Nodejs is employed. Lodash, express, and other Nodejs modules are examples. These modules will be downloaded through npm. C, C++, and Javascript are used to create Nodejs.
            </p>
            <h3>When should you use nodejs and when should you use mongodb</h3>
            <p>Node.js is a JavaScript interpreter (or runtime/running environment). V8 JavaScript engine is used in Chrome. The execution of your application is especially your duty.</p>
            <p>MongoDB is a data storage system that uses no SQL. when you require high data availability with automatic, quick, and immediate data recovery</p>
            <h3>Differences between sql and nosql databases.</h3>
            <p >
                <span className='fw-bold'>SQL:</span>SYSTEM FOR MANAGING RELATIONAL DATABASES (RDBMS). These databases have a predefined or fixed schema. These databases are not designed to store hierarchical data. Complex queries are best served by these databases. Scalable vertically. ACID property is followed.
            </p>
            <p >
                <span className='fw-bold'>NoSQL:</span> A distributed or non-relational database system. They have a flexible schema. These databases are great for storing hierarchical data. Complex queries are not well served by these databases. Scalable horizontally. CAP is followed (consistency, availability, partition tolerance).
            </p>
            <h3>What is the purpose of jwt and how does it work.</h3>
            <p> There are many services which Firebase provides, Most useful of them are:
            </p>
            <p><span className='fw-bold'>JWT :</span> JWT (JSON Web Token) is an open standard that allows two parties — a client and a server — to share security information. JSON items, containing a set of claims, are encoded in each JWT. JWTs use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued.</p>
        </div>
    );
};

export default Blogs;