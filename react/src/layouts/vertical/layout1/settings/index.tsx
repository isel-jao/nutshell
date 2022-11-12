import React from "react";
import { Link } from "react-router-dom";
import { GetContext } from "../../../../components/provider";
import styled from "styled-components";
import { darken, lighten } from "polished";
import { Route, ContextState } from "..";
import { dark } from "@mui/material/styles/createPalette";

const StyledDiv = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  height: 100vh;
  width: 40em;
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
  .colors {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .theme {
    width: 100%;
    align-items: center;
    display: flex;

    justify-content: center;
    gap: 1em;
    margin-bottom: 1em;
  }
  .section {
    padding: 0.5em;
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 2px solid #00000073;
    .title {
      text-align: center;
      text-transform: capitalize;
      font-size: 1.5em;
      font-weight: 600;
      width: 100%;
      margin-bottom: 0.5em;
    }
  }
  label {
    margin-right: 0.5em;
  }
`;

const Settings = () => {
  const state = GetContext() as ContextState;
  const [theme, dispatchTheme] = state.theme;
  const [settingsOpen, setSettingsOpen] = state.settingsOpen;
  const [nav, dispatchNav] = state.nav;
  const [sideNav, dispatchSideNav] = state.sideNav;

  return (
    <StyledDiv className={` ${settingsOpen && "open"} `}>
      <div
        className="close"
        onClick={() => {
          setSettingsOpen(false);
        }}
      >
        close
      </div>
      <div className="section">
        <div className="theme">
          <div className="mode-toggle">
            <input
              type="checkbox"
              onChange={() =>
                dispatchTheme({ type: "TOGGLE_MODE", payload: null })
              }
            />
          </div>
        </div>
        <div className="colors">
          <div className="theme ">
            <div>dark theme</div>
            <div className="background">
              <label htmlFor="dark-background">background</label>
              <input
                type="color"
                name="dark-background"
                id="dark-background"
                value={theme.dark.background}
                onChange={(e) =>
                  dispatchTheme({
                    type: "SET",
                    payload: {
                      dark: { ...theme.dark, background: e.target.value },
                    },
                  })
                }
              />
            </div>
            <div className="color">
              <label htmlFor="dark-text">text</label>
              <input
                type="color"
                name="dark-text"
                id="dark-text"
                value={theme.dark.color}
                onChange={(e) =>
                  dispatchTheme({
                    type: "SET",
                    payload: { dark: { ...theme.dark, color: e.target.value } },
                  })
                }
              />
            </div>
          </div>
          <div className="theme">
            <div>light theme</div>
            <div className="background">
              <label htmlFor="light-background">background</label>
              <input
                type="color"
                name="light-background"
                id="light-background"
                value={theme.light.background}
                onChange={(e) =>
                  dispatchTheme({
                    type: "SET",
                    payload: {
                      light: { ...theme.light, background: e.target.value },
                    },
                  })
                }
              />
            </div>
            <div className="color">
              <label htmlFor="light-text">text</label>
              <input
                type="color"
                name="light-text"
                id="light-text"
                value={theme.light.color}
                onChange={(e) =>
                  dispatchTheme({
                    type: "SET",
                    payload: {
                      light: { ...theme.light, color: e.target.value },
                    },
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="title">nav</div>
        <select
          name="theme"
          id="theme"
          value={nav.theme}
          onChange={(e) =>
            dispatchNav({
              type: "SET",
              payload: { theme: e.target.value },
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
          value={nav.edges}
          onChange={(e) =>
            dispatchNav({ type: "SET", payload: { edges: e.target.value } })
          }
        >
          <option value="border">border</option>
          <option value="shadow">shadow</option>
          <option value="none">none</option>
        </select>
        <label htmlFor="nav-is-fixed">isFixed</label>
        <input
          type="checkbox"
          name="nav-is-fixed"
          id="nav-is-fixed"
          checked={nav.isFixed}
          onChange={() => dispatchNav({ type: "TOGGLE_IS_FIXED" })}
        />
        {nav.theme === "custom" && (
          <>
            <div className="theme">
              <div className="dark">dark</div>
              <div className="background">
                <label htmlFor="nav-dark-background">background</label>
                <input
                  type="color"
                  name="nav-dark-background"
                  id="nav-dark-background"
                  value={nav.dark.background}
                  onChange={(e) =>
                    dispatchNav({
                      type: "SET",
                      payload: {
                        dark: { ...nav.dark, background: e.target.value },
                      },
                    })
                  }
                />
              </div>
              <div className="color">
                <label htmlFor="nav-dark-text">text</label>
                <input
                  type="color"
                  name="nav-dark-text"
                  id="nav-dark-text"
                  value={nav.dark.color}
                  onChange={(e) =>
                    dispatchNav({
                      type: "SET",
                      payload: { dark: { ...nav.dark, color: e.target.value } },
                    })
                  }
                />
              </div>
            </div>
            <div className="theme">
              <div className="light">light</div>
              <div className="background">
                <label htmlFor="nav-light-background">background</label>
                <input
                  type="color"
                  name="nav-light-background"
                  id="nav-light-background"
                  value={nav.light.background}
                  onChange={(e) =>
                    dispatchNav({
                      type: "SET",
                      payload: {
                        light: { ...nav.light, background: e.target.value },
                      },
                    })
                  }
                />
              </div>
              <div className="color">
                <label htmlFor="nav-light-text">text</label>
                <input
                  type="color"
                  name="nav-light-text"
                  id="nav-light-text"
                  value={nav.light.color}
                  onChange={(e) =>
                    dispatchNav({
                      type: "SET",
                      payload: {
                        light: { ...nav.light, color: e.target.value },
                      },
                    })
                  }
                />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="section">
        <div className="title">side-nav</div>
        <label htmlFor="side-nav-theme">theme</label>
        <select
          name="side-nav-theme"
          id="side-nav-theme"
          value={sideNav.theme}
          onChange={(e) =>
            dispatchSideNav({
              type: "SET",
              payload: { theme: e.target.value },
            })
          }
        >
          <option value="lighten">lighten</option>
          <option value="darken">darken</option>
          <option value="transparent">transparent</option>
          <option value="blur">blur</option>
          <option value="custom">custom</option>
        </select>

        {sideNav.theme === "custom" && (
          <>
            <div className="theme">
              <div className="dark">dark</div>
              <div className="background">
                <label htmlFor="side-nav-dark-background">background</label>
                <input
                  type="color"
                  name="side-nav-dark-background"
                  id="side-nav-dark-background"
                  value={sideNav.dark.background}
                  onChange={(e) =>
                    dispatchSideNav({
                      type: "SET",
                      payload: {
                        dark: { ...sideNav.dark, background: e.target.value },
                      },
                    })
                  }
                />
              </div>
              <div className="color">
                <label htmlFor="side-nav-dark-text">text</label>
                <input
                  type="color"
                  name="side-nav-dark-text"
                  id="side-nav-dark-text"
                  value={sideNav.dark.color}
                  onChange={(e) =>
                    dispatchSideNav({
                      type: "SET",
                      payload: {
                        dark: { ...sideNav.dark, color: e.target.value },
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="theme">
              <div className="light">light</div>
              <div className="background">
                <label htmlFor="side-nav-light-background">background</label>
                <input
                  type="color"
                  name="side-nav-light-background"
                  id="side-nav-light-background"
                  value={sideNav.light.background}
                  onChange={(e) =>
                    dispatchSideNav({
                      type: "SET",
                      payload: {
                        light: { ...sideNav.light, background: e.target.value },
                      },
                    })
                  }
                />
              </div>
              <div className="color">
                <label htmlFor="side-nav-light-text">text</label>
                <input
                  type="color"
                  name="side-nav-light-text"
                  id="side-nav-light-text"
                  value={sideNav.light.color}
                  onChange={(e) =>
                    dispatchSideNav({
                      type: "SET",
                      payload: {
                        light: { ...sideNav.light, color: e.target.value },
                      },
                    })
                  }
                />
              </div>
            </div>
          </>
        )}
        <label htmlFor="side-nav-edges">edges</label>
        <select
          name="side-nav-edges"
          id="side-nav-edges"
          value={sideNav.edges}
          onChange={(e) =>
            dispatchSideNav({
              type: "SET",
              payload: { edges: e.target.value },
            })
          }
        >
          <option value="border">border</option>
          <option value="shadow">shadow</option>
          <option value="none">none</option>
        </select>
        <label htmlFor="active-class">active className</label>
        <select
          name="active-class"
          id="active-class"
          value={sideNav.activeClass}
          onChange={(e) =>
            dispatchSideNav({
              type: "SET",
              payload: { activeClass: e.target.value },
            })
          }
        >
          <option value="contained">contained</option>
          <option value="text">text</option>
          <option value="indicator-on-left">indicator-on-left</option>
        </select>
        <input
          type="text"
          value={sideNav.activeClass}
          onChange={(e) =>
            dispatchSideNav({
              type: "SET",
              payload: { activeClass: e.target.value },
            })
          }
        />
      </div>
    </StyledDiv>
  );
};

export default Settings;
