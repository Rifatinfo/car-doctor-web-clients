import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const service = useLoaderData();
    const {title, _id} = service;
    return (
        <div>
            <h2>Book Service : {title}</h2>
            <div className="mt-12 mb-12">
                <div>
                    <form>
                        <div className=" flex items-center gap-5">
                            <div className="w-1/2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="name" name="first-name" placeholder="First Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="number" name="phone" placeholder="Phone" className="input input-bordered" required />
                                </div>
                            </div>
                            <div  className="w-1/2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="name" name="last-name" placeholder="Last Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error text-white">Order Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;