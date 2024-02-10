
const AddUsers = () => {
    const handaleAddUsers = (event) => {
        event.preventDefault();

        const form = event.target;
        const firstName = form.firstname.value;
        const lastName = form.lastname.value;
        const email = form.email.value;
        const address = form.address.value;
        const city = form.city.value;
        const comapney = form.comapney.value;

        //all User Info
        const alluserInfo = {
            firstName,
            lastName,
            email,
            address,
            city,
            comapney
        }

        console.log("Create All users Info is:", alluserInfo)
        // inculudes api in the allUserInfo then save in the database;


    }

    return (
        <div>
            <h1 className="text-3xl  text-center">Add Unsers Info </h1>

            <form onSubmit={handaleAddUsers} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">FirstName:</span>
                        </label>
                        <input type="text" name="firstname" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LastName:</span>
                        </label>
                        <input type="text" name="lastname" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address:</span>
                        </label>
                        <input type="text" name="address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">City:</span>
                        </label>
                        <input type="text" name="city" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Companey:</span>
                        </label>
                        <input type="text" name="comapney" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </div>
            </form>

        </div>
    );
};

export default AddUsers;