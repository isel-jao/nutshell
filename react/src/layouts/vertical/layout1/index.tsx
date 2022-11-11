import React from "react";
import { ThemeProvider } from "styled-components";
import LayoutStyled from "./style";
import Nav from "./nav";
import SideNav from "./side-nav";
import Settings from "./settings";
import Provider from "../../../components/provider";
interface Route {
  path: string;
  name: string;
  icon?: React.ReactNode;
  description?: string;
  routes?: Route[];
}

interface LayoutProps {
  routes: Route[];
  children?: React.ReactNode;
}

interface Theme {
  dark: {
    background: string;
    color: string;
  };
  light: {
    background: string;
    color: string;
  };
  navTheme: "lighten" | "darken" | "transparent" | "blur" | "custom";
  edges: "border" | "shadow" | "none";
  palette: {
    mode: "dark" | "light";
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    error: {
      main: string;
    };
    warning: {
      main: string;
    };
    info: {
      main: string;
    };
    success: {
      main: string;
    };
  };
}

const defaultState: Theme = {
  dark: {
    color: "#fff",
    background: "#0e1c1c",
  },
  light: {
    color: "#0d1a1a",
    background: "#d5e7e6",
  },
  navTheme: "lighten",
  edges: "border",
  palette: {
    mode: "light",
    primary: {
      main: "#00BABC",
    },
    secondary: {
      main: "#aaaaaa",
    },
    error: {
      main: "#F44336",
    },
    warning: {
      main: "#FF9800",
    },
    info: {
      main: "#21d4f3",
    },
    success: {
      main: "#1dda75",
    },
  },
};

interface Action {
  type: string;
  payload: any;
}

interface ContextState {
  theme: [Theme, any];
  open: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  settingsOpen: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

function themeReducer(state = defaultState, action: Action): Theme {
  switch (action.type) {
    case "SET":
      return { ...state, ...action.payload };
    case "SET_LIGHT":
      return {
        ...state,
        light: {
          ...state.light,
          ...action.payload,
        },
      };
    case "SET_DARK":
      return {
        ...state,
        dark: {
          ...state.dark,
          ...action.payload,
        },
      };
    case "SET_PALETTE":
      return {
        ...state,
        palette: {
          ...state.palette,
          ...action.payload,
        },
      };
    case "TOGGLE_MODE":
      return {
        ...state,
        palette: {
          ...state.palette,
          mode: state.palette.mode === "light" ? "dark" : "light",
        },
      };

    case "UPDATE_PALETTE":
      return {
        ...state,
        palette: {
          ...state.palette,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

const Layout = (props: LayoutProps) => {
  const [theme, dispatch] = React.useReducer(themeReducer, defaultState);
  const [open, setOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(true);
  return (
    <ThemeProvider theme={theme}>
      <Provider
        value={{
          theme: [theme, dispatch],
          open: [open, setOpen],
          settingsOpen: [settingsOpen, setSettingsOpen],
        }}
      >
        <LayoutStyled className={`layout ${open && "open"}`}>
          <Settings />
          <div className="router-view">{props.children}</div>
        </LayoutStyled>
      </Provider>
    </ThemeProvider>
  );
};

export { Nav, SideNav, Theme, Route, LayoutProps, ContextState };
export default Layout;
