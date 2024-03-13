import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slide as Menu } from 'react-burger-menu'





export const Navbar = () => {
    
    
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
        <Link to='/cart' className='link'>Cart</Link>
        

        </div>
        
    
        <Outlet/>
        <div className="search">
        <img src={require('./images/ic_round-search.png')} alt="" />
    </div>

        </div>
        <div className="herosection">
            <div className="heroimage">
                <div className="herocontent">
                <h4>
                SPICES
                </h4>
                <h1>GET THE AUTHENTIC TASTE</h1>
                <h6>WE EXPORT AUTHETIC SPICES FROM INDIA</h6>
                <button className='herobutton'>ENQUIRE NOW</button>

                </div>
            
            </div>
        </div>
        <div className="sectionone">
            <div className="subsectionone">
                <img src={require('./images/lemon banner.png')} alt="" />
                <img src={require('./images/coffee banner.png')} alt="" />
            </div>
        </div>
        <div class="aboutussection">
                    <div class="aboutheading">
                        <h1>KNOW ABOUT US!</h1>
                    </div>
                    <div class="mainaboutus">
                        <div class="aboutimage">
                            <img src={require('./images/AVOUT US IMAGE.png')} alt="" />
                        </div>
                        <div class="abouttcontent">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing 
Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing 
Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing 





                            </p>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing 
Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore






                                    
                                    
                            
                                
                                
                            </p>
                            <div class="aboutbutton">
                                <button type="button" className='aboutbuttonn'>KNOW MORE</button>
                            </div>
                            
                                
                            
                        </div>
                        
                    </div>
                </div>
                <br />
                <div className="sectionthree">
                <div class="freshfruitsheading">
                        <h1>OUR FRESH FRUITS</h1>
    
                    </div>
                    <div class="mainfreshfruits">
                        <div class="ff1">
                        <img src={require('./images/Rectangle 12.png')} alt="" />

    
                        </div>
                        <div class="ff2">
                        <img src={require('./images/image 6.png')} alt="" />
    
                        </div>
                        <div class="ff3">
                        <img src={require('./images/image 7.png')} alt="" />

    
                        </div>
                        <div class="ff4">
                        <img src={require('./images/image 8.png')} alt="" />
    
                        </div>
                    </div>
                    <div class="knowmorebutton">
                        <button type="button">KNOW MORE</button>
                    </div>
                </div>
                <br />


                <div className="sectionfour">
                <div class="spicesheading">
                        <h1>OUR SPICES COLLECTIONS</h1>
    
                    </div>
                    <div class="mainspices">
                        <div class="s1">
                        <img src={require('./images/Rectangle 12 (1).png')} alt="" />

    
                        </div>
                        <div class="s2">
                        <img src={require('./images/image 6 (1).png')} alt="" />
    
                        </div>
                        <div class="s3">
                        <img src={require('./images/image 7 (2).png')} alt="" />

    
                        </div>
                        <div class="s4">
                        <img src={require('./images/image 8 (1).png')} alt="" />
    
                        </div>
                    </div>
                    <div class="knowmorebutton">
                        <button type="button">KNOW MORE</button>
                    </div>
                </div>

                <br />




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
