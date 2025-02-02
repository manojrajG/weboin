import React, { createContext } from "react";
import { DataProvider } from "./DataContext";
const ContextApi = createContext({});

export const ContextApiProvider = ({ children }) => {
  return <DataProvider>{children}</DataProvider>;
};
export default ContextApi;
