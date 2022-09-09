import { useEffect } from 'react'
import { Box, Button } from '@mui/material'
import FlashlightOnIcon from 'public/assets/vector-icons/flashlight-on-icon.svg'
import FlashlightOffIcon from 'public/assets/vector-icons/flashlight-off-icon.svg'
import VolumeOnIcon from 'public/assets/vector-icons/volume-on-icon.svg'
import VolumeOffIcon from 'public/assets/vector-icons/volume-off-icon.svg'
import { ReactFlashlight } from 'react-flashlight'
import useToggle from 'hooks/useToggle'
import useSound from 'use-sound'
import { dummyComic } from 'constants/dummyComic'

// Is after 4am and before 8pm
const isDaytime = () => new Date().getHours() < 20 && new Date().getHours() > 4
const lsFlashlight = typeof window === 'object' ? localStorage.getItem('flashlight') : false
const initialLight = lsFlashlight === null ? isDaytime() : lsFlashlight === 'true'

const ComicReader: React.FC = () => {
	const [play, { stop }] = useSound(dummyComic.soundtrack || [], { interrupt: false })
	const [flashlight, toggleFlashlight] = useToggle(initialLight)
	const [sound, toggleSound] = useToggle()

	useEffect(() => {
		localStorage.setItem('flashlight', flashlight.toString())
	}, [flashlight])

	const isLoaded = true
	return (
		<ReactFlashlight enabled={flashlight} showCursor={!flashlight} size={320} darkness={0.9}>
			<Box
				className='comic-reader-wrapper'
				style={{ visibility: isLoaded ? 'visible' : 'hidden', cursor: flashlight ? 'none' : 'default' }}
			>
				<Box className='comic-reader-actions'>
					<Button className='comic-reader-action' variant='contained' onClick={toggleFlashlight}>
						{flashlight ? (
							<FlashlightOnIcon className='flashlight-icon' />
						) : (
							<FlashlightOffIcon className='flashlight-icon' />
						)}
					</Button>
					{sound ? (
						<Button
							className='comic-reader-action'
							variant='contained'
							onClick={() => {
								stop()
								toggleSound()
							}}
						>
							<VolumeOnIcon />
						</Button>
					) : (
						<Button
							className='comic-reader-action'
							variant='contained'
							onClick={() => {
								play()
								toggleSound()
							}}
						>
							<VolumeOffIcon />
						</Button>
					)}
				</Box>
				<Box py={{ xs: 2, sm: 4 }} px={{ xs: 1, sm: 2 }}>
					<img src={dummyComic.pages[0].image} alt={`Page ${0}`} style={{ width: '100%', height: '100%' }} />
				</Box>
			</Box>
		</ReactFlashlight>
	)
}

export default ComicReader
