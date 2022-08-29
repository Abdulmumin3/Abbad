import React from 'react'
import badges from '../components/Assets/badges.png'
import pic1 from '../components/Assets/pic1.png'
import './Home.css'
import pic2 from '../components/Assets/pic2.png'
import pic3 from '../components/Assets/pic3.png'
import pic4 from '../components/Assets/pic4.png'
import pic5 from '../components/Assets/pic5.png'
import pic6 from '../components/Assets/pic6.png'
import pic7 from '../components/Assets/pic7.png'
import {Link} from 'react-router-dom';
import pic10 from '../components/Assets/pic10.png'

const Home = () => {
  return (
    <div className='home'>
      <img src={pic10} alt='pic10' className='pic10'/><span>
      <h3 className='tit'>Lillies</h3></span>
      <div className='app'>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Signup"><button>Signup</button></Link>
            </li>
          </ul>
      </div>
        <br/>
        <div className='text0'>
        <img src={pic1} alt="pic1" className='pic1'/>
        <h1>Welcome to our Restaurant</h1>
        <h2>Order <span className='one'>food</span> anytime,<br/>anywhere</h2>
        <h3>Browse from our list of specials to place your order and have food<br/> delivered to you in no time. Affordable, tasty and fast!</h3>
        <img src={badges} alt="badges"/>
        </div>
        <div className='text1'>
          <h1>Special Meals of the day!</h1>
          <h4>Check our specials of the day and get discounts on all our meals<br/> and swift delivery to what ever location within Lagos.</h4>
        </div>
        <div className='smallDiv'>
        <div className='pic2'>
          <img src={pic2} alt='pic2' className='pic2'/>
          <h3>Stir fry Pasta</h3>
          <h4>Stir fry pasta yada yada yada<br/> because of Sesan</h4>
        </div>
        <div className='pic3'>
          <img src={pic3} alt='pic3' className='pic3'/>
          <h3>Meat Balls</h3>
          <h4>Stir fry pasta yada yada yada<br/> because of Sesan</h4>
        </div>
        <div className='pic4'>
          <img src={pic4} alt='pic4' className='pic4'/>
          <h3>Burger Meal</h3>
          <h4>Stir fry pasta yada yada yada<br/> because of Sesan</h4>
        </div>
        </div>
        <div className='text2'>
          <h1>Get notified when we update!</h1>
          <div className='min'>
          <input type='email' placeholder='abul@gmail.com'/><span><button>Get notified</button></span>
          </div>
          <h4>Get notified when we add new items to our specials menu,<br/> update our price list of have promos!</h4>
        </div>
        <footer>
          <div className='two'>
          <h3>Company</h3><h3>Support</h3><h3>Legal</h3><h3>Install App</h3>
          </div>
          <div className='three'>
            <h5>About</h5>
            <h5>Help Center</h5>
            <h5>Cookies Policy</h5>
            <img src={pic5} alt='badges'/>
          </div>
          <div className='four'>
            <h5>About</h5><h5>Help Center</h5><h5>Cookies Policy</h5><img src={pic6} alt='badges'/>
          </div>
          <hr/>
        <div className="small">
        <h5>Copyright ANONYMOUS</h5><img src={pic7} alt='one'/></div>
        </footer>
    </div>
    
  )
}

export default Home