import React from 'react'

const Borders = () => {
  return (
    <div id="borders" className="section">
      <h2>Borders &amp; Shadows</h2>
      <h4>Borders</h4>
      <div className="row flex-spaces">
        <div className="sm-3 col border border-primary">Default Border</div>
        <div className="sm-3 col border border-2 border-primary">Border-2</div>
        <div className="sm-3 col border border-3 border-primary">Border-3</div>
      </div>
      <div className="row flex-spaces">
        <div className="sm-3 col border border-4 border-primary">Border-4</div>
        <div className="sm-3 col border border-5 border-primary">Border-5</div>
        <div className="sm-3 col border border-6 border-primary">Border-6</div>
      </div>
      <div className="docs">
        <pre>&lt;div class="row flex-spaces"&gt;{"\n"}{"  "}&lt;div class="sm-3 col border border-primary"&gt;Default Border&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col border border-2 border-primary"&gt;Border-2&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col border border-3 border-primary"&gt;Border-3&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row flex-spaces"&gt;{"\n"}{"  "}&lt;div class="sm-3 col border border-4 border-primary"&gt;Border-4&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col border border-5 border-primary"&gt;Border-5&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col border border-6 border-primary"&gt;Border-6&lt;/div&gt;{"\n"}&lt;/div&gt;</pre>
      </div>
      <h4>Border Colors</h4>
      <div className="row child-borders">
        <div className="sm-2 col border border-primary">Border primary</div>
        <div className="sm-2 col border border-secondary">Border secondary</div>
        <div className="sm-2 col border border-success">Border success</div>
        <div className="sm-2 col border border-warning">Border warning</div>
        <div className="sm-2 col border border-danger">Border danger</div>
        <div className="sm-2 col border background-primary border-white">Border white</div>
      </div>
      <div className="docs">
        <pre>&lt;div class="row child-borders"&gt;{"\n"}{"  "}&lt;div class="sm-2 col border border-primary"&gt;Border primary&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col border border-secondary"&gt;Border secondary&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col border border-success"&gt;Border success&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col border border-warning"&gt;Border warning&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col border border-danger"&gt;Border danger&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col border background-primary border-white"&gt;Border white&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row child-borders"&gt;{"\n"}{"  "}&lt;div class="sm-2 col border border-primary"&gt;Border primary&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col border border-secondary"&gt;Border secondary&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col border border-success"&gt;Border success&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col border border-warning"&gt;Border warning&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col border border-danger"&gt;Border danger&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col border background-primary border-white"&gt;Border white&lt;/div&gt;{"\n"}&lt;/div&gt;</pre>
      </div>
      <h4>Child Borders</h4>
      <p>Use this if you want all children to have a border. This will alternate through the different border styles defined above instead of having to add the border class for each element.</p>
      <div className="row flex-center child-borders">
        <div className="sm-2 col">1</div>
        <div className="sm-2 col">2</div>
        <div className="sm-2 col">3</div>
        <div className="sm-2 col">4</div>
        <div className="sm-2 col">5</div>
        <div className="sm-2 col">6</div>
      </div>
      <div className="docs">
        <pre>&lt;div class="row flex-center child-borders"&gt;{"\n"}{"  "}&lt;div class="sm-2 col"&gt;1&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col"&gt;2&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col"&gt;3&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col"&gt;4&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col"&gt;5&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-2 col"&gt;6&lt;/div&gt;{"\n"}&lt;/div&gt;</pre>
      </div>
      <h4>Border Styles</h4>
      <div className="row flex-spaces child-borders">
        <div className="sm-3 col border-dashed">Dashed</div>
        <div className="sm-3 col border-dotted">Dotted</div>
        <div className="sm-3 col border-dashed border-thick">Dashed Thick</div>
        <div className="sm-3 col border-dotted border-thick">Dotted Thick</div>
      </div>
      <div className="docs">
        <pre>&lt;div class="row flex-spaces child-borders"&gt;{"\n"}{"  "}&lt;div class="sm-3 col border-dashed"&gt;Dashed&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col border-dotted"&gt;Dotted&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col border-dashed border-thick"&gt;Dashed Thick&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col border-dotted border-thick"&gt;Dotted Thick&lt;/div&gt;{"\n"}&lt;/div&gt;</pre>
      </div>
      <h4>Shadows</h4>
      <div className="row flex-spaces child-borders">
        <div className="sm-3 col shadow shadow-large">Large</div>
        <div className="sm-3 col shadow">Default</div>
        <div className="sm-3 col shadow shadow-small">Small</div>
        <div className="sm-3 col shadow shadow-hover">Hover</div>
      </div>
      <div className="docs">
        <pre>&lt;div class="row flex-spaces child-borders"&gt;{"\n"}{"  "}&lt;div class="sm-3 col shadow shadow-large"&gt;Large&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col shadow"&gt;Default&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col shadow shadow-small"&gt;Small&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col shadow shadow-hover"&gt;Hover&lt;/div&gt;{"\n"}&lt;/div&gt;</pre>
      </div>
      <h4>Child Shadows</h4>
      <p>Use this if you want all children to have a shadow.</p>
      <div className="row flex-spaces child-borders child-shadows">
        <div className="sm-3 col">Shadow</div>
        <div className="sm-3 col">Shadow</div>
        <div className="sm-3 col">Shadow</div>
      </div>
      <div className="docs">
        <pre>&lt;div class="row flex-spaces child-borders child-shadows"&gt;{"\n"}{"  "}&lt;div class="sm-3 col"&gt;Shadow&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col"&gt;Shadow&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col"&gt;Shadow&lt;/div&gt;{"\n"}&lt;/div&gt;</pre>
      </div>
      <h4>Child Shadows Hover</h4>
      <p>Use this if you want all children to have a shadow... that changes on hover</p>
      <div className="row flex-spaces child-borders child-shadows-hover">
        <div className="sm-3 col">Shadow</div>
        <div className="sm-3 col">Shadow</div>
        <div className="sm-3 col">Shadow</div>
      </div>
      <div className="docs">
        <pre>&lt;div class="row flex-spaces child-borders child-shadows-hover"&gt;{"\n"}{"  "}&lt;div class="sm-3 col"&gt;Shadow&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col"&gt;Shadow&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col"&gt;Shadow&lt;/div&gt;{"\n"}&lt;/div&gt;</pre>
      </div>
    </div>
  )
}

export default Borders
