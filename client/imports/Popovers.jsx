import React from 'react'

const Popovers = () => {
  return (
    <div id="popovers" className="section">
      <h2>Popovers</h2>
      <h4>Basic usage</h4>
      <p>You can add popovers, also called tooltips, on your elements. popover attribute is the popover text content, popover-position attribute can be: top, left, right, bottom.</p>
      <div className="row flex-spaces">
        <div className="sm-3 col">
          <p popover="Popover on left" popover-position="left">Popover left position</p>
        </div>
        <div className="sm-3 col">
          <p popover="Popover on top" popover-position="top">Popover top position</p>
        </div>
        <div className="sm-3 col">
          <p popover="Popover on bottom" popover-position="bottom">Popover bottom position</p>
        </div>
        <div className="sm-3 col">
          <p popover="Popover on right" popover-position="right">Popover right position</p>
        </div>
      </div>
      <div className="docs">
        <pre>&lt;p popover="Popover on left" popover-position="left"&gt;Popover left position&lt;/p&gt;{"\n"}&lt;p popover="Popover on top" popover-position="top"&gt;Popover top position&lt;/p&gt;{"\n"}&lt;p popover="Popover on bottom" popover-position="bottom"&gt;Popover bottom position&lt;/p&gt;{"\n"}&lt;p popover="Popover on right" popover-position="right"&gt;Popover right position&lt;/p&gt;</pre>
      </div>
      <p>But you can also popover on pretty much any element you want, it can be on a button, on a table cell, ...</p>
      <div className="row flex-center">
        <div className="sm-6 col">
          <button popover="Popover on top" popover-position="top">Popover on top and on a button!</button>
        </div>
      </div>
      <div className="docs">
        <pre>&lt;button popover="Popover on top" popover-position="top"&gt;Popover on top and on a button!&lt;/button&gt;</pre>
      </div>
    </div>
  )
}

export default Popovers
