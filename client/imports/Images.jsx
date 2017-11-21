import React from 'react'

const Images = () => {
  return (
    <div id="images" className="section">
      <h2>Images</h2>
      <h4>Responsive</h4>
      <p>Images by default are responsive</p>
      <img src="https://unsplash.it/900" alt="Random Unsplash" />
      <div className="docs">
        <pre>&lt;img src="https://unsplash.it/900" alt="Random Unsplash"&gt;</pre>
      </div>
      <h4>Float</h4>
      <p>You can also float responsive images to fit neatly with your text</p>
      <p>
        <img src="https://unsplash.it/200" alt="Smaller Unsplash" className="float-left" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non elit sed lorem vulputate consectetur sed vel orci. Nunc orci metus, hendrerit viverra diam a, viverra efficitur nisi. Suspendisse ante sapien, porta vitae augue et, pulvinar posuere nibh. Suspendisse id commodo sem, vestibulum malesuada erat. Duis luctus est sit amet nisl maximus porta. Curabitur tempor nisi tincidunt ultricies rutrum. Nam finibus turpis ut nibh dignissim, in tincidunt mauris suscipit. Curabitur sollicitudin mi quis orci semper, nec egestas nibh mollis. Aenean pellentesque lectus rutrum, ultrices felis malesuada, finibus purus.
        Morbi eleifend pellentesque justo, quis vestibulum mi. Donec porta ipsum tellus, ac scelerisque lectus pellentesque eget. Etiam quis rutrum dui. Nulla facilisi. Donec imperdiet mattis mi nec fringilla. Donec mollis augue sed viverra placerat. Donec varius, sem sed porttitor euismod, est nunc varius tellus, eget molestie urna arcu ac turpis. Phasellus id sem elit. Vivamus pellentesque mauris vel ex laoreet varius. Vivamus non tempor libero. Nam consectetur nisi erat, ac varius elit porttitor quis. Morbi ullamcorper, tortor in sagittis tempus, justo ipsum pretium urna, ut bibendum nisl orci et eros. Quisque ut ipsum neque. Integer sapien dolor, vestibulum id maximus ac, pharetra eu augue.
        <img src="https://unsplash.it/100" alt="Smallerer Unsplash" className="float-right" />
        Aenean mauris tellus, facilisis sed quam non, tincidunt rutrum risus. Fusce quam urna, commodo vitae nunc condimentum, efficitur commodo libero. Sed dignissim odio enim, ac pharetra dui laoreet id. Suspendisse nec accumsan erat. Integer sit amet leo arcu. Proin sagittis blandit tempor. Vivamus at egestas lectus. Mauris eros tellus, egestas ac neque eget, lacinia sagittis ante. Phasellus faucibus suscipit erat, eget malesuada neque congue non.
      </p>
      <div className="docs">
        <pre>&lt;p&gt;{"\n"}{"  "}&lt;img src="https://unsplash.it/200" class="float-left"&gt;{"\n"}{"  "}Lorem ipsum dolor.......{"\n"}{"  "}&lt;img src="https://unsplash.it/100" class="float-right"&gt;{"\n"}{"  "}Aenean mauris tellus......{"\n"}&lt;/p&gt;</pre>
      </div>
      <h4>No Responsive &amp; No Borders</h4>
      <p>If you don't like the default, you can just add the class <code>no-responsive</code> to prevent the image from being responsive. You can also remove the default border with <code>no-border</code>.</p>
      <img src="https://unsplash.it/300" alt="Not responsive Unsplash" className="no-responsive no-border" />
      <div className="docs">
        <pre>&lt;img src="https://unsplash.it/300" class="no-responsive no-border"&gt;</pre>
      </div>
    </div>
  )
}

export default Images
