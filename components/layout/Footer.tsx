import React from 'react'
import { Box, BoxProps, Grid, Button, Typography } from '@mui/material'
import DiscordIcon from 'public/assets/vector-icons/discord-icon.svg'
import TwitterIcon from 'public/assets/vector-icons/twitter-icon.svg'
import TelegramIcon from 'public/assets/vector-icons/telegram-icon.svg'
import logoImage from 'public/assets/logo.png'
import companyLogoImage from 'public/assets/nx-logo.png'
import Image from 'next/image'

const Footer: React.FC<BoxProps> = (props) => {
	return (
		<Box component='footer' className='footer' {...props}>
			<Grid container maxWidth='lg' margin='0 auto' className='footer-content'>
				<Grid item xs={12} md={4}>
					<a href='https://studionx.com' rel='noreferrer' target='_blank'>
						<Image className='company-logo' src={companyLogoImage} width={220} height={64} alt='Studio NX' />
					</a>
					<Typography variant='body2'>&copy; Studio NX / {new Date().getFullYear()}</Typography>
				</Grid>

				<Grid item xs={12} md={4} className='footer-links-wrapper'>
					<Typography variant='body2' className='footer-links-title'>
						Join us on social media
					</Typography>
					<Box className='footer-links'>
						<Button aria-label='twitter' href='https://twitter.com/gorecats'>
							<TwitterIcon />
						</Button>
						<Button aria-label='discord' href='https://discord.com/invite/gorecats'>
							<DiscordIcon />
						</Button>
						<Button aria-label='telegram' href='https://t.me/Gorecats'>
							<TelegramIcon />
						</Button>
					</Box>
				</Grid>

				<Grid item xs={12} md={4}>
					<a href='https://www.gorecats.io/' rel='noreferrer' target='_blank'>
						<Image className='footer-image' src={logoImage} alt='Gorecats' width={160} height={64} />{' '}
					</a>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Footer
