import HomeIcon from "./assets/icons/home";
import DevicesIcon from "./assets/icons/device";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import {
  SdStorage as SdStorageIcon,
  Construction as ConstructionIcon,
  Biotech as BiotechIcon,
} from "@mui/icons-material";
const routes = [
  {
    path: "/home",
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/use-state",
    name: "UseState",
    icon: <PublishedWithChangesIcon />,
  },
  {
    path: "/use-context",
    name: "UseContext",
    icon: <DevicesIcon />,
  },
  {
    path: "/custom-hooks",
    name: "CustomHooks",
    icon: <ConstructionIcon />,
  },
  {
    path: "/use-memo",
    name: "UseMemo",
    icon: <SdStorageIcon />,
  },
  {
    path: "/redux",
    name: "Redux",
    icon: <DevicesIcon />,
  },
  {
    path: "/tmp",
    name: "Tmp",
    icon: <BiotechIcon />,
  },
];

export default routes;
