import React from 'react'

const Header = () => {
  return (
  <div className="container">
    <img src="./src/images/Logo.svg" alt="Logo" className='Main_images' />
    <div className="list">
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Pages</li>
    <li>Shop</li>
    <li>Projects</li>
    <li>News</li>
<img src="./src/images/Search (1).png" alt="search" className='img' />
<img src="./src/images/Cart.png" alt="Cart" className='Main_cart' />
</ul>
    </div>
    <div className="Main__images">
        <img src="./src/images/Image.png" alt="Image" className='Main' />
        <img src="./src/images/Background.png" alt="bgc" className='Main_bgc' />
        <p className='Main_p'>100% Natural Food</p>
        <h1 className='Main_h'
        >Choose the best <br />
healthier way <br />
of life</h1>
<button className='Main_b'>Explore Now</button>
<h1 className='Table_1'>100%</h1>
    </div>
  </div>
  )
}

export default Header