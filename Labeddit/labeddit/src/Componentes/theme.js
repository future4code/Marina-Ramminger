import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme ({
    palette: {
      primary: {
          main: '#ec6137'
    , }, 
      secondary:  {
          main: '#44535c',
    },
} 
})


export default theme