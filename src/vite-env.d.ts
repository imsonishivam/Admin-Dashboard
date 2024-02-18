/// <reference types="vite/client" />

import { IconType } from "react-icons";
import { Location } from "react-router-dom";

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

interface HeaderItem {
  url: string;
  Icon: IconType;
  text: string;
}
