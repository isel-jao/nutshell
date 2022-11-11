import React, { useEffect } from "react";
import styled from "styled-components";
import { lighten, darken, rgba } from "polished";
import BrushIcon from "../assets/brush";
import MenuIcon from "../assets/menu";
import { GetContext } from "../../../../components/provider";
import { Theme } from "..";
const StyledDiv = styled.div`
  height: 4em;
  display: flex;
  align-items: center;
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
`;

interface State {
  theme: [Theme, any];
  open: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  settingsOpen: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
interface Props {
  children?: React.ReactNode;
}
const Nav = ({ children }: Props) => {
  const state = GetContext() as State;
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = state.open;
  const [, setSettingsOpen] = state.settingsOpen;
  const [theme] = state.theme;

  const brushRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (brushRef.current) {
      brushRef.current.addEventListener("click", (e: MouseEvent) => {
        if (e.detail === 3) setShow((curr) => !curr);
      });
    }
  }, []);

  return (
    <StyledDiv
      className={`nav ${open && "open"} ${theme.navTheme} ${theme.edges}`}
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
  );
};

export default Nav;
