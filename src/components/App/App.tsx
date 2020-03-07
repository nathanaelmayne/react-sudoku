import React from "react";
import "./App.css";
import Grid from "../Grid/Grid";

export default class App extends React.Component<{}> {
  public render() {
    return (
      <div className="App">
        <Grid />
      </div>
    );
  }
}
