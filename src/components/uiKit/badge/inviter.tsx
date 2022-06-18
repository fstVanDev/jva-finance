import styled from 'styled-components'
import React from 'react'
import { useSelector } from 'react-redux'

import * as fromReferral from 'lib/referral/selectors'
import truncate from '../../../lib/text/truncate'

const InviterBadge = styled.div`
  width: 100%;
  max-width: 325px;
  height: 40px;

  padding: 0 5px;

  display: flex;

  align-items: center;

  font-family: Urbanist;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  text-align: center;

  background: #f5f6fa;
  border: 1px solid #e2e6f3;
  border-radius: 20px;
`
const Label = styled.div`
  flex: 2;

  margin-left: 10px;

  color: #9f9fb8;
`

const Address = styled.div`
  flex: 3;

  margin-right: 15px;

  color: #4a5a72;
`
const Percent = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 30px;

  border-radius: 20px;

  color: #ffffff;
  background: #fb075f;
`

const Inviter: React.FC = () => {
  const referrer = useSelector(fromReferral.referrer)

  return (
    <InviterBadge>
      <Label>My inviter:</Label>
      <Address>{truncate(referrer, 19)}</Address>
      <Percent>10%</Percent>
    </InviterBadge>
  )
}

export default Inviter
