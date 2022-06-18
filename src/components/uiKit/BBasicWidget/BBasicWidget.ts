import styled from 'styled-components'

export const BBasicWidget = styled.div<any>`

  margin-top: 30px;
  padding: 30px;
  width:  ${(props) => (props.width)};
  height: 283px;
  background: ${(props) => (props.background ? props.background : '#FFFFFF')};
  border: 1px solid #E2E6F3;
  box-sizing: border-box;
  border-radius: 20px;

  @media (min-width: 375px) and (max-width: 992px) {
    margin-bottom: 30px;
    padding: 20px;
    width: 100%;
    height: ${(props) => (props.height ? props.height : '283px')};
  }
`

export const BBasicWidgetContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BBasicWidgetBigWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 375px) and (max-width: 992px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const BBasicWidgetMainTitle = styled.h1`
  font-family: Urbanist;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #4A5A72;
  @media (min-width: 375px) and (max-width: 992px) {
    margin-bottom: 10px;
  }
`

export const BBasicWidgetHeaderTitle = styled.h3`
  font-family: Urbanist;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #9F9FB8;
`

export const SmallWidget = styled.div`
  width: 40%;
  height: 100%;
  background: linear-gradient(308.42deg, #914BBA 0%, #1A53A0 100%);
  border-radius: 12px;
  padding: 20px;
  @media (min-width: 375px) and (max-width: 992px) {
    width: 90%;
    height: 227px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

export const BBasicWidgetBigContentWrapper = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 375px) and (max-width: 992px) {
    width: 100%;
  }
`

export const BBasicWidgetBigMainContentWrapper = styled.div`
  width: 60%;
  @media (min-width: 375px) and (max-width: 992px) {
    width: 90%;
  }
`

export const SmallWidgetContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SmallWidgetHeaderBlock = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
`

export const SmallWidgetHeaderAvatarImage = styled.img`
  height: 70px;
`

export const SmallWidgetHeaderActivityBlock = styled.div`
  background: #FFFFFF;
  border-radius: 10px;
  width: 70px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
`
export const SmallWidgetMainTitle = styled.h1`
  font-family: Urbanist;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #FFFFFF;
`

export const SmallWidgetHeaderTitle = styled.h3`
  font-family: Urbanist;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
`

export const SmallWidgetMiddleTitle = styled.h3`
  font-family: Urbanist;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  margin-bottom: 13px;
`

export const TopFarmWidgetMainText = styled.h1`
  font-family: Urbanist;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #FB075F;
`

export const TopFarmWidgetHeaderBlock = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
`

export const TopFarmWidgetHeaderHot = styled.div`
  position: relative;
  top: -10px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Urbanist;
  width: 50px;
  height: 20px;
  background: #FB075F;
  border-radius: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
`

export const TopFarmWidgetHeaderTitle = styled.h1`
  font-family: Urbanist;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #4A5A72;
`

export const TopFarmWidgetHeaderSubtitle = styled.h3`
  font-family: Urbanist;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #909090;
`
