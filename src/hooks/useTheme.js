import React, { createContext, useReducer } from "react";


// export const CounterContext = createContext({count: {} as number, setCount: (num: number) => {}  });

export const ThemeContext = createContext();

function themeReducer(state, action)  {
  switch (action) {
    case 'yellow':
      return {bg:"yellow", col:"black", line:"black" }
    case 'red':
      return {bg:"red", col:"grey", line:"lightGrey" }
    case 'green':
      return {bg:"green", col:"grgray", line:"grgray" }  
    case 'blue':
      return {bg:"blue", col:"pink", line:"pink" } 
    default:
      return state;
  }
};

const ThemeContextProvider = (props) => {
  const [theme, dispatch] = useReducer(themeReducer, {bg:"yellow", col:"black", line:"black" })

  return (
    <ThemeContext.Provider value={{theme:theme, themeDispatch:dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider
