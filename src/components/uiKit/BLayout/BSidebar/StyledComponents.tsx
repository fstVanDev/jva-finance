import styled from 'styled-components'

interface ButtonProprs {
   isActive?: boolean;
}

interface ExpandIconProps {
   isActive?: boolean;
}

export const BSidebarLogo = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  outline : none;
  
  @media (min-width: 375px) and (max-width: 992px) {
    display: flex !important;
    align-content: center;
    align-items: center;
    justify-content: center;
    & img {
      height: 100px;
      outline : none;
    }
  }
`

export const BSidebarMenuSection = styled.div`
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  @media (min-width: 375px) and (max-width: 992px) {
    margin: 10px;
    padding-bottom: 50px;
  }
  
`
export const BSidebarMenuButtonDiv = styled.button<ButtonProprs>`
  border: none;
  background: none;
  margin-top: 5px;
  font-family: Urbanist;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  width: 100%;
  height: 50px;
  background:${props => props.isActive ? '#EAEDF8' : 'White'};
  border: ${props => props.isActive ? '1px solid #E2E6F3;' : 'Unset'}
  box-sizing: ${props => props.isActive ? 'border-box' : 'Unset'};;
  border-radius: ${props => props.isActive ? '10px;' : 'Unset'};
  color: #4A5A72;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  &:hover { cursor: pointer }
  @media (min-width: 375px) and (max-width: 992px) {
    background:${props => props.isActive ? '#EAEDF8' : '#F5F6FA'};
  }
`

export const BSidebarMenuButtonContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const BSidebarDiv = styled.div`
  position: relative;
  z-index: 9999;
  height: 100vh;
  min-width: 250px;
  background-color: #fff;
  @media (min-width: 375px) and (max-width: 992px) {
    display: none;
  }
`
export const BSidebarMenuButtonIcon = styled.img<ExpandIconProps>`
  margin-right: 15px;
  height: 30px;
  width: auto;
  filter:  ${props => props.isActive ? 'invert(95%) sepia(53%) saturate(268%) hue-rotate(177deg) brightness(96%) contrast(89%)' : ''};
`
export const BSidebarMenuButtonExpander = styled.img<ExpandIconProps>`
  margin-right: 15px;
  width: 6px;
  height: auto;
  transform:  ${props => props.isActive ? 'rotate(60deg)' : 'rotate(0)'};
`

export const BSidebarExpandedArea = styled.div<ExpandIconProps>`
`

export const ExchangeImage = styled.img`
    width: 30px;
    height: 30px;
  `
export const ExchangeLeftInfo = styled.div`
  height: 31px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 42px;
  & h1 {
    font-family: Urbanist;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #4A5A72;
  }
  & span {
    font-family: Urbanist;
    font-style: normal;
    font-weight: bold;
    font-size: 8px;
    line-height: 10px;
    color: #9F9FB8;

  }
`
export const ExchangeRightInfo = styled.div`
  height: 34px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  text-align: right;
  & h1 {
    font-family: Urbanist;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 14px;
    color: #4A5A72;
  }
  & span {
    font-family: Urbanist;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    color: #FB075F;
  }
`
export const BWidgetPriceImage = styled.img`
  height: 30px;
  width: auto;
`
export const BWidgetPriceInfo = styled.div`
  margin-left: 15px;
  & h1 {
    font-family: Urbanist;
    font-style: normal;
    font-weight: bold;
    font-size: 8px;
    line-height: 10px;
    color: #9F9FB8;
  }
  & span {
    margin-top: 3px;
    font-family: Urbanist;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;  
    color: #4A5A72;
  }
`
