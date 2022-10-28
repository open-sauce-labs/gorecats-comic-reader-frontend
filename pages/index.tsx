import type { NextPage } from 'next'
import Navigation from 'components/layout/Navigation'
import Footer from 'components/layout/Footer'
import Main from 'components/layout/Main'
import { useFetchApp } from 'api/app'
import ComicReader from 'components/ComicReader'
import { useAuth } from '@open-sauce/solomon'
import { Typography } from '@mui/material'

const Home: NextPage = () => {
	const auth = useAuth()
	useFetchApp()

	return (
		<>
			<Navigation />

			<Main className='main'>
				{auth.isAuthenticated ? (
					<ComicReader />
				) : (
					<Typography variant='h6' py={6} px={2} width='100%' textAlign='center'>
						Connect with your wallet which holds the Gorecat NFT
					</Typography>
				)}
			</Main>

			<Footer />
		</>
	)
}

export default Home
