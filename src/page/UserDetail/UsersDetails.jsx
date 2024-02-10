import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsersDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const { image, firstName, lastName, email, address, company } = user;

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);
    console.log("details Data", user)
    if (!user) return <div>Loading...</div>;
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl text-center font-bold  mb-24">User Details</h1>
            <div className="card items-center bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body  gap-5 ml-4">

                    <h2 className="text-2xl font-bold">FirstName: <span className="text-blue-900">{firstName}</span></h2>
                    <h2 className="text-2xl font-bold">LastName: <span className="text-blue-900">{lastName}</span></h2>
                    <p className="text-2xl font-bold">Email: <span className="text-blue-900">{email}</span> </p>
                    <p className="text-2xl font-bold">Address: <span className="text-blue-900">{address?.address}</span> </p>
                    <p className="text-2xl font-bold">City: <span className="text-blue-900">{address?.city}</span> </p>
                    <p className="text-2xl font-bold">Companey: <span className="text-blue-900">{company?.name}</span> </p>




                </div>
            </div>
        </div>
    );
};

export default UsersDetails;