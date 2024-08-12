import { ReactElement, ReactNode } from "react";

export type navItem = {
  name: string;
  link: string;
  icon?: ReactElement;
};

export type project = {
    title: string,
    description: string,
    link: string,
}

export type gridItem = {
    title: String,
    description: ReactNode,
    header?: ReactElement,
    className: String,
    icon?: ReactElement
  }