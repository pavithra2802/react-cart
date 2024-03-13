import React, { useEffect, useState } from 'react'
import Productdetails from './Productdetails'
import { Link, Outlet } from 'react-router-dom'
import './Cart.css'

export const Cart = ({cart,setCart}) => {
    const [price,setPrice]=useState(0);

    useEffect(()=>{
        if(price<0){
            alert("invalid input,Please Refresh");
            setPrice("0");

        }
        else{
            let amount=0;
            cart.map((cartprice)=>amount = (cartprice.amount * cartprice.count)+amount)
            setPrice(amount)
            // cart.map((ddd)=>amount=(ddd.count * ddd.price)+amount)
            // setPrice(amount)
        }
    })

    const removeprogram = (dd)=>{
        let removeddata=cart.filter((gg)=>gg.id !== dd.id)
        setCart(removeddata)
    }
    const incrmentprogram = (hh,num)=>{
        let findingposition = cart.indexOf(hh);
        console.log(findingposition);
        cart[findingposition].count = cart[findingposition].count +num;
        setCart([...cart])
    }

    

    

        
    
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
        <div className="row">
            {
                cart.map((dd)=>
                <div className="sectiontwo">
        <div class="productsection">
                <div class="products12">
                    <div class="product1">

                        <div className="innerdiv">
                            {/* <img src="./images/Group 95.png" alt="" class="carticon"> */}
                          <img src={dd.productimage} alt="" width={'400px'} height={'400px'}/>


{/* <img src="./images/image 26 (1).png" alt=""> */}
<div class="producttextt">
    <h4>{dd.productname}</h4>
</div>
<div className="productamount">
<h5>{dd.amount}</h5>

</div>
                        </div>
                        {/* <button onClick={()=> setCart([...cart,dd])}>ADD TO CART</button> */}
                    </div>

                    <div className="increment">
                    <button className='decrementbutton' onClick={()=>incrmentprogram(dd,-1)}>-</button>
                    <h3>{dd.count}</h3>
                    <button className='incrementbutton' onClick={()=>incrmentprogram(dd,1)}>+</button>

                    </div>
                    <button className='removebutton' onClick= {()=>removeprogram(dd)}>Remove</button>
                    
                    
                </div>
                
                

               

            </div>
        </div>
                
                )
            }

        </div>
        <h1 className='totalprice'>TOTAL PRICE: {price}</h1>

    </div>
  )
}
