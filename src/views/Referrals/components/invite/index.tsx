import React from 'react'
import styled from 'styled-components'

import useIsConnected from 'lib/wallet/hooks/isConnected'

import SpaceDivider from 'components/uiKit/spaces/SpaceDivider'
import { FlexBox } from 'components/uiKit/basicComponents'
import H2 from 'components/uiKit/Title/H2'
import Inviter from 'components/uiKit/badge/inviter'

import { Card, CardContent, Badge, InviteCardImg, InviteTitle, InviteSubTitle, Description, ReadMore } from './styled'

import referralIcon from './icons/referral.svg'
import inviteIcon from './icons/invite.svg'
import earnIcon from './icons/earn.svg'

const FlexBlock = styled(FlexBox)`
max-width: 1300px;
margin: auto;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;

    & > * {
      margin-top: 20px;

      &:last-child {
        margin-bottom: 20px;
      }
    }
  }
`

const Invite: React.FC = () => {
  const isConnected = useIsConnected()

  return (
    <>
      <SpaceDivider space={20}>
        <FlexBlock justify="between">
          <H2>How to invite friends</H2>

          {isConnected && <Inviter />}
        </FlexBlock>
      </SpaceDivider>

      <FlexBlock justify="between">
        <Card>
          <CardContent>
            <Badge>1</Badge>

            <InviteCardImg src={referralIcon} />
            <InviteTitle>Get a referral link</InviteTitle>
            <InviteSubTitle>Connect a wallet and generate your referral link in the Referral section.</InviteSubTitle>
          </CardContent>

          <InviteTitle>Farms Referral Rewards</InviteTitle>
          <Description>
            Gain 5% from your friends earnings on Farms! Your rewards will be displayed on the referral balance at the
            moment your invited friends withdraw their earned BSW tokens.
          </Description>

          <ReadMore href="#">Read more</ReadMore>
        </Card>

        <Card>
          <CardContent>
            <Badge>2</Badge>

            <InviteCardImg src={inviteIcon} />
            <InviteTitle>Invite friends</InviteTitle>
            <InviteSubTitle>Connect a wallet and generate your referral link in the Referral section.</InviteSubTitle>
          </CardContent>

          <InviteTitle>Launchpool Referral Rewards</InviteTitle>
          <Description>
            Get 5% of from friends’ profit obtained in Launchpool! The reward is only valid for the pool in which BSW
            is staked in return for more BSW.
          </Description>

          <ReadMore href="#">Read more</ReadMore>
        </Card>

        <Card>
          <CardContent>
            <Badge>3</Badge>

            <InviteCardImg src={earnIcon} />
            <InviteTitle>Earn crypto</InviteTitle>
            <InviteSubTitle>Connect a wallet and generate your referral link in the Referral section.</InviteSubTitle>
          </CardContent>

          <InviteTitle>Swaps Referral Rewards</InviteTitle>
          <Description>
            Get a certain commission reward each time your friend makes a swap! Receive your reward immediately after
            the swap is made. Swaps referral program will be active for certain pairs only.
          </Description>

          <ReadMore href="#">Read more</ReadMore>
        </Card>
      </FlexBlock>
    </>
  )
}

export default Invite
