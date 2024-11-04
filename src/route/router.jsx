import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Works from "../pages/works";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }, 
            {
                path: "/contact",
                element: <Contact/>
            }, 
            {
                path: "/about",
                element: <About/>
            }, 
            {
                path: "/works",
                element: <Works/>
            }
        ]
    }
])