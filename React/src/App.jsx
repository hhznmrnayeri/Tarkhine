import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
function App() {
  const router = useRoutes(routes);
  return <div className="font-estedad text-gray-800 bg-white">{router}</div>;
}
export default App;
