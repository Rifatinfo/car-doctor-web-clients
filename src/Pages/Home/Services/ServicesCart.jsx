import { FaArrowRight } from "react-icons/fa";

const ServicesCart = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center  gap-40 text-[#FF3811]">
                    <p className="font-bold">Price : {price}</p>
                    <p><FaArrowRight /></p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;