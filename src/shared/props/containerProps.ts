import { JSXElementConstructor } from "react";

export interface ContainerProp {
  component: JSXElementConstructor<any>;
  props?: Object;
}
