import HomePage from "../../components/HomePage";
import { Route, Switch, useLocation } from "react-router-dom";
import FirstPage from "../../components/FirstPage";
import SecondPage from "../../components/SecondPage";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);

  // const aNumber = 1;
  // const aString = "tennis";
  // const aBool = true;
  // const anArray = [aNumber, aString];
  // const anObject = { keyOne: aNumber, keyTwo: aString, isMorning: aBool };
  //
  // console.log(aNumber);
  // console.log(aString);
  // console.log(aBool);
  // console.log(anArray);
  // console.log(anObject);
  // console.log(anObject);

  return (
    <div className="app">
      <Route
        path={"/(.*)"}
        render={() => (
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route exact path={"/first-page"} component={FirstPage} />
            <Route exact path={"/second-page"} component={SecondPage} />
          </Switch>
        )}
      />
    </div>
  );
}

export default App;
