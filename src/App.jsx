import React from "react";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { HashRouter as Router} from "react-router-dom";
import TheRoutes from "./components/TheRoutes";

function App(props) {
  return (
    <Router>
      <Header />
      <TheRoutes />
      <Footer />
    </Router>
  );
}

export default App;
