import styled from 'styled-components'

export const BWidgetBox = styled.div`
  margin-top: 30px;
  background: #EAEDF8;
  border: 1px solid #E2E6F3;
  box-sizing: border-box;
  border-radius: 10px;
  padding-bottom: 20px;
`

export const BWidgetBoxWrapper = styled.div`
  @media (min-width: 375px) and (max-width: 992px) {
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }
`

export const CerticTextWrapper = styled.div`
  display: none;
  @media (min-width: 375px) and (max-width: 992px) {
    margin-top: 30px;
    display: flex;
    align-content: center;
    & img {
      height: 20px;
    }
  }
`

export const BWidgetBoxRMBPrice = styled.div`
  margin-top: 30px;
  background: #EAEDF8;
  border: 1px solid #E2E6F3;
  box-sizing: border-box;
  border-radius: 10px;
  padding-bottom: 20px;
  @media (min-width: 375px) and (max-width: 992px) {
    width: 140px;
    height: 50px;
    display: flex;
    align-items: center;
  }
`

export const BWidgetBoxTitle = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-family: Urbanist;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #4A5A72;
  @media (min-width: 375px) and (max-width: 992px) { 
    text-align: left;
    margin-left: 20px;
  }
`

export const BWidgetSection = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  align-items: center;

  @media (min-width: 375px) and (max-width: 992px) {
    justify-content: space-between;
  }
`
