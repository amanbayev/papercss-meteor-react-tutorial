import React from 'react'

const Colors = () => {
  return (
    <div id="colors" className="section">
      <h2>Colors</h2>
      <h4>Text</h4>
      <p className="text-primary">Text primary</p>
      <p className="text-secondary">Text secondary</p>
      <p className="text-success">Text success</p>
      <p className="text-warning">Text warning</p>
      <p className="text-danger">Text danger</p>
      <p className="text-muted">Text muted</p>
      <div className="docs">
        <pre>&lt;p class="text-primary"&gt;Text primary&lt;/p&gt;{"\n"}&lt;p class="text-secondary"&gt;Text secondary&lt;/p&gt;{"\n"}&lt;p class="text-success"&gt;Text success&lt;/p&gt;{"\n"}&lt;p class="text-warning"&gt;Text warning&lt;/p&gt;{"\n"}&lt;p class="text-danger"&gt;Text danger&lt;/p&gt;{"\n"}&lt;p class="text-muted"&gt;Text muted&lt;/p&gt; </pre>
      </div>
      <h4>Backgrounds</h4>
      <div className="row flex-center">
        <div className="sm-2 col background-primary">Background primary</div>
        <div className="sm-2 col background-secondary">Background secondary</div>
        <div className="sm-2 col background-success">Background success</div>
        <div className="sm-2 col background-warning">Background warning</div>
        <div className="sm-2 col background-danger">Background danger</div>
      </div>
      <div className="docs">
        <pre>&lt;div class="row flex-center"&gt;{"\n"}{"  "}&lt;div class="sm-2 col background-primary"&gt;Background primary&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col background-secondary"&gt;Background secondary&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col background-success"&gt;Background success&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col background-warning"&gt;Background warning&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col background-danger"&gt;Background danger&lt;/div&gt;{"\n"}&lt;/div&gt;</pre>
      </div>
    </div>
  )
}

export default Colors
