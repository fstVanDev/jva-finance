import React from 'react'
// import { UserBlock as LoginButton } from '@pancakeswap-libs/uikit'

import BLoginButton, {
   BTopBarActions, BTopBarCertikImage, BTopBarCertikText, BTopBarConnectWalletButton,
   BTopBarContainer,
   BTopBarDiv,
   BTopBarLink,
   BTopBarLinkIcon,
   BTopBarLinks, BTopBarMobileLogo,
} from './StyledComponents'
import LanguagePicker from '../LanguagePicker/LanguagePicker'

const BTopbar = (props) => {
   const { topbarLinks } = props;
   const { account, login, logout } = props;

   return (
      <BTopBarDiv>
         <BTopBarContainer>
            <BTopBarMobileLogo
               src='/images/mobileLogo.png'
            />
            <BTopBarLinks>
               <div style={{
                  marginTop: '9px'
               }}>
                  <BTopBarLink href={topbarLinks.telegram.path} target='_blank' rel="noreferrer">
                     <BTopBarLinkIcon src={topbarLinks.telegram.image} />
                  </BTopBarLink>
                  <BTopBarLink href={topbarLinks.facebook.path} target='_blank' rel="noreferrer">
                     <BTopBarLinkIcon src={topbarLinks.facebook.image} />
                  </BTopBarLink>
                  <BTopBarLink href={topbarLinks.twitter.path} target='_blank' rel="noreferrer">
                     <BTopBarLinkIcon src={topbarLinks.twitter.image} />
                  </BTopBarLink>
               </div>

               <div>
                  <LanguagePicker />
               </div>
            </BTopBarLinks>
            <BTopBarActions>
               <BTopBarCertikImage src='/images/menuIcons/icon-check.svg' />
               <BTopBarCertikText>
                  Certik Audit
               </BTopBarCertikText>
               <BLoginButton
                  account={account}
                  login={login}
                  logout={logout}
               />
               {/* <LoginButton account={account} login={login} logout={logout} /> */}
            </BTopBarActions>
         </BTopBarContainer>
      </BTopBarDiv>
   );
}

export default BTopbar
