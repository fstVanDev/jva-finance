import React from 'react'
import styled from 'styled-components'

import useIsConnected from 'lib/wallet/hooks/isConnected'

import { ContentBox } from './styled'

const StatusContentBox = styled(ContentBox)`

margin: auto 0px auto auto;
   height: 120px;
   background: white;
   padding: 24px;
   border-radius: 14px;
   box-shadow: 0px 2px 12px -8px rgba(25,19,38,0.1),0px 1px 1px rgba(25,19,38,0.05);
   max-width: 320px;



  @media (max-width: 992px) {
    min-width: auto;
    width: 100%;
    margin: auto;
  }

  
  @media (min-width: 992px) and (max-width: 1300px) {
   margin: auto 20px auto 0px;
  }
`

const Block = styled.div`
  font-family: Urbanist, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
`

const BlockContent = styled.div`
  font-family: 'Kanit' !important;
   color: #23439c !important;
   font-size: 1em !important;
   color: #23439c;
`

const StatusLabel = styled.span`
  margin-right: 15px;

  color: #9f9fb8;
`

const Status = styled.span<{ success: boolean }>`
  font-weight: bold;

  color: ${({ success }) => (success ? 'green' : '#fb075f')};
`

const ConnectStatusBlock = styled.div`
  margin-bottom: 15px;
`

const ConnectStatus: React.FC = () => {
  const isConnected = useIsConnected()

  return (
    <>
      <ConnectStatusBlock>
        <StatusLabel>Active Status:</StatusLabel>
        <Status success={isConnected}>{isConnected ? 'Connected' : 'Not Connected'}</Status>
      </ConnectStatusBlock>
      <BlockContent style={{ visibility: isConnected ? 'hidden' : 'visible' }}>
        You need to participate in the platform, to become active (again)...
      </BlockContent>
    </>
  )
}

const StatusBox: React.FC = () => {
  return (
    <StatusContentBox>
      <Block>
        <ConnectStatus />
      </Block>
    </StatusContentBox>
  )
}

export default StatusBox
