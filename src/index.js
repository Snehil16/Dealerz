import React from "react";
import ReactDOM from "react-dom";
// import './App.css'
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import 'semantic-ui-css/semantic.min.css';
// import 'react-notifications/lib/notifications.css';
import './index.css';
import './App.css';
import './style.css';
import './bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
