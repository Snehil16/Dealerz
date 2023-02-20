import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import history from "./services/history.js";

import HomePage from "./pages/HomePage";

function App() {
	return (
		HomePage()
		// <BrowserRouter>
		// 	<Routes>
		// 		<Route path="/" exact component={Shop} />
		// 		{/* <Route path="/shop" component={Shop} /> */}

		// 		{/* Default root: */}
		// 		<Route component={Shop} />
		// 	</Routes>
		// </BrowserRouter>
	);
}

export default App;
