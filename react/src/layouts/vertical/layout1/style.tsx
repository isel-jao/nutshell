import styled from "styled-components";
import { lighten, darken, rgba } from "polished";

const LayoutStyled = styled.div`
  box-sizing: border-box;
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${(props) => props.theme[props.theme.palette.mode]};
  * {
    fill: ${(props) => props.theme[props.theme.palette.mode].color};
  }
  .nav,
  .side-nav {
    z-index: 2;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-property: width, background-color;
    &.lighten {
      background-color: ${(props) =>
        lighten(0.1, props.theme[props.theme.palette.mode].background)};
    }
    &.darken {
      background-color: ${(props) =>
        darken(0.1, props.theme[props.theme.palette.mode].background)};
    }
    &.blur {
      backdrop-filter: blur(2px);
    }
  }

  padding-left: 4em;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-property: padding-left;
  overflow-y: auto;
  overflow-x: hidden;
  .router-view {
    min-height: 200vh;
  }
  &.open {
    padding-left: 16em;
  }

  @media screen and (max-width: 1024px) {
    padding-top: 4em;
    &.open {
      padding-left: 4em;
    }
    .nav {
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
    }
    .side-nav {
      height: calc(100vh - 4em);
      bottom: 0;
    }
  }
  @media screen and (max-width: 768px) {
    padding-left: 0;
    &.open {
      padding-left: 0;
    }
    .side-nav {
      transform: translateX(-100%);
      width: 16em;
      &.open {
        transform: translateX(0);
      }
      transition-property: transform;
    }
  }

  .debug {
    border: 1px solid red;
    & > * {
      border: 1px solid green;
      & > * {
        border: 1px solid blue;
      }
    }
  }

  select,
  select > *,
  input:not([type="color"]) {
    border-radius: 0.25em;
    padding: 0.5em;
    color: inherit;
    background-color: ${(props) =>
      lighten(0.1, props.theme[props.theme.palette.mode].background)};
    border: none;
  }

  input[type="checkbox"] {
    display: inline-block;
    position: relative;
    width: 2em;
    height: 1em;
  }
  input[type="checkbox"]::before {
    width: 100%;
    height: 100%;
    border-radius: 0.5em;
    content: "";
    position: absolute;
    background-color: ${(props) =>
      lighten(0.1, props.theme[props.theme.palette.mode].background)};
  }
  input[type="checkbox"]::after {
    top: 50%;
    left: 0.1em;
    transform: translate(0, -50%);
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.palette.primary.main};
    transition: transform 0.3s ease;
  }
  input[type="checkbox"]:checked::after {
    transform: translate(1em, -50%);
  }
`;

export default LayoutStyled;
