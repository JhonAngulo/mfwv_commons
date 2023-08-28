import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import NotStandalone from './NotStandalone'

const rootElement = ReactDOM.createRoot(
  document.getElementById('root') as Element
)

rootElement.render(
  <StrictMode>
    <NotStandalone />
  </StrictMode>
)
