import React from 'react'

const Utilities = () => {
  return (
    <div id="utilities" className="section">
      <h2>Utilities</h2>
      <h4>Margin</h4>
      <div className="row flex-spaces child-borders">
        <div className="sm-3 col margin">Margin</div>
        <div className="sm-3 col margin-large">Margin-large</div>
        <div className="sm-3 col margin-top-small">Margin-top-small</div>
      </div>
      <div className="docs">
        <pre>&lt;div class="row flex-spaces child-borders"&gt;{"\n"}{"  "}&lt;div class="sm-3 col margin"&gt;Margin&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col margin-large"&gt;Margin-large&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col margin-top-small"&gt;Margin-top-small&lt;/div&gt;{"\n"}&lt;/div&gt;</pre>
      </div>
      <h4>Padding</h4>
      <div className="row flex-spaces child-borders">
        <div className="sm-3 col padding-small">Padding-small</div>
        <div className="sm-3 col padding-none">Padding-none</div>
        <div className="sm-3 col padding-left-large">Padding-left-large</div>
      </div>
      <div className="docs">
        <pre>&lt;div class="row flex-spaces child-borders"&gt;{"\n"}{"  "}&lt;div class="sm-3 col padding-small"&gt;Padding-small&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col padding-none"&gt;Padding-none&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col padding-left-large"&gt;Padding-left-large&lt;/div&gt;{"\n"}&lt;/div&gt;</pre>
      </div>
    </div>
  )
}

export default Utilities
