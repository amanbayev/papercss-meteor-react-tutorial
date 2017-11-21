import React from 'react'

const Lists = () => {
  return (
    <div id="lists" className="section">
      <h2>Lists</h2>
      <h4>Ordered Lists</h4>
      <ol>
        <li>Do this</li>
        <li>Then this</li>
        <li>Finally this</li>
        <li>Then we'll go one deeper</li>
        <ol>
          <li>Dillon</li>
          <li>Francis</li>
          <ol>
            <li>What if we went...</li>
            <li>One more deeper?</li>
            <ol>
              <li>DJ</li>
              <li>Hanzel</li>
              <ol>
                <li>Five levels should be enough</li>
                <li>Right?</li>
              </ol>
            </ol>
          </ol>
        </ol>
        <li>But don't forget this</li>
      </ol>
      <h4>Unordered Lists</h4>
      <ul>
        <li>Let's try this</li>
        <li>Let's try this again</li>
        <ul>
          <li>And now we are nested</li>
          <li>Pretty cool?</li>
          <ul>
            <li>The list items are just text</li>
            <li>From this font</li>
            <ul>
              <li>We'll keep going</li>
              <li>Until we hit</li>
              <ul>
                <li>LEVEL 5</li>
              </ul>
            </ul>
          </ul>
        </ul>
        <li>And now we're are the top!</li>
      </ul>
      <div className="docs">
        <pre>&lt;ol&gt;{"\n"}{"  "}&lt;li&gt;Do this&lt;/li&gt;{"\n"}{"  "}&lt;li&gt;Then this&lt;/li&gt;{"\n"}{"  "}&lt;li&gt;Finally this&lt;/li&gt;{"\n"}{"  "}&lt;li&gt;Then we'll go one deeper&lt;/li&gt;{"\n"}{"  "}&lt;ol&gt;{"\n"}{"      "}&lt;li&gt;Dillon&lt;/li&gt;{"\n"}{"      "}&lt;li&gt;Francis&lt;/li&gt;{"\n"}{"      "}&lt;ol&gt;{"\n"}{"        "}&lt;li&gt;What if we went...&lt;/li&gt;{"\n"}{"        "}&lt;li&gt;One more deeper?&lt;/li&gt;{"\n"}{"        "}&lt;ol&gt;{"\n"}{"          "}&lt;li&gt;DJ&lt;/li&gt;{"\n"}{"          "}&lt;li&gt;Hanzel&lt;/li&gt;{"\n"}{"          "}&lt;ol&gt;{"\n"}{"            "}&lt;li&gt;Five levels should be enough&lt;/li&gt;{"\n"}{"            "}&lt;li&gt;Right?&lt;/li&gt;{"\n"}{"          "}&lt;/ol&gt;{"\n"}{"        "}&lt;/ol&gt;{"\n"}{"      "}&lt;/ol&gt;{"\n"}{"  "}&lt;/ol&gt;{"\n"}{"  "}&lt;li&gt;But don't forget this&lt;/li&gt;{"\n"}&lt;/ol&gt;{"\n"}{"\n"}&lt;!-- Replace ol with ul for unordered lists. Go up to 5 levels deep! --&gt;</pre>
      </div>
    </div>
  )
}

export default Lists
