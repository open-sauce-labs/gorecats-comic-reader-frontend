export interface ComicPage {
	id: number
	pageNumber: number
	isPreviewable: boolean
	image: string
	altImage?: string | null
}
