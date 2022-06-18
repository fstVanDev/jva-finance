import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { push as BurgerMenu } from 'react-burger-menu'
import { useWallet } from 'use-wallet'
import { useWalletModal } from '@pancakeswap-libs/uikit'
import { styles } from './services'
import {
  BSidebarExpandedArea,
  BSidebarLogo,
  BSidebarMenuButtonContent,
  BSidebarMenuButtonDiv, BSidebarMenuButtonExpander, BSidebarMenuButtonIcon,
  BSidebarMenuSection,
} from '../BSidebar/StyledComponents'
import BSidebarMenuButton from '../BSidebar/BSidebarMenuButton'
import BSidebarWidgets from '../BSidebar/BSidebarWidgets'
import BLoginButton, {  BTopBarLink, BTopBarLinkIcon, BMobileSidebarBottomLinks } from './StyledComponents'
import './slider.css'
import LanguagePicker from '../LanguagePicker/LanguagePicker'

const BMobileSidebar = (props) => {
  const { logo, mobileLinks, socialLinks } = props;
  const { account, login, logout } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)
  const location = useLocation();
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  }
  const isMenuItemActive = (link) => {
    return link === location.pathname;
  }
  const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };
  

  return (
      <BurgerMenu
        styles={ styles }
        pageWrapId="page_wrap"
        outerContainerId="outer-container"
        right
        width="70%"
        isOpen={isMenuOpen}
        onStateChange={handleStateChange}
      >
        <BSidebarLogo>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </BSidebarLogo>
        <BSidebarMenuSection onClick={() => handleCloseMenu()}>
          <BLoginButton 
            onPresentConnectModal={()=>{onPresentConnectModal()}}
            account={account}
            login={login}
            logout={logout}
          />
          {mobileLinks.map((link, index) => {
            return (
              !link.children ? (
                  <BSidebarMenuButton 
                      content={link}
                      isActive={isMenuItemActive(link.path)}
                  />
              ) : (
                <div>
                  <BSidebarMenuButtonDiv >
                    <div>
                      <BSidebarMenuButtonContent >
                        <BSidebarMenuButtonIcon  src={link.icon} alt='' />
                        {link.text}
                      </BSidebarMenuButtonContent>
                    </div>
                    <BSidebarMenuButtonExpander 
                      isActive={isExpanded}
                      src='/images/menuIcons/icon-arrow-dawn.png'
                    />
                  </BSidebarMenuButtonDiv>
                  {
                    isExpanded &&
                    <BSidebarExpandedArea >
                      {link.children.map((child) => {
                        return (
                          <BSidebarMenuButton 
                            content={child}
                            isActive={isMenuItemActive(link.path)}
                            onClick={handleExpandClick()}
                          />
                        )
                      })}
                    </ BSidebarExpandedArea >
                  }
                </div>
              )
            )
          })}
          <BSidebarWidgets />
          <BMobileSidebarBottomLinks>
           <div>
             <BTopBarLink href={socialLinks.telegram.path} target='_blank' rel="noreferrer">
               <BTopBarLinkIcon src={socialLinks.telegram.image} />
             </BTopBarLink>
           </div>
            <div>
              <BTopBarLink href={socialLinks.facebook.path} target='_blank' rel="noreferrer">
                <BTopBarLinkIcon src={socialLinks.facebook.image} />
              </BTopBarLink>
            </div>
            <div>
              <BTopBarLink href={socialLinks.twitter.path} target='_blank' rel="noreferrer">
                <BTopBarLinkIcon src={socialLinks.twitter.image} />
              </BTopBarLink>
            </div>
            <div>
              <LanguagePicker />
            </div>
          </BMobileSidebarBottomLinks>
        </BSidebarMenuSection>
      </BurgerMenu>
  );
}

export default BMobileSidebar
