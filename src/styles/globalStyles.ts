import { createGlobalStyle } from "styled-components"

const colors = {
	main: "#FFFFFF",
	secondary: "#000000",
	backgroundPrimary: "#2C3D55",
	backgroundSecondary: "#3E4C5E",
	backgroundThird: "#536271",
}

const GlobalStyle = createGlobalStyle`
	:root {
		--main-color: ${colors.main};
		--secondary-color: ${colors.secondary};
		--background-primary-color: ${colors.backgroundPrimary};
		--background-secondaru-color: ${colors.backgroundSecondary};
		--background-third-color: ${colors.backgroundThird}
	}


	body{
		background: var(--background-primary-color);
		color: var(--main-color)
	}
	
`

export default GlobalStyle
