import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";

const Bookings = () => {
    const { user } = useContext(AuthContext); // Fetching user from context
    const [bookings, setBookings] = useState([]); // State to hold bookings
    
    const handleDelete = id => {
        const process = confirm('Are you sure you want to delete');
        if (process) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method : 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                       alert('deleted successful');
                       const remaining = bookings.filter(booking => booking._id !== id);
                       setBookings(remaining);
                    }
                })
        }
    }

    const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`, {
            method : 'PATCH',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({status : 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
               // update state 
               const remaining = bookings.filter(booking => booking._id !== id);
               const updated = bookings.find(booking => booking._id === id);
               updated.status = 'confirm';
               const newBookings = [updated, ...remaining];
               setBookings(newBookings);
            }
        })

    }

    useEffect(() => {
        if (user?.email) { // Ensure the email is available
            const url = `http://localhost:5000/bookings?email=${user.email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setBookings(data)); // Setting bookings data
        }
    }, [user?.email]); // Dependency array ensures the effect runs when the user email changes

    return (
        <div>
            <h2>Your bookings: {bookings.length}</h2> {/* Display bookings length */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Data</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
