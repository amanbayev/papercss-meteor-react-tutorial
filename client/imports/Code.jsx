import React from 'react'

const Code = () => {
  return (
    <div id="code" className="section">
      <h2>Code</h2>
      <p>Let's make some pretty <code>&lt;code&gt;</code></p>
      <p>Print files backwards using <kbd>tac</kbd></p>
      <p>To stop a process, hit <kbd>ctrl + c</kbd></p>
      <pre>function add(x, y) {"{"}{"\n"}{"  "}return x + y;{"\n"}{"}"}{"     "}</pre>
      <div className="docs">
        <pre>&lt;p&gt;Let's make some pretty &lt;code&gt;&amp;lt;code&amp;gt;&lt;/code&gt;&lt;/p&gt;{"\n"}&lt;p&gt;Print files backwards using &lt;kbd&gt;tac&lt;/kbd&gt;&lt;/p&gt;{"\n"}&lt;p&gt;To stop a process, hit &lt;kbd&gt;ctrl + c&lt;/kbd&gt;&lt;/p&gt;{"\n"}&lt;pre&gt;{"\n"}{"  "}function add(x, y) {"{"}{"\n"}{"    "}return x + y;{"\n"}{"  "}{"}"}{"\n"}&lt;/pre&gt;</pre>
      </div>
    </div>
  )
}

export default Code
