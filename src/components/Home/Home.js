import React, { useEffect, useState } from 'react';
import "./Home.css"

const Home = () => {
    const [Services, setServices] = useState([]);
    const sliceService = Services.slice(0, 4);

    useEffect(() => {
        fetch("./courses.JSON")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // console.log(props);
    return (
        // <div>
        //     <h1>this is home service</h1>
        // </div>

        <div className="services-container">
            <h1 className="text-center">Our Services</h1>
            <div className="container">
                <div className="row service">
                    {
                        sliceService.map(service =>
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

export default Home;