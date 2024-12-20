import React from 'react'
import './App.css'
import LeftSidebar from './Components/LeftSidebar'
import RightSidebar from './Components/RightSidebar'
import countries from './countries'
import CountryItem from './Components/CountryItem'
const App = () => {

  return <div className="flex-row">
<LeftSidebar/>
<RightSidebar>
<ul>
{/* {countries.map ((country) => (
  <li  key={country.capitol}>
    <h3>{country.name}</h3>
    <h4>{country.capitol}</h4>
  </li>
))} */
countries.map((country) => (
  <CountryItem key={country.capitol} capitol={country.capitol} name={country.name}/>
))
}

</ul>

</RightSidebar>

  </div>
}

export default App
