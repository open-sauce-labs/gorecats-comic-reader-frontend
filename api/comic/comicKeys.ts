export const COMIC_QUERY_KEYS = Object.freeze({
	COMIC: 'comic',
	GET: 'get',
})

export const comicKeys = Object.freeze({
	comic: [COMIC_QUERY_KEYS.COMIC],
	getComic: () => [COMIC_QUERY_KEYS.COMIC, COMIC_QUERY_KEYS.GET],
})
