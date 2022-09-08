import React from 'react'
import { Box, BoxProps, Grid, Button, Typography } from '@mui/material'
import DiscordIcon from 'public/assets/vector-icons/discord-icon.svg'
import TwitterIcon from 'public/assets/vector-icons/twitter-icon.svg'
import TelegramIcon from 'public/assets/vector-icons/telegram-icon.svg'
import logoImage from 'public/assets/logo.png'
import { attributes as footer } from 'content/footer.md'
import { attributes as company } from 'content/company.md'
import Image from 'next/future/image'

const Footer: React.FC<BoxProps> = (props) => {
	return (
		<Box component='footer' className='footer' {...props}>
			<Grid container maxWidth='lg' margin='0 auto' className='footer-content'>
				<Grid item xs={12} md={4}>
					{company.logo ? (
						<a href={company.link} rel='noreferrer' target='_blank'>
							<Image className='company-logo' src={company.logo} width={220} height={64} alt={company.shortName} />
						</a>
					) : (
						<Typography variant='body2' className='company-name'>
							{company.shortName}
						</Typography>
					)}
					{company.name ? (
						<Typography variant='body2'>
							&copy; {company.name} / {new Date().getFullYear()}
						</Typography>
					) : null}
				</Grid>

				<Grid item xs={12} md={4} className='footer-links-wrapper'>
					<Typography variant='body2' className='footer-links-title'>
						{footer.linksTitle}
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
						{/* {footer.links.map((link: any) => (
							<Button key={link.name} aria-label={link.text || link.name} href={link.href}>
								{link.icon}&nbsp;{link.text}
							</Button>
						))} */}
					</Box>
				</Grid>

				<Grid item xs={12} md={4}>
					<a href='https://www.gorecats.io/' rel='noreferrer' target='_blank'>
						<Image className='footer-image' src={logoImage} alt='Gorecats' width={180} height={64} />{' '}
					</a>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Footer
