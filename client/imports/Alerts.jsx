import React from 'react'

const Alerts = () => {
  return (
    <div id="alerts" className="section">
      <h2>Alerts</h2>
      <div className="row flex-spaces">
        <div className="alert alert-primary">
          Alert-primary
        </div>
        <div className="alert alert-secondary">
          Alert-secondary
        </div>
        <div className="alert alert-success">
          Alert-success
        </div>
        <div className="alert alert-warning">
          Alert-warning
        </div>
        <div className="alert alert-danger">
          Alert-danger
        </div>
      </div>
      <div className="docs">
        <pre>{"  "}&lt;div class="row flex-spaces"&gt;{"\n"}{"    "}&lt;div class="alert alert-primary"&gt;Alert-primary&lt;/div&gt;{"\n"}{"    "}&lt;div class="alert alert-secondary"&gt;Alert-secondary&lt;/div&gt;{"\n"}{"    "}&lt;div class="alert alert-success"&gt;Alert-success&lt;/div&gt;{"\n"}{"    "}&lt;div class="alert alert-warning"&gt;Alert-warning&lt;/div&gt;{"\n"}{"    "}&lt;div class="alert alert-danger"&gt;Alert-danger&lt;/div&gt;{"\n"}{"  "}&lt;/div&gt;</pre>
      </div>
    </div>
  )
}

export default Alerts
