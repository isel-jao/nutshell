import HomeIcon from "./assets/icons/home";
import DevicesIcon from "./assets/icons/device";
const routes = [
  {
    path: "/home",
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/use-state",
    name: "UseState",
    icon: <DevicesIcon />,
  },
  {
    path: "/use-context",
    name: "UseContext",
    icon: <DevicesIcon />,
  },
  {
    path: "/custom-hooks",
    name: "CustomHooks",
    icon: <DevicesIcon />,
  },
  {
    path: "/use-memo",
    name: "UseMemo",
    icon: <DevicesIcon />,
  },
  {
    path: "/redux",
    name: "Redux",
    icon: <DevicesIcon />,
  },
  {
    path: "/tmp",
    name: "Tmp",
    icon: <DevicesIcon />,
  },
];

export default routes;
