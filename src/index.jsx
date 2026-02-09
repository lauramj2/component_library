import ReactDOM from 'react-dom/client'
import './index.css'
import Badges from "./components/Badges.jsx"
import Banners from "./components/Banners.jsx"
import Cards from "./components/Cards.jsx"
import Testimonials from "./components/Testimonials.jsx"

function App() {
  return (
    <div id="container">
      <Badges color="purple" type="square" text="hello" />
      <Banners variation="success" title="title" info="some info" />
      <Cards />
      <Testimonials />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)