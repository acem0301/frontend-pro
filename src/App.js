import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Buscador from "./pages/Buscador";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: "url(./assets/images/workers.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Buscador />
    </div>
  );
}
