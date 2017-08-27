import React, { Component } from 'react'
import fbpic from "./Example-Facebook-Photo.jpg"

class TechDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

    <div className="wrapper">
      <section className="step">
        <div className="picture-box">
          <img src={fbpic} alt="" />
          </div>
        <div className="content-box">
          <h2>AI Powered Recommendations</h2>
          <h3>Using Computer Vision and Natural Language Processing</h3>
          <h4>Identified Items:</h4>
          <ol>
            <li>Mountains</li>
            <li>Water</li>
            <li>Hiking Boots</li>
            <li>Trees</li>
          </ol>
          <h4>Related Markers:</h4>
          <ol>
            <li>Sports: Climbing</li>
            <li>Sports: Canoeing and Kayaking</li>
            <li>Hiking Boots</li>
            <li>Trees</li>
          </ol>
          <h4>Recommended Excursions:</h4>
          <ol>
            <li>Excursion One</li>
            <li>Excursion Two</li>
            <li>Excursion Three</li>
            <li>Excursion Four</li>
          </ol>
        </div>
      </section>
      <section className="step">
        <div className="content-box">
          <p>This project was created as part of the 2017 Hospitality Hackathon on the weekend of August 27th, 2017. Our team of five people attempted to create a recommendation engine that could be used by cruise ship companies to improve the quality of the excursions that are presented to customers. This website is a limited demonstration of the core recommendation engine that was created during our three day build time.</p>
        </div>
      </section>
      <section className="step">
        <div className="content-box">
          <h2>Preface</h2>
          <h3>The Problem</h3>
          <div className="picture-box">
            <iframe src="https://giphy.com/embed/CdY6WueirK8Te" width="480" height="211" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/CdY6WueirK8Te"></a>

          </div>
          <p>While doing research at the beginning of the challenge, we found information suggesting that cruise ship profits were heavily impacted by cruise ship excursions. We felt like this was a high impact area that could be improved on using modern technology and a challenging problem to solve that we might be able to conquer in a weekend through creative solutions.
</p>
<h3>A Solution - AI Driven Recommendations</h3>
<div className="picture-box">
  <iframe src="https://giphy.com/embed/kPxPY02zEIuGs" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/jump-cliff-cartwheel-kPxPY02zEIuGs"></a>
</div>
<p>Machine learning is a rapidly advancing field that is creating waves in a number of fields. We’ve had some experience in applying modern machine learning tools and techniques to other areas and thought that there might be a few novel and interesting approaches to apply to excursion recommendations. By collecting as little information as possible from a user through channels that businesses might be able to use we felt that we could build an easy to implement system with little changes to existing ways that cruise lines interact with customers while having a big impact on passenger user experience and profits.</p>
<h3>Now We Have Two Problems And Huge Risk</h3>
<div className="picture-box">
  <img src="https://s-media-cache-ak0.pinimg.com/originals/a1/a2/65/a1a26563aacb4d52a7082c2b8c222d30.jpg" alt="" />
</div>
<ul>
  <li>Phase 1: Build Model</li>
<li>Phase 2: ???</li>
<li>Phase 3: Profit</li>
</ul>
<p>Machine learning can take more than a weekend to implement. Also, most techniques require an abundance of clean and focused data. We had neither of those things, creating an objective risk of ending up nearly empty handed at the end of the competition.
</p>
<h3>...Which is Nothing That Lack of Sleep Can’t Fix</h3>
<p>In the spirit of the hackathon we cast off our doubts and committed to the highest risk and highest reward solution without a clear path to a solution ahead. We took a few wild ideas and ran with them and what we ended up creating surpassed our wildest ambitions.</p>
        </div>
      </section>
      <section className="step">
        <div className="content-box">
          <h2>Our Solution</h2>
          <h3>Effortless AI Driven Excursion Recommendations</h3>
          <div className="picture-box">
            <iframe src="https://giphy.com/embed/CdY6WueirK8Te" width="480" height="211" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/CdY6WueirK8Te"></a>
          </div>
          <p>One problem we had was making the recommendations as seamless as possible. We didn’t want cruise passengers to have to fill out a form or provide any new information. We wanted to use existing data about cruise ship passengers and find interesting and unexpected relationships between profiles about cruise ship passengers and excursions they would prefer.
</p>
<h3>Our Architecture</h3>
<p>The solution we settled on and built collected basic information through facebook and and used computer vision and natural language processing to expand that to a structured set of topics that represented items that were found in the text and image data. From those topics we then applied even more natural language processing to derive a set of categories that were matched against and used to train up a set of multinomial logistic regression models (a machine learning model that identifies patterns in data). This model was then deployed to amazon and used to power real-time predictions based on new users that started using the system.</p>
<h3>Excursion Data</h3>
<p>We acquired excursion data by spidering several sources of cruise ship data online. This data was used to power to recommendations as well as help users in the survey application select responses.</p>
<h3>Training Data for Four Machine Learning Models</h3>
<p>One of the very large problems we had was accumulating enough meaningful training data to make the machine learning model have any impact. Through the course of the competition we were able to collect hundreds of points of training data through a few creative means. We surveyed hundred of english speaking users from all over the world, ran our computer vision and natural language processing on their profile photo and social media data, and collected their preferences for cruise ship excursions. We used all of that data to build several iterations on four models across four dimensions of data that ultimately were used to compose the core part of our machine learning algorithm.</p>
<h3>Technology Stack & External APIs and Tools</h3>
<ul>
  <li>React</li>
  <li>Ruby on Rails</li>
  <li>Amazon Machine Learning</li>
  <li>Google Cloud Vision</li>
  <li>IBM Natural Language Understanding</li>
</ul>
        </div>
      </section>
    </div>
    )
  }
}

export default TechDetails
