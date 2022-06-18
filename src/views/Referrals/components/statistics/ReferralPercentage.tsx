import React from 'react'
import { useSelector } from 'react-redux'
import numeral from 'numeral'

import * as fromReferral from 'lib/referral/selectors'

import SpaceDivider from 'components/uiKit/spaces/SpaceDivider'

import { ContentBox } from '../styled'
import { Title, SubTitle, Marked } from './styled'

const ReferralPercentage: React.FC = () => {
  const rewarded = useSelector(fromReferral.rewarded)

  return (
    <ContentBox>
      <SpaceDivider>
        <SpaceDivider space={10}>
          <Title>Referral Percentage:</Title>
        </SpaceDivider>
        <SpaceDivider space={10}>
          <SubTitle>Earned from Harvesting & Lottery</SubTitle>
        </SpaceDivider>
        <Marked>
          <span>5%</span>
        </Marked>
      </SpaceDivider>

      <SpaceDivider space={10}>
        <Title>Total 6RMB Earned</Title>
      </SpaceDivider>
      <SpaceDivider space={10}>
        <SubTitle>Earned from Harvesting & Lottery</SubTitle>
      </SpaceDivider>
      <Marked>
        <span>6RMB {numeral(rewarded).format('0.00a')}</span>
      </Marked>
    </ContentBox>
  )
}

export default ReferralPercentage
