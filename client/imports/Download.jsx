import React from 'react'

const Download = () => {
  return (
    <div className="section">
      <h2 id="download">Download and Link</h2>
      <h4>Download</h4>
      <p>Download the latest version (1.1.0) using either of the links below. Or download an older release via Github.</p>
      <div className="row flex-spaces text-center">
        <a className="paper-btn margin" href="https://github.com/rhyneav/papercss/releases/download/v1.1.0/paper.css">CSS File</a>
        <a className="paper-btn margin" href="https://github.com/rhyneav/papercss/releases/download/v1.1.0/paper.min.css">Minified CSS File</a>
        <a className="paper-btn margin" href="https://github.com/rhyneav/papercss/releases">Github Releases</a>
      </div>
      <h4>NPM</h4>
      <p>PaperCSS is now available on NPM as of version 1.1.0. Install with <code>npm install papercss --save</code> and find the CSS in:</p>
      <ul>
        <li>node_modules/papercss/dist/paper.css</li>
        <li>node_modules/papercss/dist/paper.min.css</li>
      </ul>
      <h4>CDN</h4>
      <p>Don't want to download it? That's cool. You can just link to PaperCSS via <a href="https://unpkg.com/#/">unpkg's CDN</a>. You can use either:</p>
      <ul>
        <li><a href="https://unpkg.com/papercss@1.1.0/dist/paper.css">https://unpkg.com/papercss@1.1.0/dist/paper.css</a></li>
        <li><a href="https://unpkg.com/papercss@1.1.0/dist/paper.min.css">https://unpkg.com/papercss@1.1.0/dist/paper.min.css</a></li>
      </ul>
      <p>Here's a quck snippet to get started with PaperCSS:</p>
      <div className="docs">
        <pre>&lt;!DOCTYPE html&gt;{"\n"}&lt;html lang="en"&gt;{"\n"}&lt;head&gt;{"\n"}{"  "}&lt;meta charset="UTF-8"&gt;{"\n"}{"  "}&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;{"\n"}{"  "}&lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;{"\n"}{"  "}&lt;link rel="stylesheet" href="https://unpkg.com/papercss@1.1.0/dist/paper.min.css"&gt;{"\n"}{"  "}&lt;title&gt;Document&lt;/title&gt;{"\n"}&lt;/head&gt;{"\n"}&lt;body&gt;{"\n"}{"  "}&lt;div class="paper container"&gt;{"\n"}{"    "}&lt;h1&gt;Some Fresh Title&lt;/h1&gt;{"\n"}{"    "}&lt;p&gt;This is where some content would go.&lt;/p&gt;{"\n"}{"  "}&lt;/div&gt;{"\n"}&lt;/body&gt;{"\n"}&lt;/html&gt;</pre>
      </div>
      <h4>Build it Yourself</h4>
      <p>If you'd rather customize things, you can build the CSS yourself via the git repo</p>
      <ol>
        <li><code>git clone [repo url]</code></li>
        <li><code>npm install</code></li>
        <li><code>npm run build</code></li>
        <li>Grab the CSS out of the /dist folder created</li>
      </ol>
      <p>You can also go into src/colors.less before building to change around the colors of your new CSS.</p>
    </div>
  )
}

export default Download
