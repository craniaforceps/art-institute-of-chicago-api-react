import './App.css'
// import ThemeToggle from './ThemeToggle'
// import SearchForm from './SearchForm'
// import Gallery from './Gallery'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import Landing from './pages/Landing'
import Artwork from './pages/Artwork'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
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
        path: '/artwork',
        element: <Artwork />,
      },
    ],
  },
])

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
