import { Box, Button } from '@mui/material'

const ComicReader: React.FC = () => {
	const isLoaded = true
	return (
		<Box className='main-content' style={{ visibility: isLoaded ? 'visible' : 'hidden' }}>
			Placeholder
			<Box my={2}>
				<Button variant='contained' onClick={() => console.log('full screen')}>
					Fullscreen
				</Button>
			</Box>
		</Box>
	)
}

export default ComicReader
