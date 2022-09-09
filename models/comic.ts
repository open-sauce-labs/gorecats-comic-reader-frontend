export interface Comic {
	id: number
	title: string
	flavorText?: string
	description?: string
	thumbnail: string
	issueNumber: number
	releaseDate: string
	soundtrack?: string
	collection: {
		slug: string
		name: string
		hashlist: string[]
	}
	pages: {
		id: number
		isPreviewable: boolean
		image: string
		altImage?: string
	}[]
}
