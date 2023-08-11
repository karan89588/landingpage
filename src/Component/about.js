import React from 'react'
import NavBar from './navbar'
import Footer from './footer'
export default function About() {
  return (
    <div>
    <NavBar/>
    <h2>About Us</h2>
                <p>Apni Mandi Supermarket is a 100% family-owned and operated premier grocery store chain in India. 
                    We carry fresh fruits and vegetables, and a wide selection of groceries, specialty groceries,
                     and the largest selections anywhere. We also carry a wide range of household items and 
                     cooking appliances. It is your one-stop-shop where you can check all the grocery items off
                      your list. Presentation of products is intuitive, easy to find, and well placed in a manner to
                       shorten your search time and ensure an enjoyable shopping experience.
                       </p>
                       <p className="mt-2">

                    Customer happiness is the foundation of everything we do. Our employees are well informed and trained
                     to offer exceptional customer service and a premium shopping experience. Anyone who walks into the store,
                      even if it is for the first time, feels the warmth and experiences the ease of shopping. It is our
                       commitment to bring the freshest produce and best quality products to our customers; we source 
                       from best producers and vendors locally and regionally.</p>
    <Footer/>
    </div>
  )
}
