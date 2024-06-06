import { createBrowserRouter } from "react-router-dom";
import { usersLoader } from "./pages/usersinform/UsersPage"
import RootLayout from "./root";
import { UsersAllPage, UsersPage } from "./pages/index"
import HomePage from "./pages/HomePage";
import { userLoader } from "./pages/usersinform/UsersAllPage";






const routes = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "users",
                element: <UsersPage />,
                loader: usersLoader

            },
            {
                path: "users/:userId",
                children: [

                    {
                        index: true,
                        element: <UsersAllPage />,
                        loader: userLoader
                    }
                ],
            }
        ]
    },
];


const router = createBrowserRouter(routes)

export default router