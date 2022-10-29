import type { NextPage } from 'next'
import Navigation from 'components/layout/Navigation'
import Footer from 'components/layout/Footer'
import Main from 'components/layout/Main'
import { useFetchApp } from 'api/app'
import ComicReader from 'components/ComicReader'
import { useAuth } from '@open-sauce/solomon'
import { Box, Button, Typography } from '@mui/material'
import MagicEdenIcon from 'public/assets/vector-icons/magic-eden-icon.svg'

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
					<Box textAlign='center' py={6} px={2} width='100%'>
						<Typography variant='h6' pb={2}>
							Connect with wallet which holds Gorecats
						</Typography>
						<Typography variant='body1' pb={1}>
							Don&apos;t have one?
						</Typography>
						<Button
							href='https://magiceden.io/creators/gorecats_collection'
							rel='noreferrer'
							target='_blank'
							variant='contained'
							style={{ padding: '0.4rem 1rem' }}
						>
							<MagicEdenIcon style={{ margin: '-3px 4px 0' }} />
							MagicEden
						</Button>
					</Box>
				)}
			</Main>

			<Footer />
		</>
	)
}

export default Home
