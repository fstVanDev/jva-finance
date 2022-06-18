import styled from 'styled-components'

export const ContentWrapper = styled.div`
  height: auto;
  margin: 20px;
`

export interface BButtonProps {
   size?: 'sm' | 'block'
   isCancel?: boolean
}

export const BButton = styled.button<BButtonProps>`
  height: 40px;
  width: ${({ size }) => (size === 'sm' ? '140px' : '100%')};
  background: ${({ isCancel }) => (isCancel ? 'white' : '#FB075F')};
  border: ${({ isCancel }) => (isCancel ? 'solid 2px !important' : '')};
  border-color: ${({ isCancel }) => (isCancel ? '#4A5A72' : '')};
  border-radius: 8px;
  box-sizing: border-box;
  padding: 0px 25px 0px 25px;
  font-family: Urbanist;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${({ isCancel }) => (isCancel ? '#4A5A72' : '#FFFFFF')};
  border: none;
  cursor: pointer;

  &:disabled {
    background: grey;
    color: white;

    cursor: default;
  }
`

export const ContentDivider = styled.div`
  height: 2px;
  width: 100%;
  background: #f5f6fa;
`

export const AvatarGroup = styled.div`
  display: flex;
  position: relative;
  min-width: 90px;

  @media (min-width: 375px) and (max-width: 992px) {
     justify-content: center;
  }
 `


export const AvatarGroupWrapperFirst = styled.div`
  z-index: 5;
  border-style: inset;
  border-radius: 50%;
  border-width: 0px 4px 0px 0px;
  border-color: white;
  background-color: #fff;
`

export const AvatarGroupWrapperSecond = styled.div`
  position: relative;
  z-index: 3;
  left: -10px;
`

export const AvatarGroupFirst = styled.img`
  width: 40px;
  height: 40px;

  @media (min-width: 375px) and (max-width: 992px) {
     width: 35px;
     height: 35px;
  }
`

export const AvatarGroupSecond = styled.img`
  width: 40px;
  height: 40px;

   @media (min-width: 375px) and (max-width: 992px) {
     width: 35px;
     height: 35px;
  }
`

interface FlexBoxProps {
   justify?: 'center' | 'between'
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;

  ${({ justify }) => justify === 'center' && `justify-content: center;`};
  ${({ justify }) => justify === 'between' && `justify-content: space-between;`};
`

export const FlexAuto = styled.div`
 display: flex;
 justify-content: space-between;
`
