import React from 'react'
import { ToolbarProps, Toolbar, Button, Hidden, Box, Menu, MenuItem } from '@mui/material'
import HomeIcon from 'public/assets/vector-icons/home-icon.svg'
import DiscordIcon from 'public/assets/vector-icons/discord-icon.svg'
import TwitterIcon from 'public/assets/vector-icons/twitter-icon.svg'
import InstagramIcon from 'public/assets/vector-icons/instagram-icon.svg'
import TelegramIcon from 'public/assets/vector-icons/telegram-icon.svg'
import SocialIcon from 'public/assets/vector-icons/social-icon.svg'
import { Account, lsRemoveWalletAuth, removeAuthHeaders, useAuth, useServerAuthorization } from '@open-sauce/solomon'
import { SolanaMobileWalletAdapterWalletName } from '@solana-mobile/wallet-adapter-mobile'
import { Web3MobileWallet } from '@solana-mobile/mobile-wallet-adapter-protocol-web3js'
import { useWallet } from '@solana/wallet-adapter-react'
import useAnchorElement from 'hooks/useAnchorElement'
import dynamic from 'next/dynamic'
import http from 'api/http'

const WalletMultiButtonDynamic = dynamic(
	async () => (await import('@solana/wallet-adapter-material-ui')).WalletMultiButton,
	{ ssr: false }
)

const MobileWalletMultiButtonDynamic = dynamic(
	async () => await (await import('@open-sauce/solomon')).MobileWalletMultiButton,
	{ ssr: false }
)

const Navigation: React.FC<ToolbarProps> = (props) => {
	const { setIsAuthenticated } = useAuth()
	const [menuAnchorEl, setMenuAnchorEl, resetMenuAnchorEl] = useAnchorElement()
	const { mobileConnect } = useServerAuthorization(http)
	const { wallet } = useWallet()
	const isMobileWallet = wallet?.adapter.name === SolanaMobileWalletAdapterWalletName

	const onAuthorize = async (mobileWallet: Web3MobileWallet, account: Account) => {
		// TODO: deprecate setIsAuthenticated(true)
		setIsAuthenticated(true)
		return await mobileConnect(mobileWallet, account)
	}

	const onDeauthorize = (account: Account) => {
		removeAuthHeaders(http)
		if (account?.address) lsRemoveWalletAuth(account.address)
		// TODO: setIsAuthenticated(false)
	}

	return (
		<Toolbar color='primary' component='nav' className='navigation' {...props}>
			<Box className='navigation-items navigation-items--left'>
				<Button variant='contained' href='https://www.gorecats.io/' rel='noreferrer' target='_blank'>
					<HomeIcon />
				</Button>
			</Box>

			<Box className='navigation-items navigation-items--right'>
				{/* Mobile */}
				<Hidden smUp>
					<Button variant='contained' aria-label='social-media' onClick={setMenuAnchorEl}>
						<SocialIcon />
					</Button>
					<Menu
						anchorEl={menuAnchorEl}
						open={Boolean(menuAnchorEl)}
						onClose={resetMenuAnchorEl}
						className='navigation-items navigation-items--right'
						PaperProps={{ className: 'mobile-menu' }}
						keepMounted
					>
						<MenuItem onClick={resetMenuAnchorEl}>
							<Button color='secondary' href='https://twitter.com/gorecats' rel='noreferrer' target='_blank'>
								<TwitterIcon />
								Twitter
							</Button>
						</MenuItem>
						<MenuItem onClick={resetMenuAnchorEl}>
							<Button color='secondary' href='https://www.instagram.com/gorecats_art' rel='noreferrer' target='_blank'>
								<InstagramIcon />
								Instagram
							</Button>
						</MenuItem>
						<MenuItem onClick={resetMenuAnchorEl}>
							<Button color='secondary' href='https://discord.com/invite/gorecats' rel='noreferrer' target='_blank'>
								<DiscordIcon />
								Discord
							</Button>
						</MenuItem>
						<MenuItem onClick={resetMenuAnchorEl}>
							<Button color='secondary' href='https://t.me/Gorecats' rel='noreferrer' target='_blank'>
								<TelegramIcon />
								Telegram
							</Button>
						</MenuItem>
					</Menu>
				</Hidden>

				{/* Desktop */}
				<Hidden smDown>
					<Button
						variant='contained'
						aria-label='twitter'
						href='https://twitter.com/gorecats'
						rel='noreferrer'
						target='_blank'
					>
						<TwitterIcon />
					</Button>
					<Button
						variant='contained'
						aria-label='instagram'
						href='https://www.instagram.com/gorecats_art'
						rel='noreferrer'
						target='_blank'
					>
						<InstagramIcon />
					</Button>
					<Button
						variant='contained'
						aria-label='discord'
						href='https://discord.com/invite/gorecats'
						rel='noreferrer'
						target='_blank'
					>
						<DiscordIcon />
					</Button>
					<Button
						variant='contained'
						aria-label='telegram'
						href='https://t.me/Gorecats'
						rel='noreferrer'
						target='_blank'
					>
						<TelegramIcon />
					</Button>
				</Hidden>

				{isMobileWallet ? (
					<MobileWalletMultiButtonDynamic
						className='wallet-button'
						onAuthorize={onAuthorize}
						onDeauthorize={onDeauthorize}
					/>
				) : (
					<WalletMultiButtonDynamic variant='contained' className='wallet-button' />
				)}
			</Box>
		</Toolbar>
	)
}

export default Navigation
