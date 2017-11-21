import React from 'react'

const Buttons = () => {
  return (
    <div id="buttons" className="section">
      <h2>Buttons</h2>
      <p>Insprired by <a href="https://codepen.io/tmrDevelops/pen/VeRvKX" target="_blank">Imprefect Buttons</a></p>
      <button className="btn-large">Large</button>
      <button>Default</button>
      <button className="btn-small">Small</button>
      <a href="#" className="paper-btn">Link</a>
      <div className="row">
        <div className="col-6 col">
          <button className="btn-block">Block level</button>
        </div>
      </div>
      <button className="disabled">Disabled</button>
      <button disabled>Disabled</button>
      <div className="docs">
        <pre>&lt;p&gt;Insprired by &lt;a href="https://codepen.io/tmrDevelops/pen/VeRvKX" target="_blank"&gt;Imprefect Buttons&lt;/a&gt;&lt;/p&gt;{"\n"}&lt;button class="btn-large"&gt;Large&lt;/button&gt;{"\n"}&lt;button&gt;Default&lt;/button&gt;{"\n"}&lt;button class="btn-small"&gt;Small&lt;/button&gt;{"\n"}&lt;a href="#" class="paper-btn"&gt;Link&lt;/a&gt;{"\n"}&lt;div class="row"&gt;{"\n"}{"  "}&lt;div class="col-6 col"&gt;{"\n"}{"    "}&lt;button class="btn-block"&gt;Block level&lt;/button&gt;{"\n"}{"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;button class="disabled"&gt;Disabled&lt;/button&gt;{"\n"}&lt;button disabled&gt;Disabled&lt;/button&gt;</pre>
      </div>
    </div>
  )
}

export default Buttons
