import React, { useCallback, useMemo, useState } from 'react'

import useWallet from 'use-wallet'
import { useWalletModal } from '@pancakeswap-libs/uikit'

import { BButton } from 'components/uiKit/basicComponents'

import useIsConnected from 'lib/wallet/hooks/isConnected'
import useI18n from 'hooks/useI18n'

import { generateReferralLink } from 'utils/referrals'
import styled from 'styled-components'

const Button = styled.button`
width: 147px;
height: 37px;
background: none;
color: #778dfc;
border: 1px solid  #778dfc;
border-radius: 8px;
padding: 0px;
box-shadow: none;


:hover {
   color: white;
   background: #778dfc;
}
`

const InviteButton: React.FC = () => {
  const isConnected = useIsConnected()
  const t = useI18n()

  const { account, connect, reset } = useWallet()
  const { onPresentConnectModal: openConnectModal } = useWalletModal(connect, reset)

  const referralLink = useMemo(() => {
    return generateReferralLink(account)
  }, [account])

  const [btnText, setBtnText] = useState('Invite friends')

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(referralLink).then()

    setBtnText('Copied')

    setTimeout(() => {
      setBtnText('Invite friends')
    }, 1000)
  }, [referralLink])

  const handleClick = useCallback(() => {
    if (isConnected) {
      copyLink()
    } else {
      openConnectModal()
    }
  }, [copyLink, isConnected, openConnectModal])

  return (
    <Button type="button" onClick={handleClick}>
      {isConnected ? btnText : t(292, 'Unlock Wallet')}
    </Button>
  )
}

export default InviteButton
