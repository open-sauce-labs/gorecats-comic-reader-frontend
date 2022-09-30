import { Comic } from 'models/comic'
import hashlist from './hashlist'
import page1 from 'public/assets/comic/page-1.png'
import page2 from 'public/assets/comic/page-2.png'
import page3 from 'public/assets/comic/page-3.png'
import page4 from 'public/assets/comic/page-4.png'
import page5 from 'public/assets/comic/page-5.png'
import page6 from 'public/assets/comic/page-6.png'
import page7 from 'public/assets/comic/page-7.png'
import page8 from 'public/assets/comic/page-8.png'
import page9 from 'public/assets/comic/page-9.png'
import page10 from 'public/assets/comic/page-10.png'
import page11 from 'public/assets/comic/page-11.png'
import page12 from 'public/assets/comic/page-12.png'
import page13 from 'public/assets/comic/page-13.png'
import page14 from 'public/assets/comic/page-14.png'
import page15 from 'public/assets/comic/page-15.png'
import page16 from 'public/assets/comic/page-16.png'
import page17 from 'public/assets/comic/page-17.png'
import page18 from 'public/assets/comic/page-18.png'
import page19 from 'public/assets/comic/page-19.png'
import page20 from 'public/assets/comic/page-20.png'
import page21 from 'public/assets/comic/page-21.png'
import page22 from 'public/assets/comic/page-22.png'

export const dummyComic: Comic = {
	id: 1,
	name: 'The Narentines',
	slug: 'the-narentines',
	description:
		"Hidden from human eyes lived a great nation in the vast valley of Neretva. It's origin and numbers unknown, it's practices a complete mystery.\\nA young boy discovers what seems to be a completely new species.",
	flavorText: 'Unique and intriguing Sci-Fi with a sprinkle of history on top of it. Brilliant! - The Journal',
	isDeleted: false,
	isVerified: true,
	isPublished: true,
	thumbnail: 'thumbnail.jpg',
	pfp: 'pfp.jpg',
	logo: 'logo.jpg',
	website: 'https://narentines.com/',
	twitter: 'https://twitter.com/Narentines',
	discord: 'https://discord.com/invite/narentines',
	telegram: '',
	instagram: '',
	medium: 'https://medium.com/@NarentinesNFT',
	tikTok: '',
	youTube: '',
	magicEden: 'https://www.magiceden.io/marketplace/narentinesnft',
	openSea: '',
	issues: [
		{
			id: 1,
			number: 1,
			title: 'Narentines: The Purge',
			slug: 'narentines-the-purge',
			description:
				"Only but a few left remaining, as a new dawn rose and the Prophet noticed the signs.\\nA new age would start for Narentines, as the great Purge pawes it's path to the Valley",
			flavorText: 'The great stone is destroyed and sacrifise must be made to please the Mighty Abaia',
			cover: 'cover.jpg',
			soundtrack: 'soundtrack.jpg',
			magicEden: 'https://www.magiceden.io/marketplace/narentinesnft',
			openSea: '',
			releaseDate: '2022-11-10T11:00:00.000Z',
			isPublished: true,
			isDeleted: false,
			isVerified: true,
			hashlist: hashlist,
			pages: [
				{ id: 1, number: 1, isPreviewable: true, image: page1.src },
				{ id: 2, number: 2, isPreviewable: true, image: page2.src },
				{ id: 3, number: 3, isPreviewable: true, image: page3.src },
				{ id: 4, number: 4, isPreviewable: false, image: page4.src },
				{ id: 5, number: 5, isPreviewable: false, image: page5.src },
				{ id: 6, number: 6, isPreviewable: false, image: page6.src },
				{ id: 7, number: 7, isPreviewable: false, image: page7.src },
				{ id: 8, number: 8, isPreviewable: false, image: page8.src },
				{ id: 9, number: 9, isPreviewable: false, image: page9.src },
				{ id: 10, number: 10, isPreviewable: false, image: page10.src },
				{ id: 11, number: 11, isPreviewable: false, image: page11.src },
				{ id: 12, number: 12, isPreviewable: false, image: page12.src },
				{ id: 13, number: 13, isPreviewable: false, image: page13.src },
				{ id: 14, number: 14, isPreviewable: false, image: page14.src },
				{ id: 15, number: 15, isPreviewable: false, image: page15.src },
				{ id: 16, number: 16, isPreviewable: false, image: page16.src },
				{ id: 17, number: 17, isPreviewable: false, image: page17.src },
				{ id: 18, number: 18, isPreviewable: false, image: page18.src },
				{ id: 19, number: 19, isPreviewable: false, image: page19.src },
				{ id: 20, number: 20, isPreviewable: false, image: page20.src },
				{ id: 21, number: 21, isPreviewable: false, image: page21.src },
				{ id: 21, number: 21, isPreviewable: false, image: page22.src },
			],
		},
	],
}
