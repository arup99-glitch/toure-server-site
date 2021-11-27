import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import servicesData from '../../FakeData/servicesData.json';

const Details = () => {
    console.log(servicesData)
    const { serviceId } = useParams();
    const [dataInfo, setDataInfo] = useState([])
    useEffect(() => {
        setDataInfo(servicesData);
    }, [])


    const singleData = dataInfo?.filter(data => data.id == serviceId);
    console.log(singleData)


    return (
        <div>
            {/* <h2>Detail : {serviceId}</h2> */}
            <h1>{singleData[0]?.name}</h1>
            <img  src={singleData[0]?.img} alt="" />
    
            <h5 className="p-5 text-primary" >{singleData[0]?.dis}</h5>
        </div>
    );
};

export default Details;