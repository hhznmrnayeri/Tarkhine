import Index from "./components/Index/Index";
import About from "./components/About/About";
import Branch from "./components/Branch/Branch";
import Buy from "./components/Buy/Buy";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Payment from "./components/Payment/Payment";
import Profile from "./components/Profile/Profile";
import Question from "./components/Question/Question";
import Representation from "./components/Representation/Representation";
import Search from "./components/Search/Search";
const routes=[
    {path:"/",element: <Index />},
    {path:"about",element: <About />},
    {path:"branch",element: <Branch />},
    {path:"buy",element: <Buy />},
    {path:"contact",element: <Contact />},
    {path:"menu",element: <Menu />},
    {path:"payment",element: <Payment />},
    {path:"profile",element: <Profile />},
    {path:"question",element: <Question />},
    {path:"representation",element: <Representation />},
    {path:"search",element: <Search />},
];
export default routes;