import { createContext } from "react";

export const ThemeContext = createContext();
// useContext allows you to consume context values, making it easier to share data across components without prop drilling.
// The Provider makes the context value accessible to all components below it in the component tree.