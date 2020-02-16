import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

import Header from "./components/Header";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
