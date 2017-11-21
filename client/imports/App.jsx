import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Sidebar from '/client/imports/Sidebar'
import Landing from '/client/imports/Landing'
import Flexbox from '/client/imports/Flexbox'
import Typography from '/client/imports/Typography'
import Buttons from '/client/imports/Buttons'
import Forms from '/client/imports/Forms'
import Lists from '/client/imports/Lists'
import Code from '/client/imports/Code'
import Tables from '/client/imports/Tables'
import Popovers from '/client/imports/Popovers'
import Cards from '/client/imports/Cards'
import Badges from '/client/imports/Badges'
import Colors from '/client/imports/Colors'
import Borders from '/client/imports/Borders'
import Utilities from '/client/imports/Utilities'
import Images from '/client/imports/Images'
import Alerts from '/client/imports/Alerts'
import Download from '/client/imports/Download'
import About from '/client/imports/About'

const App = props => (
  <BrowserRouter>
    <div className="paper" style={{marginLeft: '20px', marginRight: '20px'}}>
      <center>
        <h1>PaperCSS ::: Tutorials and Examples</h1>
      </center>
      <div className="row">
        <div className="col-3 col background-secondary">
          <Sidebar />
        </div>
        <div className="col-9 col">
          <Switch>
            <Route exact path="/" component={ About } />
            <Route exact path="/flexbox" component={ Flexbox } />
            <Route exact path="/typography" component={ Typography } />
            <Route exact path="/buttons" component={ Buttons } />
            <Route exact path="/forms" component={ Forms } />
            <Route exact path="/lists" component={ Lists } />
            <Route exact path="/code" component={ Code } />
            <Route exact path="/tables" component={ Tables } />
            <Route exact path="/popovers" component={ Popovers } />
            <Route exact path="/cards" component={ Cards } />
            <Route exact path="/badges" component={ Badges } />
            <Route exact path="/colors" component={ Colors } />
            <Route exact path="/borders-and-shadows" component={ Borders } />
            <Route exact path="/utilities" component={ Utilities } />
            <Route exact path="/images" component={ Images } />
            <Route exact path="/alerts" component={ Alerts } />
            <Route exact path="/download" component={ Download } />
          </Switch>
        </div>
      </div>
      <div className="row flex-right">
        <p>Made with 💛 by <a href="https://vlaservi.ch" target="_blank">Rhyne</a> and some <a href="https://github.com/rhyneav/papercss/graphs/contributors">fantastic contributors</a>!</p>
      </div>
    </div>
  </BrowserRouter>
)

export default App
