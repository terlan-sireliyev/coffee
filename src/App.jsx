import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import beans from "./img/beans.png";
import cup from "./img/cup.jfif";
import process from "./img/process.png";
import ground from "./img/ground.png";
import arrow from "./img/arrow.png";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
  <section className="section"
  >
  <Navbar/>
  <div className='experience'>
    <h1>Experience the Finest<br></br> Artisanal Coffee Roasting</h1>
    <p>"Indulge in the Perfect Cup of Perfection"</p>
    <button><a>SHOP NOW</a></button>
  </div>
  </section>
<div className='description'>
  <div className='white'>
    <p>Non-Volatile Environment Temperatures in Nordic Coffee Roasting Style</p>
  <div className='cups'></div>
  </div>
  <div className='black'>
    <p>Our commitment to excellence begins with the selection of the most extraordinary coffee beans from exclusive plantations around the globe.</p>
  </div>
</div>
<div className='process'>
<div className='first'>
  <h2>Process</h2>
<div className="container">
  <div className="row">
    <div className="col-lg-12">
      <h3 className="text-center"></h3>
 
      <ul className="timeline">
        <li>
          <div className="timeline-image">
            <img className="img-circle img-responsive" src={beans} alt=""/>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>Step One</h4>
              <h4 className="subheading">Subtitle</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
              </p>
            </div>
          </div>
          <div className="line">
          <img src={arrow} alt=""/>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <img className="img-circle img-responsive" src={process} alt=""/>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>Step Two</h4>
              <h4 className="subheading">Subtitle</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
              </p>
            </div>
          </div>
          <div className="line">
          <img src={arrow} alt=""/>
          </div>
        </li>
        <li>
          <div className="timeline-image">
            <img className="img-circle img-responsive" src={ground} alt=""/>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>Step Three</h4>
              <h4 className="subheading">Subtitle</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
              </p>
            </div>
          </div>
          <div className="line">
          <img src={arrow} alt=""/>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <img className="img-circle img-responsive" src={cup} alt=""/>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>Step Three</h4>
              <h4 className="subheading">Subtitle</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>
</div>
<div  className='coffee'>
  <p>Invites you to embark on a captivating journey of luxury and sophistication. Elevate your coffee experience to new heights and immerse yourself in the art of extraordinary roasting. Explore our distinguished collection and allow us to awaken your senses to the true essence of coffee excellence. Unleash your passion for exceptional coffee and discover a realm of unmatched refinement that will forever redefine your coffee ritual.</p>
</div>
<div className='popular'>
  <h2>OUR POPULAR PRODUCTS</h2>
  <div className='products'>
  <div className='product'>
  TESTY COFFEE STIMY
  </div>
  <div className='product'>
  AMERICANO PURE GRADES
  </div>
  <div className='product'>
  INDIAN ROASTING
  </div>
  <div className='product'>
  BANGLADESHI ORGANIC
  </div>
  <div className='product'>
  ARVICA COFFEE PACK
  </div>
  </div>
</div>
</div>
  )
}

export default App
