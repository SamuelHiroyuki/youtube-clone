import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Sidebar />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
