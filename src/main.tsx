// 1. Import the extendTheme function
import '@fontsource/inter'
import '@fontsource/roboto'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}
const fonts = {
    heading: `'Roboto', 'Inter', sans-serif`,
    body: `'Roboto', 'Inter', sans-serif`,
}

const theme = extendTheme({ colors, fonts })

// 3. Pass the `theme` prop to the `ChakraProvider`
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
)
