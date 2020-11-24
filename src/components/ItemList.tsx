import React from "react"

import axios from "axios"
import { useQuery } from "react-query"

import { ItemDataInterface } from "../interfaces"

const ItemList = () => {
	const URL = "http://localhost:8000/"

	const { isLoading, error, data } = useQuery("itemsData", async () => {
		const { data } = await axios.get(URL)
		return data
	})

	if (isLoading) return <h3>Loading..</h3>
	if (error) return <p>Error has occured: {error}</p>

	return (
		<ul>
			{data.map((data: ItemDataInterface) => (
				<li key={data.id} id={data.id}>
					<h2>{data.item.name}</h2>
				</li>
			))}
		</ul>
	)
}

export default ItemList
