import { createRoot } from 'react-dom/client'
import './index.css'
import Badges from "./components/Badges.jsx"
import Banners from "./components/Banners.jsx"
import Cards from "./components/Cards.jsx"
import Testimonials from "./components/Testimonials.jsx"

function App() {
  return (
    <>
      <Badges />
      <Banners />
      <Cards />
      <Testimonials />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);