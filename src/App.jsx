import React from 'react'
import Menu from './Menu'
import Shop from './Shop'
import About from './About'
import Collection from './Collection';
import Sale from './Sale';
import Last from './Last';
import Feature from './Feature';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './form';

const App = () => {
  return (
    <div>
      <Menu/>
      <Shop/>
      <About/>
      <Collection/>
      <Feature/>
      <Sale/>
      <Last/>
      <Form/>
     
    </div>
  )
}

export default App