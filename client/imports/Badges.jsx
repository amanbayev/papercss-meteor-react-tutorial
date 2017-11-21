import React from 'react'

const Badges = () => {
  return (
    <div className="section">
      <h2>Badges</h2>
      <h4>Default</h4>
      <p>You can customize badges colors with secondary, success, warning, danger classes.</p>
      <h1>Example h1 heading <span className="badge">123</span></h1>
      <h2>Example h2 heading <span className="badge secondary">123</span></h2>
      <h3>Example h3 heading <span className="badge success">123</span></h3>
      <h4>Example h4 heading <span className="badge warning">123</span></h4>
      <h5>Example h5 heading <span className="badge danger">123</span></h5>
      <h6>Example h6 heading <span className="badge">123</span></h6>
      <div className="docs">
        <pre>&lt;h1&gt;Example h1 heading &lt;span class="badge"&gt;123&lt;/span&gt;&lt;/h1&gt;{"\n"}&lt;h2&gt;Example h2 heading &lt;span class="badge secondary"&gt;123&lt;/span&gt;&lt;/h2&gt;{"\n"}&lt;h3&gt;Example h3 heading &lt;span class="badge success"&gt;123&lt;/span&gt;&lt;/h3&gt;{"\n"}&lt;h4&gt;Example h4 heading &lt;span class="badge warning"&gt;123&lt;/span&gt;&lt;/h4&gt;{"\n"}&lt;h5&gt;Example h5 heading &lt;span class="badge danger"&gt;123&lt;/span&gt;&lt;/h5&gt;{"\n"}&lt;h6&gt;Example h6 heading &lt;span class="badge"&gt;123&lt;/span&gt;&lt;/h6&gt;</pre>
      </div>
    </div>
  )
}

export default Badges
