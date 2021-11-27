import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/error-404-not-found.jpg'

const NotFound = () => {
    return (
        <div className="display-flex">
            <br />
            <br />
            <br />
            <img style={{height:'100%'}} src={notFound} alt="" />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;