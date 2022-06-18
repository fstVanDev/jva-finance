import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import * as fromReferral from 'lib/referral/selectors'
import truncate from 'lib/text/truncate'

import SpaceDivider from 'components/uiKit/spaces/SpaceDivider'

import { Title, SubTitle } from './styled'
import { ContentBox } from '../styled'

const Box = styled(ContentBox)`
  align-items: center;
  justify-content: flex-start;
`

const OverflowBox = styled.div`
  flex: 1;
  max-height: 185px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-y: auto;
`

const ReferralLevels: React.FC = () => {
  const invited = useSelector(fromReferral.invited)

  const hasRef = invited.length > 0

  return (
    <Box>
      <SpaceDivider space={15}>
        <Title>Your direct referrals:</Title>
      </SpaceDivider>

      <OverflowBox>
        {hasRef && invited.map((value, idx) => <SubTitle key={idx.toString()}>{truncate(value, 19)}</SubTitle>)}

        {!hasRef && <SubTitle>No Referrals</SubTitle>}
      </OverflowBox>
    </Box>
  )
}

export default ReferralLevels
