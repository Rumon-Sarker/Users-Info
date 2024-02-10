
import { useEffect, useState } from "react";
import AllusersCard from "../../components/AllusersCard/AllusersCard";
import { Link } from "react-router-dom";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    console.log(sortBy)
    const filteredUsers = users.filter(user =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (sortBy === 'name') {
        filteredUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (sortBy === 'email') {
        filteredUsers.sort((a, b) => a.email.localeCompare(b.email));
    } else if (sortBy === 'company') {
        filteredUsers.sort((a, b) => a.company.name.localeCompare(b.company.name));
    }

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => setUsers(data.users));

    }, [])
    return (
        <div className="mt-10 ">
            <h1 className="text-3xl text-center font-bold my-4 shadow-2xl shadow-slate-400 ">All Users: <span className="text-orange-500">{users.length}</span></h1>
            <div className="mb-4 text-center">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="border mx-auto p-2 rounded-md"
                />
                <select

                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="border p-2 rounded-md ml-2"
                >
                    <option>Sort by</option>
                    <option value="firstName">Name</option>
                    <option value="email">Email</option>
                    <option value="company">Company</option>
                </select>
            </div>
            <div className="grid md:grid-cols-2 mt-12  sm:grid-cols-1 lg:grid-cols-4 gap-5">
                {filteredUsers.map((user) =>
                    <Link key={user.id} to={`/users/${user.id}`}>
                        <AllusersCard user={user}>
                        </AllusersCard>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default AllUsers;