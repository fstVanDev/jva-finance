import React from 'react'
import {
   BLayoutDiv,
   BLayoutContainer,
} from './StyledComponents'

import BSidebar from './BSidebar/BSidebar'
import BTopbar from './BTopbar/BTopbar'
import BLayoutContent from './BLayoutContent'
import BMobileSidebar from './BTopbar/BMobileSidebar'

const BLayout = (props) => {
   const { children, sidebarLinks, topbarLinks, cakePriceUsd } = props;
   const { account, login, logout } = props;
   console.log(props, 1)
   return (
      <BLayoutDiv id='outer-container'>
         <BMobileSidebar
            mobileLinks={sidebarLinks}
            socialLinks={topbarLinks}
            account={account}
            login={login}
            logout={logout}
         />
         <BLayoutContainer id='page_wrap'>
            <BSidebar
               sidebarLinks={sidebarLinks}
            />
           
            <BLayoutContent>
               {children}
            </BLayoutContent>
         </BLayoutContainer>
      </BLayoutDiv>
   )
}

export default BLayout
