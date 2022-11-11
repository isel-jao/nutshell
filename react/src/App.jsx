import "./styles/index.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import RouterView from "./components/router-view";
import Layout, { Nav, SideNav } from "./layouts/vertical/layout1";
import routes from "./routes";
import reactLogo from "./assets/react.svg";

import styled from "styled-components";

const StyledLogo = styled.div`
  min-height: 4em;
  width: 16em;
  display: flex;
  .shape {
    width: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .name {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
`;

const Logo = () => (
  <StyledLogo>
    <div className="shape">
      <img src={reactLogo} alt="logo" />
    </div>
    <div
      className="name"
      style={{
        color: "#19d2df",
        fontSize: "1.5em",
        fontWeight: "bolder",
        letterSpacing: "1px",
      }}
    >
      React
    </div>
  </StyledLogo>
);

function App() {
  return (
    <div className="App bg-slate-200 h-screen">
      <Layout routes={routes}>
        <Nav />
        <SideNav logo={<Logo />} routes={routes} />
        <RouterView />
      </Layout>
    </div>
  );
}

export default App;
