import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

const { chains, provider } = configureChains(
	[chain.goerli],
	[publicProvider()]
  );
  
const { connectors } = getDefaultWallets({
	appName: 'My RainbowKit App',
	chains
});
  
const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider
 })

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</RainbowKitProvider>
    	</WagmiConfig>
	)
}

export default MyApp
