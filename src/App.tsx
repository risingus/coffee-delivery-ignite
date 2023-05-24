import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CoffeeDeliveryProvider } from './contexts/CoffeeDelivery'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <CoffeeDeliveryProvider>
        <Router />
      </CoffeeDeliveryProvider>
    </BrowserRouter>
  )
}

export default App