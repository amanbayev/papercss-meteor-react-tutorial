import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = props => (
  <div>
    <h2>Summary</h2>
    <ul className="summary">
      <li><Link to="/flexbox">Flexbox</Link></li>
      <li><Link to="/typography">Typography</Link></li>
      <li><Link to="/buttons">Buttons</Link></li>
      <li><Link to="/forms">Forms</Link></li>
      <li><Link to="/lists">Lists</Link></li>
      <li><Link to="/code">Code</Link></li>
      <li><Link to="/tables">Tables</Link></li>
      <li><Link to="/popovers">Popovers</Link></li>
      <li><Link to="/cards">Cards</Link></li>
      <li><Link to="/borders-and-shadows">Borders & Shadows</Link></li>
      <li><Link to="/utilities">Utilities</Link></li>
      <li><Link to="/images">Images</Link></li>
      <li><Link to="/alerts">Alerts</Link></li>
      <li><Link to="/colors">Colors</Link></li>
      <li><Link to="/download">Download</Link></li>
      <li><Link to="/">About</Link></li>
    </ul>
  </div>
)

export default Sidebar
