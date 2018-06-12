import React, { Component } from "react";

import Layout from "./hoc/Layout";
import RowWrapper from "./hoc/RowWrapper";
import SideBar from "./containers/SideBar";
import Hotels from "./containers/Hotels";
import Title from "./components/Title";

class App extends Component {
  render() {
    return (
      <Layout>
        <Title />
        <RowWrapper>
          <SideBar />
          <Hotels />
        </RowWrapper>
      </Layout>
    );
  }
}

export default App;
