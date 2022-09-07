import type { NextPage } from 'next'
import Navigation from 'components/layout/Navigation'
import Footer from 'components/layout/Footer'
import Main from 'components/layout/Main'
import hashlist from 'constants/hashlist'
import { HoldersOnly } from '@open-sauce/solomon'
import { useFetchApp } from 'api/app'
import ComicReader from 'components/ComicReader'

const Home: NextPage = () => {
	const { data } = useFetchApp()

	return (
		<>
			<Navigation />

			<Main className='main'>
				<HoldersOnly altChildren='Connect with your wallet which holds the Gorecat NFT' hashlist={hashlist}>
					<ComicReader />
				</HoldersOnly>
			</Main>

			<Footer />
		</>
	)
}

export default Home
