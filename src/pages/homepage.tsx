import React from "react"

import { QueryCache, ReactQueryCacheProvider } from "react-query"

import BuildsList from "../components/BuildsList"

const queryCache = new QueryCache()

const homepage = () => {
	return (
		<ReactQueryCacheProvider queryCache={queryCache}>
			<BuildsList />
		</ReactQueryCacheProvider>
	)
}

export default homepage
