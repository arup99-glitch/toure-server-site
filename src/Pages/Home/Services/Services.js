import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import servicesData from '../../FakeData/servicesData.json'
import './Services.css';



const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        setServices(servicesData)
    }, [services])
    return (
        <div>
           <h2 className="text-primary">Services</h2>
            <div className="service-container">
            
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;