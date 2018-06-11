import React, { Component } from "react";

import Layout from "./hoc/Layout";
import Hotels from "./containers/Hotels";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Hotels />
        </Layout>
      </div>
    );
  }
}

export default App;
