import React from 'react'

const Cards = () => {
  return (
    <div id="cards" className="section">
      <h2>Cards</h2>
      <h4>Full card example</h4>
      <p>It is possible to not put all the sub-classes like card-title, card-subtitle, card-text, ... But instead the framework will recognize the element properly if it's a h4, h5, p, ... And you need to put all this content on a div with card class.</p>
      <div className="row flex-center">
        <div className="card" style={{width: '20rem'}}>
          <img className="image-top" src="https://picsum.photos/768" alt="Card example image" />
          <div className="card-body">
            <h4 className="card-title">My awesome Paper card!</h4>
            <h5 className="card-subtitle">Nice looking subtitle.</h5>
            <p className="card-text">Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.</p>
            <button>Let me go here!</button>
          </div>
        </div>
      </div>
      <div className="docs">
        <pre>&lt;div class="card" style="width: 20rem;"&gt;{"\n"}{"  "}&lt;img src="https://picsum.photos/768" alt="Card example image"&gt;{"\n"}{"\n"}{"  "}&lt;div class="card-body"&gt;{"\n"}{"    "}&lt;h4 class="card-title"&gt;My awesome Paper card!&lt;/h4&gt;{"\n"}{"    "}&lt;h5 class="card-subtitle"&gt;Nice looking subtitle.&lt;/h5&gt;{"\n"}{"    "}&lt;p class="card-text"&gt;Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.&lt;/p&gt;{"\n"}{"    "}&lt;button&gt;Let me go here!&lt;/button&gt;{"\n"}{"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;</pre>
      </div>
      <h4>Card title, text, links</h4>
      <div className="row flex-center">
        <div className="card" style={{width: '20rem'}}>
          <div className="card-body">
            <h4 className="card-title">My awesome Paper card!</h4>
            <h5 className="card-subtitle">Nice looking subtitle.</h5>
            <p className="card-text">This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.</p>
            <a className="card-link" href="#">First link</a>
            <a className="card-link" href="#">Second link</a>
          </div>
        </div>
      </div>
      <div className="docs">
        <pre>&lt;div class="card" style="width: 20rem;"&gt;{"\n"}{"  "}&lt;div class="card-body"&gt;{"\n"}{"    "}&lt;h4 class="card-title"&gt;My awesome Paper card!&lt;/h4&gt;{"\n"}{"    "}&lt;h5 class="card-subtitle"&gt;Nice looking subtitle.&lt;/h5&gt;{"\n"}{"    "}&lt;p class="card-text"&gt;This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.&lt;/p&gt;{"\n"}{"    "}&lt;a class="card-link" href="#"&gt;First link&lt;/a&gt;{"\n"}{"    "}&lt;a class="card-link" href="#"&gt;Second link&lt;/a&gt;{"\n"}{"  "}&lt;/div&gt;{"\n"}&lt;/div&gt;</pre>
      </div>
      <h4>Image on top or bottom</h4>
      <div className="row flex-center">
        <div className="card" style={{width: '20rem'}}>
          <div className="card-body">
            <h4 className="card-title">My awesome Paper card!</h4>
            <h5 className="card-subtitle">Nice looking subtitle.</h5>
            <p className="card-text">You can also place image on the bottom of the card.</p>
            <button>Let me go here!</button>
          </div>
          <img className="image-bottom" src="https://unsplash.it/550/250" alt="Card example image" />
        </div>
      </div>
      <div className="docs">
        <pre>&lt;div class="card" style="width: 20rem;"&gt;{"\n"}{"  "}&lt;div class="card-body"&gt;{"\n"}{"    "}&lt;h4 class="card-title"&gt;My awesome Paper card!&lt;/h4&gt;{"\n"}{"    "}&lt;h5 class="card-subtitle"&gt;Nice looking subtitle.&lt;/h5&gt;{"\n"}{"    "}&lt;p class="card-text"&gt;You can also place image on the bottom of the card.&lt;/p&gt;{"\n"}{"    "}&lt;button&gt;Let me go here!&lt;/button&gt;{"\n"}{"  "}&lt;/div&gt;{"\n"}{"  "}&lt;img class="image-bottom" src="https://unsplash.it/550/250" alt="Card example image"&gt;{"\n"}&lt;/div&gt;</pre>
      </div>
      <h4>Header and footer</h4>
      <div className="row flex-center">
        <div className="card" style={{width: '20rem'}}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">My awesome Paper card!</h4>
            <h5 className="card-subtitle">Nice looking subtitle.</h5>
            <p className="card-text">You can also place image on the bottom of the card.</p>
            <button>Let me go here!</button>
          </div>
          <div className="card-footer">Footer</div>
        </div>
      </div>
      <div className="docs">
        <pre>&lt;div class="card" style="width: 20rem;"&gt;{"\n"}{"  "}&lt;div class="card-header"&gt;Header&lt;/div&gt;{"\n"}{"    "}&lt;div class="card-body"&gt;{"\n"}{"      "}&lt;h4 class="card-title"&gt;My awesome Paper card!&lt;/h4&gt;{"\n"}{"      "}&lt;h5 class="card-subtitle"&gt;Nice looking subtitle.&lt;/h5&gt;{"\n"}{"      "}&lt;p class="card-text"&gt;You can also place image on the bottom of the card.&lt;/p&gt;{"\n"}{"      "}&lt;button&gt;Let me go here!&lt;/button&gt;{"\n"}{"    "}&lt;/div&gt;{"\n"}{"  "}&lt;div class="card-footer"&gt;Footer&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}</pre>
      </div>
    </div>
  )
}

export default Cards
