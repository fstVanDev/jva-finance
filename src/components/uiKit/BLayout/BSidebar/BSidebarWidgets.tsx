import React from 'react'
import { usePriceCakeBusd } from 'state/hooks'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'

import { useWallet } from 'use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'

import {
  BWidgetBox,
  BWidgetBoxRMBPrice,
  BWidgetBoxTitle,
  BWidgetBoxWrapper,
  BWidgetSection, CerticTextWrapper,
} from '../BWidgetBox/StyledComponents'
import {
  BWidgetPriceImage,
  BWidgetPriceInfo,
  ExchangeImage,
  ExchangeLeftInfo,
  ExchangeRightInfo,
} from './StyledComponents'
import { FlexBox } from '../../basicComponents'
import { BTopBarCertikImage, BTopBarCertikText } from '../BTopbar/StyledComponents'


const BSidebarWidgets = (props) => {
  const cakePriceUsd = usePriceCakeBusd()
  const { account, connect, reset } = useWallet()

  return (
        <div>
          {/* <BWidgetBox>
            <BWidgetBoxTitle>
              Live Trading Deals
            </BWidgetBoxTitle>
            <BWidgetSection>
              <FlexBox>
                <ExchangeImage src='/images/menuIcons/exch.jpg' alt='' />
                <ExchangeLeftInfo>
                  <h1>SWAP</h1>
                  <span>03:06:41 PM</span>
                </ExchangeLeftInfo>
              </FlexBox>
              <ExchangeRightInfo>
                <h1>BUSD/<b>WBNB</b></h1>
                <span>$4 632.94</span>
              </ExchangeRightInfo>
            </BWidgetSection>
            <BWidgetSection>
              <FlexBox>
              <ExchangeImage src='/images/menuIcons/exch.jpg' alt='' />
              <ExchangeLeftInfo>
                <h1>SWAP</h1>
                <span>03:06:41 PM</span>
              </ExchangeLeftInfo>
              </FlexBox>
              <ExchangeRightInfo>
                <h1>BUSD/<b>WBNB</b></h1>
                <span>$4 632.94</span>
              </ExchangeRightInfo>
            </BWidgetSection>
          </BWidgetBox> */}
          <BWidgetBoxWrapper>
            <BWidgetBoxRMBPrice>
              <BWidgetSection>
                <BWidgetPriceImage src='/images/menuIcons/6RMB.svg' />
                <BWidgetPriceInfo>
                  <h1>6RMB Price</h1>
                  <span>{cakePriceUsd.toNumber()}</span>
                </BWidgetPriceInfo>
              </BWidgetSection>
            </BWidgetBoxRMBPrice>
            <CerticTextWrapper>
              <BTopBarCertikImage src='/images/menuIcons/icon-check.svg' />
              <BTopBarCertikText>
                Certik Audit
              </BTopBarCertikText>
            </CerticTextWrapper>
          </BWidgetBoxWrapper>
        </div>
  )
}

export default BSidebarWidgets


