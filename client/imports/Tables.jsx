import React from 'react'

const Tables = () => {
  return (
    <div id="tables" className="section">
      <h2>Tables</h2>
      <h4>Regular</h4>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Position</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bob Dylan</td>
            <td>Musician</td>
            <td>California, USA</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Eric Clapton</td>
            <td>Musician</td>
            <td>Ohio, USA</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Daniel Kahneman</td>
            <td>Psychologist</td>
            <td>California, USA</td>
          </tr>
        </tbody>
      </table>
      <h4>Hover</h4>
      <table className="table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Position</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bob Dylan</td>
            <td>Musician</td>
            <td>California, USA</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Eric Clapton</td>
            <td>Musician</td>
            <td>Ohio, USA</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Daniel Kahneman</td>
            <td>Psychologist</td>
            <td>California, USA</td>
          </tr>
        </tbody>
      </table>
      <h4>Alternating</h4>
      <table className="table-alternating">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Position</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bob Dylan</td>
            <td>Musician</td>
            <td>California, USA</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Eric Clapton</td>
            <td>Musician</td>
            <td>Ohio, USA</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Daniel Kahneman</td>
            <td>Psychologist</td>
            <td>California, USA</td>
          </tr>
        </tbody>
      </table>
      <div className="docs">
        <pre>&lt;table&gt;{"\n"}{"  "}&lt;thead&gt;{"\n"}{"    "}&lt;tr&gt;{"\n"}{"      "}&lt;th&gt;#&lt;/th&gt;{"\n"}{"      "}&lt;th&gt;Name&lt;/th&gt;{"\n"}{"      "}&lt;th&gt;Position&lt;/th&gt;{"\n"}{"      "}&lt;th&gt;Location&lt;/th&gt;{"\n"}{"    "}&lt;/tr&gt;{"\n"}{"  "}&lt;/thead&gt;{"\n"}{"  "}&lt;tbody&gt;{"\n"}{"    "}&lt;tr&gt;{"\n"}{"      "}&lt;td&gt;1&lt;/td&gt;{"\n"}{"      "}&lt;td&gt;Bob Dylan&lt;/td&gt;{"\n"}{"      "}&lt;td&gt;Musician&lt;/td&gt;{"\n"}{"      "}&lt;td&gt;California, USA&lt;/td&gt;{"\n"}{"    "}&lt;/tr&gt;{"\n"}{"    "}&lt;tr&gt;{"\n"}{"      "}&lt;td&gt;2&lt;/td&gt;{"\n"}{"      "}&lt;td&gt;Eric Clapton&lt;/td&gt;{"\n"}{"      "}&lt;td&gt;Musician&lt;/td&gt;{"\n"}{"      "}&lt;td&gt;Ohio, USA&lt;/td&gt;{"\n"}{"    "}&lt;/tr&gt;{"\n"}{"    "}&lt;tr&gt;{"\n"}{"      "}&lt;td&gt;3&lt;/td&gt;{"\n"}{"      "}&lt;td&gt;Daniel Kahneman&lt;/td&gt;{"\n"}{"      "}&lt;td&gt;Psychologist&lt;/td&gt;{"\n"}{"      "}&lt;td&gt;California, USA&lt;/td&gt;{"\n"}{"    "}&lt;/tr&gt;{"\n"}{"  "}&lt;/tbody&gt;{"\n"}&lt;/table&gt;{"\n"}{"\n"}&lt;!-- Add table-hover or table-alternating to change the style of the table --&gt;{"\n"}&lt;table class="table-hover"&gt;{"\n"}&lt;table class="table-alternating"&gt;</pre>
      </div>
    </div>
  )
}

export default Tables
