import styled from 'styled-components'

export const BLayoutDiv = styled.div`
  width: 100%;
  background-color: #fff;
`

export const BLayoutContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  background-color: #fff;
  @media (min-width: 375px) and (max-width: 992px) {
    display: grid;
    
  }
`

export const BLayoutContentWrapper = styled.div`
  margin: 75px 25px 5px 5px;
  box-sizing: border-box;
  border-radius: 40px;
  background: #EAEDF8;
  background-image: url('/images/background.png');
  width: 100%;
  bottom: 90px;
  z-index: 10;
  @media (min-width: 375px) and (max-width: 992px) {
    background-image: unset;
    width: auto;
    margin: 10px 10px 10px 10px;
  }
 
`
export const BLayoutContentDiv = styled.div`

`

