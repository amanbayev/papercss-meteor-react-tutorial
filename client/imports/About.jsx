import React from 'react'

const About = () => {
  return (
   <div className="section">
     <h2 id="about">About</h2>
     <p>I got tired of mODerN STylEs and clean pages on the internet. I also wanted to learn more about Flexbox and Less. So I made PaperCSS to solve these two challenges of mine :)</p>
     <p>The goal of PaperCSS is to be as minimal as possible when adding classes. For example, a button should just look like a paper button. There shouldn't be a need to add a class such as <code>paper-button</code>. Because of this, adding PaperCSS to a markdown generated page should instantly paper-ize it.</p>
     <p>While I'm proud of how it's turned out so far, I think there's a lot that can still be done to make it better. Such things as refactoring, adding more utility classes and more border types (like dashed/dotted) could really polish off this framework. That's why it's open sourced and available for pull requests!</p>
     <p>If you are new to Git or Less, this would be a great project to get your feet wet with. I'd be happy to help walk you through the pull request process. Check out the Git repo for more info!</p>
   </div>
  )
}

export default About
