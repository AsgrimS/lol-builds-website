import React from "react"

import { QueryCache, ReactQueryCacheProvider } from "react-query"

import ItemList from "../components/ItemList"

const queryCache = new QueryCache()

const homepage = () => {
	return (
		<ReactQueryCacheProvider queryCache={queryCache}>
			<ItemList />
		</ReactQueryCacheProvider>
	)
}

export default homepage
