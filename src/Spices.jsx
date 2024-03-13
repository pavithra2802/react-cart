import React, { useState } from 'react'
import Productdetails from './Productdetails'
import { Link, Outlet } from 'react-router-dom'
import './Spices.css'

export const Spices = ({cart,setCart}) => {
    const [cartCount, setCartCount] = useState(0);

    const addToCart= (product)=>{
        setCart([...cart.product]);
        setCartCount(prevCount => prevCount+1);
    }
    console.log(Productdetails);
  return (
    <div>
        
      <div className="navbarsection">
        <div class="topheader">
                
                    <div class="call">
                        <div class="callimage">
                            <img src={require('./images/callbutton.png')} alt="" />
                        </div>
                        <div className="callnumber">
                        <p>5678904322</p>

                        </div>
    
                    </div>
                    <div class="mail">
                        <div class="mailimage">
                            <img src={require('./images/mailbutton.png')} alt="" />
                        </div>
                        <div className="mailid">
                        <p>example@gmail.com</p>

                        </div>
    
                    </div>
                
                <div class="socialmedia">
                    <img src={require('./images/SOCIAL ICONS (4).png')} alt="" />
                </div>
            </div>
        </div>
        <div className="navbar">
            <div className="logo">
                <img src={require('./images/logospice.png')} alt="" />
            </div>
        <div className="mainnav">

          
        <Link to='/' className='link'>Home</Link>
        <Link to='/aboutus' className='link'>About</Link>
        <Link to='/spices' className='link'>Spices</Link>
        {/* <Link to='/fruits' className='link'>Fruits</Link> */}
        <Link to='/cart' className='link'>Cart</Link>

        </div>
        <Outlet></Outlet>
    
        <div className="search">
        <img src={require('./images/ic_round-search.png')} alt="" />
    </div>

        </div>
        <div className="sectionone">
        <div class="herosection">
            <div class="mainhero">
                <div class="heroimg">
                    <div class="herocontent">
                      <h1>SPICES</h1>
                        <h5>HOME {'>'}SPICES</h5>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        <div className="row">
            
                <div className="sectiontwo">
        <div class="productsection">
                <div class="products1">
                    {
                        Productdetails.map((dd)=>
                        
                        <div class="product1">

                        {/* <img src="./images/Group 95.png" alt="" class="carticon"> */}
                          {/* <img src={require('./images/cartticon.png')} alt="" class="carticon" /> */}
                          <img src={dd.productimage} alt="" width={'400px'} height={'400px'}/>


                        {/* <img src="./images/image 26 (1).png" alt=""> */}
                        <div class="producttext">
                            <h4>{dd.productname}</h4>
                            <h5>{dd.amount}</h5>
                        </div>
                        <div className="productbutton">
                        <button className='addcart' onClick={()=> setCart([...cart,dd])}>ADD TO CART</button>
                        {/* <button className='addcart' onClick={() => addToCart(product)}>ADD TO CART</button> */}


                        </div>
                    </div>
                    
                    
                    
                        )
                        
                    }
                    {/* <div class="product2">
                    <img src={require('./images/cartticon.png')} alt="" class="carticon" />
                    <img src={require('./images/cinamon.png')} alt="" width={'400px'} height={'400px'}/>
                        <div class="producttext">
                            <h4>CINNAMON POWDER</h4>
                        </div>
                    </div> */}
                    {/* <div class="product3">
                    <img src={require('./images/cartticon.png')} alt="" class="carticon" />
                    <img src={require('./images/turmeric.png')} alt="" width={'400px'} height={'400px'}/>
                        <div class="producttext">
                            <h4>TURMERIC POWDER</h4>
                        </div>
                    </div> */}
                </div>
                {/* <div class="products2">
                    <div class="product12">
                    <img src={require('./images/cartticon.png')} alt="" class="carticon" />
                    <img src={require('./images/pepper.png')} alt="" width={'400px'} height={'400px'}/>
                        <div class="producttext">
                            <h4>PEPPER POWDER</h4>
                        </div>
                    </div>
                    <div class="product22">
                    <img src={require('./images/cartticon.png')} alt="" class="carticon" />
                    <img src={require('./images/chilli.png')} alt="" width={'400px'} height={'400px'}/>
                        <div class="producttext">
                            <h4>CHILLY POWDER</h4>
                        </div>
                    </div>
                    <div class="product32">
                    <img src={require('./images/cartticon.png')} alt="" class="carticon" />
                    <img src={require('./images/udipi.png')} alt="" width={'400px'} height={'400px'}/>
                        <div class="producttext">
                            <h4>UDIPI POWDER</h4>
                        </div>
                    </div>
                </div> */}
                {/* <div class="products3">
                    <div class="product13">
                    <img src={require('./images/cartticon.png')} alt="" class="carticon" />
                    <img src={require('./images/chai.png')} alt="" width={'400px'} height={'400px'}/>
                        <div class="producttext">
                            <h4>CHAI POWDER</h4>
                        </div>
                    </div>
                    <div class="product23">
                    <img src={require('./images/cartticon.png')} alt="" class="carticon" />
                    <img src={require('./images/curry.png')} alt="" width={'400px'} height={'400px'}/>
                        <div class="producttext">
                            <h4>CURRY POWDER</h4>
                        </div>
                    </div>
                    <div class="product33">
                    <img src={require('./images/cartticon.png')} alt="" class="carticon" />
                    <img src={require('./images/corriander.png')} alt="" width={'400px'} height={'400px'}/>
                        <div class="producttext">
                            <h4>CORIANDER POWDER</h4>
                        </div>
                    </div>
                </div> */}
                {/* <div class="products4">
                    <div class="product14">
                    <img src={require('./images/cartticon.png')} alt="" class="carticon" />
                    <img src={require('./images/pickle.png')} alt="" width={'400px'} height={'400px'}/>
                        <div class="producttext">
                            <h4>PICKLE POWDER</h4>
                        </div>
                    </div>
                    <div class="product24">
                    <img src={require('./images/cartticon.png')} alt="" class="carticon" />
                    <img src={require('./images/rasam.png')} alt="" width={'400px'} height={'400px'}/>
                        <div class="producttext">
                            <h4>RASAM POWDER</h4>
                        </div>
                    </div>
                    <div class="product34">
                    <img src={require('./images/cartticon.png')} alt="" class="carticon" />
                    <img src={require('./images/garam.png')} alt="" width={'400px'} height={'400px'}/>
                        <div class="producttext">
                            <h4>GARAM MASALA POWDER</h4>
                        </div>
                    </div>
                </div> */}
                
                

               

            </div>
        </div>
                
                
            
        </div>
        
        <div className="sectionfive">
                <div class="blogsection">
                    <div class="blogheading">
                        <h1>OUR LATEST BLOGS</h1>
                    </div>
                    <div class="blogmainsection">
                        <div class="blog1">
                            <div class="blog1img">
                                <img src={require('./images/image 12.png')} alt="" />
                                {/* <img src="./images/image 12.png" alt=""> */}
                            </div>
                            <div class="blog1content">
                                <h3>
                                    MIXED PEEL
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div class="readmore">
                                    <button>READ MORE</button>
                                    <img src={require('./images/ph_arrow-up.png')} alt="" />

                                    {/* <img src="./images/ph_arrow-up.png" alt=""> */}
    
                                </div>
                                
                            </div>
                        </div>
                        <div class="blog1">
                            <div class="blog1img">
                            <img src={require('./images/image 12.png')} alt="" />


                                {/* <img src="./images/image 12.png" alt=""> */}
                            </div>
                            <div class="blog1content">
                                <h3>
                                    MIXED PEEL
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div class="readmore">
                                    <button>READ MORE</button>
                                    <img src={require('./images/ph_arrow-up.png')} alt="" />
                                    {/* <img src="./images/ph_arrow-up.png" alt=""> */}
    
                                </div>
                                
                            </div>
                        </div>
                        <div class="blog1">
                            <div class="blog1img">
                            <img src={require('./images/image 12.png')} alt="" />
                                {/* <img src="./images/image 12.png" alt=""> */}
                            </div>
                            <div class="blog1content">
                                <h3>
                                    MIXED PEEL
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amtempor  ipsum dolor Lorem ipsum.......
                                </p>
                                <div class="readmore">
                                    <button>READ MORE</button>
                                    <img src={require('./images/ph_arrow-up.png')} alt="" />

                                    {/* <img src="./images/ph_arrow-up.png" alt=""> */}
    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="sectionsix">
                <div class="newsletter">
                <div class="mainnewssection">
                    <h1>SUBSCRIBE TO OUR NEWSLETTERS</h1>
                    <p>GET THE LATEST NEWS ABOUT OUR PRODUCTS AND DISCOUNTS!</p>
                    <div class="emailsection">
                        <input type="email" placeholder="ENTER YOUR EMAIL" className='emailinput'/>
                        <button type="submit">SUBSCRIBE</button>

                    </div>

                    

                </div>
            </div>
                </div>
                <div className="sectionseven">
                <div class="footermainsection">
                <div class="footer">
                    <div class="mainfooter">
                        <div class="mainfoot">
                            <div class="mainfoot1">
                                <div class="logo">
                                <img src={require('./images/image 2.png')} alt="" />

                                    {/* <img src="./images/image 2.png" alt=""> */}
                                </div>
                                <div class="footertopic1">
                                    <p>HOME</p>
                                    <p>ABOUT US</p>
                                    <p>SPICES</p>
                                </div>
                                <div class="footertopic2">
                                    <p>FRUITS</p>
                                    <p>CONTACT US</p>
                                    <p>NEWSLETTER</p>
                                </div>
                                <div class="footertopic3">
                                    <p>CONNECT</p>
                                    <p>BLOGS</p>
                                    <p>ENQUIRE</p>
                                </div>
                            </div>
                            <hr/>
                            <div class="bottom">
                                <div class="socialicon">
                                    <img src={require('./images/SOCIAL ICONS (4).png')} alt="" />
                                    {/* <img src="./images/SOCIAL ICONS (1).png" alt=""> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
    </div>
  )
}
