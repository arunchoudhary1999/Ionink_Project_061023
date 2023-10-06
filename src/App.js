import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Experience1 from "./components/Experience1";
import Awards from "./components/Awards";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Redirect, Route, Switch } from "react-router-dom";
import Book from "./components/Book";

function App() {
  return (
    <>
      <div style={{ border: "2px solid black" }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/Experience1" component={Experience1} />
          <Route exact path="/book" component={Book} />
          <Route exact path="/awards" component={Awards} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
