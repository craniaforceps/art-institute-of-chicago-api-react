import './App.css'
// import ThemeToggle from './ThemeToggle'
// import SearchForm from './SearchForm'
// import Gallery from './Gallery'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import Landing from './pages/Landing'
import Artwork from './pages/Artwork'
import About from './pages/About'
import Error from './pages/Error'
import { loader as artworkLoader } from './pages/Artwork'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/artwork/:id',
        element: <Artwork />,
        loader: artworkLoader(queryClient),
      },
    ],
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
