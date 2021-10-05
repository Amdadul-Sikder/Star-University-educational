import React from 'react';
import { useEffect, useState } from 'react';
import "./Services.css";

const Services = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch("./courses.JSON")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services-container">
            <h1 className="text-center">Our Services</h1>
            <div className="container">
                <div className="row services">
                    {
                        Services.map(service =>
                            <div key={service.name} className="single-service">
                                <img className="service-img" src={service.img} alt="" />
                                <h4>{service.name}</h4>
                                <h6>Duration: {service.duration}</h6>
                                <h6>Seat: {service.seat}</h6>
                                <h6>Course Fee: {service.fee}</h6>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;