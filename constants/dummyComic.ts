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
	title: 'Rise of the Gorecats',
	flavorText: 'by Emmy winning duo Jim Bryson & Adam Jeffcoat',
	description:
		'A sadistic breed of bloodthirsty critters wreak havoc across the city of Catsburg. A washed up detective and his gung ho rookie are the only ones standing in the way of a full on invasion.\nGain full access to the issue 01 & all future issues by purchasing a limited edition cover on Magic Eden.',
	thumbnail: page1.src,
	issueNumber: 1,
	releaseDate: Date.now().toLocaleString(),
	soundtrack: '/assets/sounds/harlem_nocturne.mp3',
	collection: {
		slug: 'gorecats',
		name: 'Gorecats',
		hashlist,
	},
	pages: [
		{ id: 1, image: page1.src, altImage: page1.src, isPreviewable: true },
		{ id: 2, image: page2.src, altImage: page2.src, isPreviewable: true },
		{ id: 3, image: page3.src, altImage: page3.src, isPreviewable: true },
		{ id: 4, image: page4.src, altImage: page4.src, isPreviewable: false },
		{ id: 5, image: page5.src, altImage: page5.src, isPreviewable: false },
		{ id: 6, image: page6.src, altImage: page6.src, isPreviewable: false },
		{ id: 7, image: page7.src, altImage: page7.src, isPreviewable: false },
		{ id: 8, image: page8.src, altImage: page8.src, isPreviewable: false },
		{ id: 9, image: page9.src, altImage: page9.src, isPreviewable: false },
		{ id: 10, image: page10.src, altImage: page10.src, isPreviewable: false },
		{ id: 11, image: page11.src, altImage: page11.src, isPreviewable: false },
		{ id: 12, image: page12.src, altImage: page12.src, isPreviewable: false },
		{ id: 13, image: page13.src, altImage: page13.src, isPreviewable: false },
		{ id: 14, image: page14.src, altImage: page14.src, isPreviewable: false },
		{ id: 15, image: page15.src, altImage: page15.src, isPreviewable: false },
		{ id: 16, image: page16.src, altImage: page16.src, isPreviewable: false },
		{ id: 17, image: page17.src, altImage: page17.src, isPreviewable: false },
		{ id: 18, image: page18.src, altImage: page18.src, isPreviewable: false },
		{ id: 19, image: page19.src, altImage: page19.src, isPreviewable: false },
		{ id: 20, image: page20.src, altImage: page20.src, isPreviewable: false },
		{ id: 21, image: page21.src, altImage: page21.src, isPreviewable: false },
		{ id: 22, image: page22.src, altImage: page22.src, isPreviewable: false },
	],
}
