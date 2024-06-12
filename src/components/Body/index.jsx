import React from 'react'
import Header from '../Header'
import Presale from '../presale'
import Footer from '../Footer'
import Ect from "../Ect"
import Tokenomics from '../Tokenomics'
const Body = () => {
  return (
    <div>
        <Header/>
        <Presale/>
        <Tokenomics/>
        <Ect/>
        <Footer/>
    </div>
  )
}

export default Body