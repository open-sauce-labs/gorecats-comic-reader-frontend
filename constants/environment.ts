import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { clusterApiUrl } from '@solana/web3.js'
import gorecatsLogoImage from 'public/logo192.png'

// TODO: validate all .env variables

// RPC Node Endpoint
export const endpoint = (process.env.NEXT_PUBLIC_SOLANA_RPC_NODE_ENDPOINT as string) || clusterApiUrl('devnet')
export const network = (process.env.NEXT_PUBLIC_SOLANA_CLUSTER as WalletAdapterNetwork) || WalletAdapterNetwork.Devnet

export const APP_IDENTITY = {
	uri: undefined, // auto generated
	icon: gorecatsLogoImage.src,
	name: 'Gorecats Comic',
}
