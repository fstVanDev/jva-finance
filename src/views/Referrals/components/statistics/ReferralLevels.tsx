import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

import * as fromReferral from 'lib/referral/selectors'

import SpaceDivider from 'components/uiKit/spaces/SpaceDivider'

import { Title, SubTitle } from './styled'
import { ContentBox } from '../styled'

const Description = styled(SubTitle)`
  font-size: 18px;
  line-height: 22px;

  @media (max-width: 1190px) {
    font-size: 16px;
    line-height: 18px;
  }
`

const ReferralLevels: React.FC = () => {
  const invitedAmount = useSelector(fromReferral.invitedAmount)
  const levels = useSelector(fromReferral.getLevels)

  return (
    <ContentBox>
      <SpaceDivider space={15}>
        <Title>Referral Count: {invitedAmount}</Title>
      </SpaceDivider>

      <SpaceDivider space={10}>
        <SpaceDivider space={5}>
          <Title>Level 1: {levels.first}</Title>
        </SpaceDivider>
        <Description>(60% bonus from level 1)</Description>
      </SpaceDivider>

      <SpaceDivider space={10}>
        <SpaceDivider space={5}>
          <Title>Level 2: {levels.second}</Title>
        </SpaceDivider>
        <Description>(30% bonus from level 2)</Description>
      </SpaceDivider>

      <div>
        <SpaceDivider space={5}>
          <Title>Level 3: {levels.third}</Title>
        </SpaceDivider>
        <Description>(10% bonus from level 3)</Description>
      </div>
    </ContentBox>
  )
}

export default ReferralLevels
