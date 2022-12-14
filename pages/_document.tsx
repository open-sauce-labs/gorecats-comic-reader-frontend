import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)

		return initialProps
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta charSet='utf-8' />
					<meta httpEquiv='X-UA-Compatible' content='IE=edge' />

					<meta
						name='description'
						content='A sadistic breed of bloodthirsty critters wreak havoc across the city of catsburg! A washed up detective is the only one standing in the way of a full on invasion and he needs your help! Gain full access to issue 01 by purchasing a limited edition cover on MagicEden...'
					/>
					<meta
						name='keywords'
						content='NFT, Gorecats, Niko, Art of Niko, Art, Emmy, Solana, SOL, pfp, comic, mint, upcoming, collection, animation'
					/>

					<link rel='manifest' href='/manifest.json' />
					<link rel='apple-touch-icon' href='/apple-touch-icon.png'></link>
					<meta name='theme-color' content='#000' />

					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />

					{/* Preload Eczar font */}
					<link
						rel='preload'
						as='style'
						href='https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700;800&family=Poppins:ital,wght@0,400;0,500;0,600;1,400&display=swap'
					/>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700;800&family=Poppins:ital,wght@0,400;0,500;0,600;1,400&display=swap'
					/>

					{/* Preload Archivo Narrow font */}
					<link
						rel='preload'
						as='style'
						href='https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Eczar:wght@400;500&display=swap'
					/>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Eczar:wght@400;500&display=swap'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
