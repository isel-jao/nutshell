import React from "react";
import { Link } from "react-router-dom";
import { GetContext } from "../../../../components/provider";
import styled, { ThemeProvider } from "styled-components";
import { darken, lighten, rgba } from "polished";
import { Route, ContextState, SideNavState } from "..";
import { useLocation } from "react-router-dom";

const StyledDiv = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  width: 4em;

  &.custom {
    ${(props) =>
      props.theme.palette.mode === "dark"
        ? props.theme.dark
        : props.theme.light};
    background-color: ${(props) =>
      props.theme[props.theme.palette.mode].background};
    color: ${(props) => props.theme[props.theme.palette.mode].color};
    * {
      fill: ${(props) => props.theme[props.theme.palette.mode].color};
    }
  }

  &.open,
  &:hover {
    width: 16em;
  }
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  &.border {
    border-right: 2px solid
      ${(props) =>
        darken(0.2, props.theme[props.theme.palette.mode].background)};
  }
  &.shadow {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }

  .links {
    margin-top: 2em;
    display: flex;
    flex-direction: column;

    .link {
      text-transform: none;
      text-decoration: none;
      color: inherit;
      height: 3em;
      width: calc(100% - 1em);
      margin: 0 0.5em;
      display: flex;
      overflow: hidden;
      transition-duration: 0.3s;
      transition-timing-function: ease;
      transition-property: background-color, border-radius;
      &:hover {
        * {
          fill: ${(props) => props.theme.palette.primary.main};
        }
        color: ${(props) => props.theme.palette.primary.main};
      }

      .icon {
        width: 3em;
        min-width: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        & > * {
          width: 50%;
          height: 50%;
        }
      }
      .name {
        box-sizing: border-box;
        flex-grow: 1;
        font-size: 1.2em;
        font-weight: bold;
        display: flex;
        align-items: center;
      }
    }
  }
  .children {
    flex-grow: 1;
  }
`;

interface Props {
  children?: React.ReactNode;
  routes?: Route[];
  logo?: React.ReactNode;
}

const RouterLink = ({ route }: { route: Route }) => {
  const isActive = useLocation().pathname === route.path;
  const state = GetContext() as ContextState;
  const [sideNav] = state.sideNav;

  const activeClass = isActive ? sideNav.activeClass : "";

  return (
    <Link className={`link ${activeClass}`} to={route.path}>
      <div className="icon">{route.icon}</div>
      <div className="name">{route.name}</div>
    </Link>
  );
};

const SideNav = (props: Props) => {
  const state = GetContext() as ContextState;
  const [open] = state.open;
  const [sideNav] = state.sideNav;

  return (
    <ThemeProvider theme={sideNav}>
      <StyledDiv
        className={`side-nav ${open && "open"} ${sideNav.theme} ${
          sideNav.edges
        }`}
      >
        {props.logo}
        {props.routes && (
          <div className="links ">
            {props.routes.map((route, routeIdx) => (
              <RouterLink key={routeIdx} route={route} />
            ))}
          </div>
        )}
        <div className="children">{props.children}</div>
      </StyledDiv>
    </ThemeProvider>
  );
};

export default SideNav;
