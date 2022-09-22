import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="*" component={NotFound} exact />
      </Switch>
    </Router>
  );
}

export default App;
