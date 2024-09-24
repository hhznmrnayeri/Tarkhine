import Index from "./pages/Index";
import About from "./pages/About";
import Branch from "./pages/Branch";
import Buy from "./pages/Buy";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Question from "./pages/Question";
import Representation from "./pages/Representation";
import Search from "./pages/Search";
import QuestionSection from "./pages/QuestionSection";
import RuleSection from "./pages/RuleSection";
import PrivacySection from "./pages/PrivacySection";
const routes = [
  { path: "/", element: <Index /> },
  { path: "about", element: <About /> },
  { path: "branch", element: <Branch /> },
  { path: "buy", element: <Buy /> },
  { path: "contact", element: <Contact /> },
  { path: "menu", element: <Menu /> },
  { path: "payment", element: <Payment /> },
  { path: "profile", element: <Profile /> },
  {
    path: "question",
    element: <Question />,
    children: [
      { path: "", element: <QuestionSection /> },
      { path: "rules", element: <RuleSection /> },
      { path: "privacy", element: <PrivacySection /> },
    ],
  },
  { path: "representation", element: <Representation /> },
  { path: "search", element: <Search /> },
];
export default routes;
