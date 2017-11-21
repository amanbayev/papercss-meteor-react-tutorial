import React from 'react'

const Forms = () => {
  return (
    <div id="forms" className="section">
      <h2>Forms</h2>
      <div className="form-group">
        <label>Input</label>
        <input type="text" placeholder="Nice input" />
      </div>
      <div className="row">
        <div className="col sm-4">
          <div className="form-group">
            <label>Block Level</label>
            <input className="input-block" type="text" />
          </div>
        </div>
        <div className="col sm-8">
          <div className="form-group">
            <label>Block Level</label>
            <input className="input-block" type="text" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>Disabled</label>
        <input type="text" placeholder="Disabled" disabled />
      </div>
      <div className="form-group">
        <label>Select</label>
        <select>
          <option value={1}>Option 1</option>
          <option value={2}>Option 2</option>
          <option value={3}>Option 3</option>
        </select>
      </div>
      <fieldset className="form-group">
        <legend>Some Radio Buttons</legend>
        <label htmlFor="paperRadios1" className="paper-radio">
          <input type="radio" name="paperRadios" id="paperRadios1" defaultValue="option 1" /> <span>This is the first option<span>
            </span></span></label>
        <label htmlFor="paperRadios2" className="paper-radio">
          <input type="radio" name="paperRadios" id="paperRadios2" defaultValue="option 2" /> <span>This is the second option<span>
            </span></span></label>
      </fieldset>
      <fieldset className="form-group">
        <legend>Some Check Boxes</legend>
        <label htmlFor="paperChecks1" className="paper-check">
          <input type="checkbox" name="paperChecks" id="paperChecks1" defaultValue="option 1" /> <span>This is the first check</span>
        </label>
        <label htmlFor="paperChecks2" className="paper-check">
          <input type="checkbox" name="paperChecks" id="paperChecks2" defaultValue="option 2" /> <span>This is the second check</span>
        </label>
      </fieldset>
      <div className="docs">
        <pre>&lt;div class="form-group"&gt;{"\n"}{"  "}&lt;label&gt;Input&lt;/label&gt;{"\n"}{"  "}&lt;input type="text" placeholder="Nice input"&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="row"&gt;{"\n"}{"  "}&lt;div class="col sm-4"&gt;{"\n"}{"    "}&lt;div class="form-group"&gt;{"\n"}{"      "}&lt;label&gt;Block Level&lt;/label&gt;{"\n"}{"      "}&lt;input class="input-block" type="text"&gt;{"\n"}{"    "}&lt;/div&gt;{"\n"}{"  "}&lt;/div&gt;{"\n"}{"  "}&lt;div class="col sm-8"&gt;{"\n"}{"    "}&lt;div class="form-group"&gt;{"\n"}{"      "}&lt;label&gt;Block Level&lt;/label&gt;{"\n"}{"      "}&lt;input class="input-block" type="text"&gt;{"\n"}{"    "}&lt;/div&gt;{"\n"}{"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="form-group"&gt;{"\n"}{"  "}&lt;label&gt;Disabled&lt;/label&gt;{"\n"}{"  "}&lt;input type="text" placeholder="Disabled" disabled&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;div class="form-group"&gt;{"\n"}{"  "}&lt;label&gt;Select&lt;/label&gt;{"\n"}{"  "}&lt;select&gt;{"\n"}{"    "}&lt;option value="1"&gt;Option 1&lt;/option&gt;{"\n"}{"    "}&lt;option value="2"&gt;Option 2&lt;/option&gt;{"\n"}{"    "}&lt;option value="3"&gt;Option 3&lt;/option&gt;{"\n"}{"  "}&lt;select&gt;{"\n"}&lt;/div&gt;{"\n"}&lt;fieldset class="form-group"&gt;{"\n"}{"  "}&lt;legend&gt;Some Radio Buttons&lt;/legend&gt;{"\n"}{"  "}&lt;label for="paperRadios1" class="paper-radio"&gt;{"\n"}{"    "}&lt;input type="radio" name="paperRadios" id="paperRadios1" value="option 1"&gt; &lt;span&gt;This is the first option&lt;span&gt;{"\n"}{"  "}&lt;/label&gt;{"\n"}{"  "}&lt;label for="paperRadios2" class="paper-radio"&gt;{"\n"}{"    "}&lt;input type="radio" name="paperRadios" id="paperRadios2" value="option 2"&gt; &lt;span&gt;This is the second option&lt;span&gt;{"\n"}{"  "}&lt;/label&gt;{"\n"}&lt;/fieldset&gt;{"\n"}&lt;fieldset class="form-group"&gt;{"\n"}{"  "}&lt;legend&gt;Some Check Boxes&lt;/legend&gt;{"\n"}{"  "}&lt;label for="paperChecks1" class="paper-check"&gt;{"\n"}{"    "}&lt;input type="checkbox" name="paperChecks" id="paperChecks1" value="option 1"&gt; &lt;span&gt;This is the first check&lt;/span&gt;{"\n"}{"  "}&lt;/label&gt;{"\n"}{"  "}&lt;label for="paperChecks2" class="paper-check"&gt;{"\n"}{"    "}&lt;input type="checkbox" name="paperChecks" id="paperChecks2" value="option 2"&gt; &lt;span&gt;This is the second check&lt;/span&gt;{"\n"}{"  "}&lt;/label&gt;{"\n"}&lt;/fieldset&gt;{"\n"}</pre>
      </div>
    </div>
  )
}

export default Forms
