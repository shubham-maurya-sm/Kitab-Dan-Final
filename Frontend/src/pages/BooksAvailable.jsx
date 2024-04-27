import React, { Fragment } from 'react'
import { Provider } from '../contexts/Context'
import Header from '../components/BooksAvailable/Header'
import Books from '../components/BooksAvailable/Books'
import Navbar from '../components/BooksAvailable/Navbar'

function BooksAvailable() {
  return (
    <Provider>
        <Fragment>
          <Navbar/>
            <Header/>
            <Books/>
        </Fragment>
    </Provider>
  )
}

export default BooksAvailable
