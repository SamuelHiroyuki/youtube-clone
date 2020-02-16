import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

import Feed from "./pages/Feed";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Feed />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
