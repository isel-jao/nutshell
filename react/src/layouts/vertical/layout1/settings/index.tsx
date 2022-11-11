import React from "react";
import { Link } from "react-router-dom";
import { GetContext } from "../../../../components/provider";
import styled from "styled-components";
import { darken, lighten } from "polished";
import { Route, ContextState } from "..";
import { dark } from "@mui/material/styles/createPalette";

const StyledDiv = styled.div`
  position: fixed;
  height: 100vh;
  width: 30em;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition-duration: 0.3s;
  transition-property: transform;
  &.open {
    transform: translateX(0);
  }
  border: 1px solid #000;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 2em 0.5em 0.5em 0.5em;
  z-index: 3;
  background-color: ${(props) =>
    props.theme[props.theme.palette.mode].background};
  gap: 0.5em;
  flex-wrap: wrap;
  .close {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    cursor: pointer;
    &:hover {
      * {
        fill: ${(props) => props.theme.palette.primary.main};
      }
    }
  }
`;

const Settings = () => {
  const state = GetContext() as ContextState;
  const [theme, dispatch] = state.theme;
  const [settingsOpen, setSettingsOpen] = state.settingsOpen;

  return (
    <StyledDiv className={` ${settingsOpen && "open"}`}>
      <div
        className="close"
        onClick={() => {
          setSettingsOpen(false);
        }}
      >
        close
      </div>
      <div className="">
        {theme.palette.mode}
        <input
          type="checkbox"
          onChange={() => dispatch({ type: "TOGGLE_MODE", payload: null })}
        />
      </div>
      <select
        name="theme"
        id="theme"
        value={theme.navTheme}
        onChange={(e) =>
          dispatch({
            type: "SET",
            payload: { navTheme: e.target.value },
          })
        }
      >
        <option value="lighten">lighten</option>
        <option value="darken">darken</option>
        <option value="transparent">transparent</option>
        <option value="blur">blur</option>

        <option value="custom">custom</option>
      </select>
      <select
        name="edges"
        id="edges"
        value={theme.edges}
        onChange={(e) =>
          dispatch({ type: "SET", payload: { edges: e.target.value } })
        }
      >
        <option value="border">border</option>
        <option value="shadow">shadow</option>
        <option value="none">none</option>
      </select>
      <div className="theme">
        <div className="background">
          <label htmlFor="dark-background">background</label>
          <input
            type="color"
            name="dark-background"
            id="dark-background"
            value={theme.dark.background}
            onChange={(e) =>
              dispatch({
                type: "SET",
                payload: {
                  dark: { ...theme.dark, background: e.target.value },
                },
              })
            }
          />
        </div>
        <div className="text">
          <label htmlFor="dark-text">text</label>
          <input
            type="color"
            name="dark-text"
            id="dark-text"
            value={theme.dark.color}
            onChange={(e) =>
              dispatch({
                type: "SET",
                payload: { dark: { ...theme.dark, color: e.target.value } },
              })
            }
          />
        </div>
      </div>
    </StyledDiv>
  );
};

export default Settings;
