import React from "react"

import axios from "axios"
import { useQuery } from "react-query"
import styled from "styled-components"

import { BuildInterface } from "../interfaces"

const ItemList = () => {
	const URL = "http://localhost:8000/builds"

	const { isLoading, error, data } = useQuery("itemsData", async () => {
		const { data } = await axios.get(URL)
		return data
	})

	if (isLoading) return <h3>Loading..</h3>
	if (error) return <p>Error has occured: {error}</p>

	return (
		<BuildListContainer>
			<h1>Build list</h1>
			{data.map((build: BuildInterface) => (
				<BuildContainer>
					<BuildName>{build.name}</BuildName>
					<ItemIconsContainer>
						{build.items.map((item) => (
							<ItemIcon src={item.item.image} alt={item.item.name} />
						))}
					</ItemIconsContainer>
				</BuildContainer>
			))}
		</BuildListContainer>
	)
}

export default ItemList

const BuildListContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 100px;
	margin-right: 100px;
`

const BuildContainer = styled.div`
	display: grid;
	background: var(--background-third-color);
	border-radius: 10px;
	grid-template-columns: 300px auto;
	margin-top: 20px;
	padding-top: 10px;
	padding-bottom: 10px;
`

const BuildName = styled.h3`
	grid-column-start: 1;
	grid-column-end: 2;
`

const ItemIconsContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`
const ItemIcon = styled.img`
	border-radius: 10px;
	margin-right: 25px;
`
