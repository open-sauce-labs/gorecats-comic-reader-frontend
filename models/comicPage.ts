export interface ComicPage {
	id: number
	pageNumber: number
	chapterNumber: number
	isPreviewable: boolean
	image: string
	altImage?: string | null
}
