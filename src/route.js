import Home from "./Pages/Home";
import News from "./Pages/News";
import Jobs from "./Pages/Job";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export const routes =[
    {
        id: 1,
        element: Home ,
        path: '/'
    },
     {
        id: 2,
        element: News ,
        path: '/news'
    },
     {
        id: 3,
        element: Jobs ,
        path: '/jobs'
    },
     {
        id: 4,
        element: Contact ,
        path: '/contact'
    },
     {
        id: 5,
        element: About ,
        path: '/about'
    },
]