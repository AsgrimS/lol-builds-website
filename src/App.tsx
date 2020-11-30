import React from "react"
import "./App.css"

import Homepage from "./pages/homepage"
import GlobalStyle from "./styles/globalStyles"
import styled from "styled-components"

function App() {
	return (
		<>
			<GlobalStyle />
			<Content>
				<Homepage />
			</Content>
		</>
	)
}

export default App

const Content = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding: 20px;
	width: 65%;
	text-align: center;
	background: var(--background-secondaru-color);
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
`
