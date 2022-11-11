import React from "react";
import { Link } from "react-router-dom";
import { GetContext } from "../../../../components/provider";
import styled from "styled-components";
import { darken, lighten } from "polished";
import { Route, ContextState } from "..";

const LayoutStyled = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  width: 4em;
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
      border-radius: 0.5em;
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

const SideNav = (props: Props) => {
  const state = GetContext() as ContextState;
  const [open] = state.open;
  const [theme] = state.theme;

  return (
    <LayoutStyled
      className={`side-nav ${open && "open"} ${theme.navTheme} ${theme.edges}`}
    >
      {props.logo}
      {props.routes && (
        <div className="links ">
          {props.routes.map((route, routeIdx) => (
            <Link className="link" key={routeIdx} to={route.path}>
              <div className="icon">{route.icon}</div>
              <div className="name">{route.name}</div>
            </Link>
          ))}
        </div>
      )}
      <div className="children">{props.children}</div>
    </LayoutStyled>
  );
};

export default SideNav;
