import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import AllUsers from "../page/AllUsers/AllUsers";
import UsersDetails from "../page/UserDetail/UsersDetails";
import AddUsers from "../page/AddUsers/AddUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <AllUsers></AllUsers>
            },
            {
                path: "/users/:id",
                element: <UsersDetails></UsersDetails>
            },
            {
                path: "/addusers",
                element: <AddUsers></AddUsers>
            }
        ]
    },
]);