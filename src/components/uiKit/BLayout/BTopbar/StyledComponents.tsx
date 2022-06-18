import styled from 'styled-components'
import React from 'react'
import { useWalletModal } from '@pancakeswap-libs/uikit'

export const BTopBarDiv = styled.div`
  position: absolute;
  padding-left: 250px;
  margin: 0;
  top: 0;
  height: 70px;
  background-color: #fff;
  width: 100%;
  @media (min-width: 375px) and (max-width: 992px) {
    padding-left: 0;
    position: sticky;
    z-index: 12;
  }
`

export const BTopBarContainer = styled.div`
  padding-left: 10px;
  padding-right: 30px;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 375px) and (max-width: 992px) {
    position: relative;
  }
`

export const BTopBarLinks = styled.div`
  display: flex;
  @media (min-width: 375px) and (max-width: 992px) {
    display: none;
  }
`

export const BTopBarActions = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  @media (min-width: 375px) and (max-width: 992px) {
    display: none;
  }
`

export const BTopBarLinkIcon = styled.img`
  width: 26px;
  height: 26px;
`

export const BTopBarLink = styled.a`
  margin-right: 30px;
  @media (min-width: 375px) and (max-width: 992px) {
    margin-right: 0;
  }
`

export const BTopBarMobileLogo = styled.img`
  display: none;
  @media (min-width: 375px) and (max-width: 992px) {
    display: block;
    margin-left: 10px;
    height: 40px;
  }
`

export const BTopBarCertikText = styled.span`;
  text-align: center;
  font-family: Urbanist;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-right: 30px;
  @media (min-width: 375px) and (max-width: 992px) {
    margin: 0;
  }
`
export const BTopBarCertikImage = styled.img`
  margin-right: 10px;
`

export const BTopBarConnectWalletButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  width: 160px;
  height: 40px;
  background: linear-gradient(270deg, #914BBA 0%, #1A53A0 100%);
  border-radius: 8px;
  font-family: Urbanist;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #FFFFFF;

  @media (min-width: 375px) and (max-width: 992px) { 
    margin-top: 15px;
    margin-bottom: 15px;
    height: 40px;
    width: 100%;
  }
`
export const BTopBarWalletConnectedButton = styled.button`
  cursor: pointer;
  background: none;
  width: 160px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #E2E6F3;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: Urbanist;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #4A5A72;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 26px;
    height: 24.46px;
    margin-right:  5px;
  }
  @media (min-width: 375px) and (max-width: 992px) { 
    margin-top: 15px;
    margin-bottom: 15px;
    height: 40px;
    width: 100%;
  }
`
export const BMobileSidebarBottomLinks = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`

interface ReturnType {
   onPresentConnectModal: () => void;
   onPresentAccountModal: () => void;
}

const BLoginButton = (props) => {
   const { account, login, logout } = props;
   const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
   const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;

   // console.log(account, 123)
   return !account ? (
      <BTopBarConnectWalletButton onClick={onPresentConnectModal}>
         Connect Wallet
      </BTopBarConnectWalletButton>
   ) : (
      <BTopBarWalletConnectedButton onClick={onPresentAccountModal}>
         <img src='/images/menuicons/wallet_authorized.png' alt='' />
         {accountEllipsis}
      </BTopBarWalletConnectedButton>
   )
}

export default BLoginButton
