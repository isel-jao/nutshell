import styled from "styled-components";
import { lighten, darken, rgba } from "polished";

const unit = "4em";
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
      backdrop-filter: blur(5px);
      background-color: ${(props) =>
        rgba(props.theme.palette.mode === "dark" ? "#000" : "#fff", 0.5)};
    }
  }

  padding-left: ${unit};
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-property: padding-left;
  overflow-y: auto;
  overflow-x: hidden;
  .router-view {
    min-height: 100vh;
  }
  &.open {
    padding-left: 16em;
  }

  @media screen and (max-width: 1024px) {
    padding-top: ${unit};
    &.open {
      padding-left: ${unit};
    }
    .nav {
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
    }
    .side-nav {
      top: ${unit};

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
  @media screen and (min-width: 1024px) {
    &:has(.nav-fixed) {
      padding-top: ${unit};
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
    color: inherit !important;
    background-color: ${(props) =>
      lighten(0.1, props.theme[props.theme.palette.mode].background)};
    border-radius: 0.25em;
    padding: 1em 0.5em;
    min-width: 10em;
    border: none;
    &:focus,
    &:active {
      outline: ${(props) => props.theme.palette.primary.main} auto 1px;
    }
  }

  input[type="checkbox"] {
    cursor: pointer;
    display: inline-block;
    position: relative;
    width: 2em;
    min-width: 2em;
    height: 1em;
  }
  input[type="checkbox"]::before {
    width: 100%;
    height: 100%;
    border-radius: 2em;
    content: "";
    position: absolute;
    background-color: ${(props) =>
      lighten(0.1, props.theme[props.theme.palette.mode].background)};
  }
  input[type="checkbox"]::after {
    top: 5%;
    bottom: 5%;
    left: 5%;
    transform: translateX(0);
    aspect-ratio: 1;
    border-radius: 50%;
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.palette.primary.main};
    transition: transform 0.3s ease;
  }
  input[type="checkbox"]:checked::after {
    transform: translateX(100%);
  }

  .contained {
    background: ${(props) => props.theme.palette.primary.main};
    background-size: 200% auto;
    color: #fff !important;
    * {
      fill: #fff !important;
    }
  }

  .text {
    background-color: ${(props) => rgba(props.theme.palette.primary.main, 0.1)};

    * {
      fill: ${(props) => props.theme.palette.primary.main} !important;
    }
    color: ${(props) => props.theme.palette.primary.main} !important;
  }

  .indicator-on-left {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 0.25em;
      background-color: ${(props) => props.theme.palette.primary.main};
    }
  }
  .indicator-on-right {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 0.25em;
      background-color: ${(props) => props.theme.palette.primary.main};
    }
  }
  .indicator-on-top {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 0.25em;
      background-color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;

export default LayoutStyled;
