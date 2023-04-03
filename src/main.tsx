import '@fontsource/inter'
import '@fontsource/roboto'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App'
import './index.css'

//Extend the theme to include custom colors, fonts, etc
const colors = {
   brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
   },
}
const fonts = {
   heading: `'Inter', 'Roboto', sans-serif`,
   body: `'Inter', 'Roboto', sans-serif`,
}
const theme = extendTheme({ colors, fonts })

const queryClient = new QueryClient() //create a new query client

// Pass the `queryClient` prop to the `QueryClientProvider` then pass the `theme` prop to the `ChakraProvider`
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <ChakraProvider theme={theme}>
            <App />
         </ChakraProvider>
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   </React.StrictMode>
)
