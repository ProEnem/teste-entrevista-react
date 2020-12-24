import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
