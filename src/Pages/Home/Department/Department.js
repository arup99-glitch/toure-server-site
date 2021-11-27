import React from 'react';
import './Departments.css'
const Department = ({department}) => {

    const {img,name,details} =  department;
    return (
        <div className="department">
            <img className={"p-1"} src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger p-5">{details}</h5>
        </div>
    );
};

export default Department;