import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lighten, darken, rgba } from "polished";
import BrushIcon from "../assets/brush";
import MenuIcon from "../assets/menu";
import { GetContext } from "../../../../components/provider";
import { Theme, NavState } from "..";
import MoonIcon from "./moonIcon.svg";
import SunIcon from "./sunIcon.svg";
const StyledDiv = styled.div`
  height: 4em;
  display: flex;
  align-items: center;
  padding: 0 0.5em;

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

  .children {
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5em;
  }
  .toggle-nav {
    width: 2em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
  &.border {
    border-bottom: 2px solid
      ${(props) =>
        darken(0.2, props.theme[props.theme.palette.mode].background)};
  }
  &.shadow {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 1024px) {
    &.nav-fixed {
      position: fixed;
      top: 0;
      right: 0em;
      left: 4rem;
      transition-duration: 0.3s;
      transition-timing-function: ease;
      transition-property: left;
      &.open {
        left: 16rem;
      }
    }
  }
  input[type="checkbox"] {
    font-size: 1.5em;
  }
  input[type="checkbox"]::before {
    background-color: ${(props) =>
      lighten(0, props.theme[props.theme.palette.mode].background)};
  }
  input[type="checkbox"]::after {
    border-radius: 0;
    background: url(${MoonIcon});
    * {
      fill: #fff;
      stroke: #fff;
    }
  }
  input[type="checkbox"]:checked::after {
    background: url(${SunIcon});
    * {
      fill: #fff;
      stroke: #fff;
    }
  }
`;

interface State {
  theme: [Theme, any];
  nav: [NavState, any];
  open: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  settingsOpen: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
interface Props {
  children?: React.ReactNode;
}
const Nav = ({ children }: Props) => {
  const state = GetContext() as State;
  const [open, setOpen] = state.open;
  const [, setSettingsOpen] = state.settingsOpen;
  const [theme, dispatchTheme] = state.theme;
  const [nav] = state.nav;
  const [show, setShow] = React.useState(false);

  const brushRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (brushRef.current) {
      brushRef.current.addEventListener("click", (e: MouseEvent) => {
        if (e.detail === 3) setShow((curr) => !curr);
      });
    }
  }, []);

  return (
    <ThemeProvider theme={nav}>
      <StyledDiv
        className={`nav ${open && "open"} ${nav.theme} ${nav.edges} ${
          nav.isFixed && "nav-fixed"
        }`}
        ref={brushRef}
      >
        <div
          className="toggle-nav"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MenuIcon />
        </div>
        <div className="children">{children}</div>
        <input
          checked={theme.palette.mode == "dark"}
          onChange={() => {
            dispatchTheme({
              type: "TOGGLE_MODE",
            });
          }}
          type="checkbox"
          id="nav-toggle"
        />
        {show && (
          <div
            className="toggle-nav"
            onClick={() => {
              setSettingsOpen(true);
            }}
          >
            <BrushIcon />
          </div>
        )}
      </StyledDiv>
    </ThemeProvider>
  );
};

export default Nav;
