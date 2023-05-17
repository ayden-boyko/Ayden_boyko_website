"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

type ContainerProps = {
    children: React.ReactNode;
  };

const Providers = (props: ContainerProps) => {
    return <ThemeProvider>{props.children}</ThemeProvider>
}

export default Providers