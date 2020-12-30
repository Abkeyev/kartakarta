import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga";
import './i18next';
import Loading from './components/Loading'

ReactGA.initialize(process.env.REACT_APP_G_ANALYTICS || "");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<Suspense fallback={(<Loading />)}>
    <App />
</Suspense>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
