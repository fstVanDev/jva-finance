import React from 'react'
import styled from 'styled-components'

import useWallet from 'use-wallet'

import { useReferrals } from 'lib/referral/hooks'
import useIsConnected from 'lib/wallet/hooks/isConnected'

import { ContentDivider, FlexBox, FlexAuto } from 'components/uiKit/basicComponents'
import PageTitle from 'components/uiKit/Title/PageTitle'
import SpaceDivider from 'components/uiKit/spaces/SpaceDivider'

import StatusBox from './components/StatusBox'
import ReferralPercentage from './components/statistics/ReferralPercentage'
import ReferralLevels from './components/statistics/ReferralLevels'
import DirectReferrals from './components/statistics/DirectReferrals'
import Invite from './components/invite'
import InviteButton from './components/invite/button'

const ContentWrapper = styled.div`
  height: auto;
  margin: 30px 30xp 0px 30px;
`

const Divider = styled(ContentDivider)`
  margin-top: 30px;
//   margin-bottom: 30px;
`

const FlexBlock = styled(FlexBox)`
max-width: 1300px;
margin: auto;
justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;

    & > * {
      align-items: center;
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

const Header: React.FC = () => {
  return (
    <FlexBlock>
      <FlexAuto>
        <PageTitle>
          <h1>
            Invite your friends. <br />
            Earn cryptocurrency together
          </h1>
          <h2>
            Earn a certain commission reward from your friends swaps on Biswap and <br />
            <b>5%</b> from their earnings on Farms & Launchpools
          </h2>

          <InviteButton />
        </PageTitle>
      </FlexAuto>

      <StatusBox />
    </FlexBlock>
  )
}

const InfoBoxes: React.FC = () => {
  return (
    <FlexBlock justify="between">
      <ReferralPercentage />
      <ReferralLevels />
      <DirectReferrals />
    </FlexBlock>
  )
}

const Referrals: React.FC = () => {
  const isConnected = useIsConnected()

  const { account } = useWallet()

  useReferrals(account)

  return (
    <ContentWrapper>
      <Header />
      <Divider />
      {isConnected && (
        <SpaceDivider space={30}>
          <InfoBoxes />
        </SpaceDivider>
      )}
      <Invite />
    </ContentWrapper>
  )
}

export default Referrals
