import { CssBaseline } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { SpotifyProvider } from './hooks/useSpotify'
import './index.css'
import Theme from './utils/Theme'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <SpotifyProvider>
                    <Theme>
                        <CssBaseline />
                        <App />
                    </Theme>
                </SpotifyProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
)
