import http from 'api/http'
import { appKeys, APP_QUERY_KEYS } from 'api/app'
import { useQuery } from 'react-query'

const fetchApp = async (): Promise<string> => {
	const response = await http.get<string>(APP_QUERY_KEYS.APP)
	return response.data
}

export const useFetchApp = () => {
	return useQuery(appKeys.app, fetchApp, {
		staleTime: 1000 * 60 * 60 * 24, // Stale for one day
	})
}
