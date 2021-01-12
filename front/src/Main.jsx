import React from "react";
import RegisterContainer from "./containers/RegisterContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./components/Info";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="flex-container">
          <Header />
          <div className="middle">
            <Info />
            <RegisterContainer />
          </div>
          <Footer />
        </div>
    );
  }
}

export default Main;
