import React, { useEffect } from 'react'
import "./Navbar.scss";
import { useState } from 'react';
//import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active,setActive] = useState(false); 
  const [open,setOpen] = useState(false); 


  const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll", isActive);

    return ()=>{
      window.removeEventListener("scroll", isActive);
    };
  },[]);

  const currentUser= {
    id:1,
    username:"John Doe",
    isSeller:true
  }


  return (
    <div className={active ? "navbar active" : "navbar"}>
        <div className="container">
        <div className="logo">
            {/* <Link to="/"> */}
                <span className='text'>fiverr</span>
            {/* </Link> */}
            <span className='dot'>.</span>
        </div>
        <div className="links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            {!currentUser && <button>Join</button>}
            {currentUser && (
              <div className='user' onClick={()=>setOpen(!open)}>
                <img src='https://imgs.search.brave.com/b0SH2Uhtp80_-MY1Zh9q11cEJW4o9UsAfgP0y7JVLyg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjQ1/MTY1L3Bob3RvL2d1/YXJkLW1pY2hhZWwt/am9yZGFuLW9mLXRo/ZS1jaGljYWdvLWJ1/bGxzLWxvb2tzLW9u/LW1hbmRhdG9yeS1j/cmVkaXQtdGltLWRl/LWZyaXNjby1hbGxz/cG9ydC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ZlliWFI4/TklNR3h5b2JHUGxr/SWhhVFVnZHZldzR6/ZkFPa2xJLU15UlpE/VT0' alt=''/>
                <span>{currentUser?.username}</span>
                {open &&<div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>}
              </div>
            )}
        </div> 
        </div>
        {active && (
          <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>
          </>
        )}
    </div>
  )
}

export default Navbar