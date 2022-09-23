import { Collection } from './collection'
import { ComicPage } from './comicPage'

export interface Comic {
	id: number
	title: string
	flavorText: string
	description: string
	thumbnail: string
	issueNumber: number
	releaseDate: string
	soundtrack?: string | null
	collection: Collection
	pages: ComicPage[]
}
