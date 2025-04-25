import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Courses from "../Pages/Courses/Courses";
import Books from "../Pages/Books/Books";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";
import LoginError from "../Pages/Error/LoginError";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error></Error>,
        children:[
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/courses',
                Component: Courses
            },
            {
                path: '/books',
                loader: () => fetch('/Jsons/Books.json'),
                Component: Books
            },
            {
                path: '/contact',
                Component: Contact
            },
        ]
    },
    {
        path: '/notAvailable',
        Component: LoginError
    }
])

