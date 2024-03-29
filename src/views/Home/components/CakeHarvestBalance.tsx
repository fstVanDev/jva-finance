import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from 'use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import useAllEarnings from 'hooks/useAllEarnings'
import CardValue from './CardValue'

const CakeHarvestBalance = ({earningsSum}) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '25px' }}>
        Locked
      </Text>
    )
  }

  return <CardValue value={earningsSum} />
}

export default CakeHarvestBalance
