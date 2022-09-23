import http from 'api/http'
import { comicKeys, COMIC_QUERY_KEYS } from 'api/comic'
import { useQuery } from 'react-query'
import { dummyComic } from 'constants/dummyComic'
import { Comic } from 'models/comic'

const { COMIC, GET } = COMIC_QUERY_KEYS

const fetchComic = async (): Promise<Comic> => {
	try {
		await http.get<string>(`${COMIC}/${GET}`)
	} catch (e) {}
	// return response.data
	return dummyComic
}

export const useFetchComic = () => {
	return useQuery(comicKeys.comic, fetchComic, {
		staleTime: 1000 * 60 * 60 * 4, // Stale for 4 hours
	})
}
