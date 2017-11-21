import React from 'react'

const Flexbox = props => (
  <div id="flexbox" className="section">
        <h2>Flexbox</h2>
        <h4>Flexgrid</h4>
        <p>The flexgrid is a grid system that supports up to 12 columns per row. Because it uses flexbox (rather than just %widths), we also get the benefit of the fun parts of flexbox like alignment in more complex ways than normal.</p>
        <div className="demo">
          <div className="row">
            <div className="col-4 col">col-4 col</div>
            <div className="col-4 col">col-4 col</div>
            <div className="col-4 col">col-4 col</div>
          </div>
          <div className="row">
            <div className="col-3 col">col-3 col</div>
            <div className="col-9 col">col-9 col</div>
          </div>
          <div className="row">
            <div className="sm-6 md-8 lg-10 col">sm-6 md-8 lg-10 col</div>
            <div className="sm-6 md-4 lg-2 col">sm-6 md-4 lg-2 col</div>
          </div>
          <div className="row">
            <div className="sm-5 col">sm-5 col</div>
            <div className="col-fill col">col-fill col</div>
            <div className="col-fill col">col-fill col</div>
          </div>
          <div className="row">
            <div className="sm-4 col">Aligned</div>
            <div className="sm-4 col">Left (default)</div>
          </div>
          <div className="row flex-right">
            <div className="sm-4 col">Aligned</div>
            <div className="sm-4 col">Right (flex-right)</div>
          </div>
          <div className="row flex-center">
            <div className="sm-4 col">Aligned</div>
            <div className="sm-4 col">Center (flex-center)</div>
          </div>
          <div className="row flex-edges">
            <div className="sm-4 col">Aligned</div>
            <div className="sm-4 col">to edges (flex-edges)</div>
          </div>
          <div className="row flex-spaces">
            <div className="sm-4 col">Aligned</div>
            <div className="sm-4 col">to be evenly spaced (flex-spaces)</div>
          </div>
          <div className="row flex-top">
            <div className="sm-4 col">Aligned top</div>
            <div className="sm-4 col">Aligned top</div>
            <div className="sm-4 col">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
            </div>
          </div>
          <div className="row flex-middle">
            <div className="sm-4 col">Aligned middle</div>
            <div className="sm-4 col">Aligned middle</div>
            <div className="sm-4 col">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
            </div>
          </div>
          <div className="row flex-bottom">
            <div className="sm-4 col">Aligned bottom</div>
            <div className="sm-4 col">Aligned bottom</div>
            <div className="sm-4 col">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
            </div>
          </div>
          <div className="row">
            <div className="sm-3 col align-bottom">Align bottom</div>
            <div className="sm-3 col align-middle">Align middle</div>
            <div className="sm-3 col align-top">Align top</div>
            <div className="sm-3 col">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
            </div>
          </div>
        </div>
        <div className="docs">
          <pre>&lt;div class="row"&gt;{"\n"}{"  "}&lt;div class="col-4 col"&gt;col-4 col&lt;/div&gt;{"\n"}{"  "}&lt;div class="col-4 col"&gt;col-4 col&lt;/div&gt;{"\n"}{"  "}&lt;div class="col-4 col"&gt;col-4 col&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row"&gt;{"\n"}{"  "}&lt;div class="col-3 col"&gt;col-3 col&lt;/div&gt;{"\n"}{"  "}&lt;div class="col-9 col"&gt;col-9 col&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row"&gt;{"\n"}{"  "}&lt;div class="sm-6 md-8 lg-10 col"&gt;sm-6 md-8 lg-10 col&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-6 md-4 lg-2 col"&gt;sm-6 md-4 lg-2 col&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row"&gt;{"\n"}{"  "}&lt;div class="sm-5 col"&gt;sm-5 col&lt;/div&gt;{"\n"}{"  "}&lt;div class="col-fill col"&gt;col-fill col&lt;/div&gt;{"\n"}{"  "}&lt;div class="col-fill col"&gt;col-fill col&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row"&gt;{"\n"}{"  "}&lt;div class="sm-4 col"&gt;Aligned&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-4 col"&gt;Left (default)&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row flex-right"&gt;{"\n"}{"  "}&lt;div class="sm-4 col"&gt;Aligned&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-4 col"&gt;Right (flex-right)&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row flex-center"&gt;{"\n"}{"  "}&lt;div class="sm-4 col"&gt;Aligned&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-4 col"&gt;Right (flex-right)&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row flex-edges"&gt;{"\n"}{"  "}&lt;div class="sm-4 col"&gt;Aligned&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-4 col"&gt;to edges (flex-edges)&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row flex-spaces"&gt;{"\n"}{"  "}&lt;div class="sm-4 col"&gt;Aligned&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-4 col"&gt;to be evenly spaced (flex-spaces)&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row flex-top"&gt;{"\n"}{"  "}&lt;div class="sm-6 col"&gt;Aligned top&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-6 col"&gt;{"\n"}{"    "}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.{"\n"}{"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row flex-middle"&gt;{"\n"}{"  "}&lt;div class="sm-6 col"&gt;Aligned middle&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-6 col"&gt;{"\n"}{"    "}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.{"\n"}{"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row flex-bottom"&gt;{"\n"}{"  "}&lt;div class="sm-6 col"&gt;Aligned bottom&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-6 col"&gt;{"\n"}{"    "}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.{"\n"}{"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row"&gt;{"\n"}{"  "}&lt;div class="sm-3 col align-bottom"&gt;Align bottom&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col align-middle"&gt;Align middle&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col align-top"&gt;Align top&lt;/div&gt;{"\n"}{"  "}&lt;div class="sm-3 col"&gt;{"\n"}{"    "}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.{"\n"}{"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}</pre>
        </div>
      </div>
)

export default Flexbox
