import React from 'react'
import BBottomBar from './BBottomBar/BBottomBar'
import { BLayoutContentDiv, BLayoutContentWrapper } from './StyledComponents'

const BLayoutContent = (props) => {
  const { children } = props

  return (
    <BLayoutContentWrapper>
        {children}
        <BBottomBar />
    </BLayoutContentWrapper>
  )
}

export default BLayoutContent
