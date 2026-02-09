import React from "react"
import Badges from "./components/Badges.jsx"
import Banners from "./components/Banners.jsx"
import Cards from "./components/Cards.jsx"
import Testimonials from "./components/Testimonials.jsx"

export default function App(){
     return (
        <div id="comps">
          <Badges color="purple" type="square" text="hello" />
          <Banners status="success" single={true} />
          <Cards />
          <Testimonials />
        </div>
      )
}