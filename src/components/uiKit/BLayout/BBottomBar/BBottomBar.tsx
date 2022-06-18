import React from "react";
import styled from 'styled-components'
import classes from './bottom.module.css'
import img from './metamask1.svg'
import img2 from './buttonToTop.svg'



const ScrollButtonContainer = styled.div`
  display: flex;
 

  & button {
    position: absolute;
    right: 3%;
    border: none;
    background: none;
    cursor: pointer;
    padding-top: 0px;
    right: 70px;
  }

  @media (min-width: 375px) and (max-width: 992px) {
     & button {
         right: 40px;
         top: 0px;
         padding-top: 0px;
      }
  }

`

const BBottomBar = () => {
   function scrollTop() {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   }

   return (
      <div className={classes.Footer}>
         <div className={classes.Buttons}>
            <a className={classes.maskLink} href='/'>
               <img src={img} alt='' />
            </a>

            <button type="button" className={classes.Buy}> Buy 6RMB </button>
         </div>

         <ScrollButtonContainer>
            {/* eslint-disable-next-line react/button-has-type */}
            <button className={classes.toTop} onClick={scrollTop} >
               <img src="/images/toTopButton.png" alt="" />
            </button>
         </ScrollButtonContainer>
      </div>
   )
}

export default BBottomBar