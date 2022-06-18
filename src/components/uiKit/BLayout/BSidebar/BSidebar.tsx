import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  BSidebarLogo,
  BSidebarMenuSection,
  BSidebarDiv,
  BSidebarMenuButtonIcon,
  BSidebarMenuButtonDiv,
  BSidebarMenuButtonExpander,
  BSidebarMenuButtonContent,
  BSidebarExpandedArea,
} from './StyledComponents'
import BSidebarMenuButton from './BSidebarMenuButton'
import BSidebarWidgets from './BSidebarWidgets'


const BSidebar = (props) => {
  const {logo, sidebarLinks} = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  }

  const isMenuItemActive = (link) => {
    return link === location.pathname;
  }

  return (
    <BSidebarDiv>
      
      <BSidebarMenuSection>
        {sidebarLinks.map((link) => {
          return (
            !link.children ? (
              <BSidebarMenuButton
                content={link}
                isActive={isMenuItemActive(link.path)}
              />
            ) : (
              <div>
                <BSidebarMenuButtonDiv onClick={handleExpandClick}>
                  <div>
                    <BSidebarMenuButtonContent>
                      <BSidebarMenuButtonIcon src={link.icon} alt='' />
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
                  <BSidebarExpandedArea>
                    {link.children.map((child) => {
                      return (
                      <BSidebarMenuButton
                      content={child}
                      />
                      )
                    })}
                  </ BSidebarExpandedArea>
                }
              </div>
            )
              )
        })}
        <BSidebarWidgets />
      </BSidebarMenuSection>
    </BSidebarDiv>
  )
}

export default BSidebar


