import "./styles/index.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import RouterView from "./components/router-view";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import routes from "./routes";

const RouterLink = ({ route }) => {
  const location = useLocation();
  const isActive = location.pathname === route.path;
  return (
    <Link
      to={route.path}
      style={{
        transition: "background-color 0.2s ease",
      }}
      className={`flex h-2 w-9/10 rounded px-4  justify-content align-center ${
        isActive
          ? "bg-slate-500 text-slate-100"
          : "hover:bg-slate-200 text-slate-900"
      }`}
    >
      {route.name}
    </Link>
  );
};

const SideNav = () => {
  return (
    <div className="flex flex-col w-full h-full justify-content align-center py-4">
      {routes.map((route, index) => {
        return <RouterLink key={index} route={route} />;
      })}
    </div>
  );
};
const Layout = (props) => {
  return (
    <div className="flex">
      <div className="side-nav w-16 bg-slate-100 shadow-sm h-screen">
        <SideNav />
      </div>
      <div className="main w-full h-full">
        <div className="nav  bg-slate-100 w-full h-5 flex align-center px-4 shadow-sm">
          nav
        </div>
        <div className="router-view h-full">{props.children}</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App bg-slate-200 h-screen">
      <Layout>
        <RouterView />
      </Layout>
    </div>
  );
}

export default App;
