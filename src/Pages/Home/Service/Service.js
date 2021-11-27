import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {id,name,img,dis} = props.service;
    console.log("fakeData", props.services)
    return (
        <div className="service pb-3">
            <img  src={img} alt="" />
            <h2>{name}</h2>
            <h6 className="px-3">{dis}</h6>
{/*           
            <Link to={`/details/${id}`}>
                  <button className="btn btn-warning">Service Details</button>
            </Link> */}
            <Link className="btn-primary mt-3 p-2 rounded" to={`/details/${id}`}>Visit me</Link>

        </div>
    );
};

export default Service;