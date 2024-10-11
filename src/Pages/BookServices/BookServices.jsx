import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const BookServices = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const order = {
            customerName: name,
            email,
            date,
            img,
            phone,
            service: _id,
            price: price // Use the raw price here, not formatted with '$'
        };
        console.log(order);
    };

    return (
        <div>
            <h1 className="text-center text-2xl">Book Service: {title}</h1>
            <div className="mt-12 mb-12">
                <form onSubmit={handleBookService}>
                    <div className="flex items-center gap-5">
                        <div className="w-1/2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name="first-name" defaultValue={user?.displayName} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" name="phone" placeholder="Phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Last Name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" name="price" defaultValue={`$${price}`} className="input input-bordered" readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-error text-white">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookServices;
