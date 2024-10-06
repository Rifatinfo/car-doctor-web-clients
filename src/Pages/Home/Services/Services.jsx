import { useEffect, useState } from "react";
import ServicesCart from "./ServicesCart";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
      fetch('services.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setServices(data);
      })
    }, [])
    return (
        <div className="mt-4">
            <div className="space-y-4">
                <h3 className="text-center text-3xl font-bold text-orange-500">Our Services</h3>
                <h2 className="text-center text-5xl">Our Services Area</h2>
                <p className="text-center">the majority have suffered alteration in some form, by injected  humour, or  words <br/> which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 lg:gap-6 md:grid-cols-3 lg:grid-cols-3 ">
               {
                services.map(service => <ServicesCart key={service._id} service={service}></ServicesCart>)
               }
            </div>
        </div>
    );
};

export default Services;