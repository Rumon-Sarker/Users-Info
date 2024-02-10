
const AllusersCard = ({ user }) => {
    const { image, firstName, lastName, email, address } = user;
    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <div className="avatar items-center justify-center">
                    <div className="w-24 rounded-full">
                        <img src={image} />
                    </div>
                </div>
                <div className="card-body ml-4">
                    <h2 className="text-xl font-bold">FirstName: <span className="text-gray-500">{firstName}</span></h2>
                    <h2 className="">LastName: {lastName}</h2>
                    <p>Email: {email}</p>
                    <p>Address: {address.address}</p>
                    <p>City: {address.city}</p>
                    <div className="card-actions mt-2">
                        <button className="btn btn-secondary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllusersCard;