import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context.jsx'
//1. O QueryClient cria o client que gerencia o cache e configurações das queries
//2. O Query Provider disponibiliza o client para toda a aplicação
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
//3. Criamos uma nova instância do cliente de queries
const queryClient = new QueryClient()
//AppProvider envolve App para fornecer o contexto global criado em context.jsx
//O QueryClientProvider fica dentro da App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppProvider>
  </StrictMode>
)
