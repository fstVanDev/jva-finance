import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  BSidebarMenuButtonContent,
  BSidebarMenuButtonDiv, BSidebarMenuButtonIcon,
} from './StyledComponents'

const BSidebarMenuButton = (props) => {
  const { content, isActive } = props;
  // @ts-ignore
  return content ? (
    <Link to={content.path}>
      <BSidebarMenuButtonDiv isActive={isActive}>
        <BSidebarMenuButtonContent>
          <BSidebarMenuButtonIcon
            isActive={isActive}
            src={content.icon}
            alt=''
          />
          {content.text}
        </BSidebarMenuButtonContent>
      </BSidebarMenuButtonDiv>
    </Link>
  ) : null;
}

export default BSidebarMenuButton
