import styled from 'styled-components'

export const SwiperWrapper = styled.div`
  width: 100%;

  @media (min-width: 375px) and (max-width: 450px) {
     height: 340px;
  }
`
export const SliderWrapper = styled.div`
  width: 100%;
  z-index: 5;
  position: relative;
  display: flex;
  justify-content: space-between;
`
export const SliderWrapperImage = styled.img`
  position: relative;
  box-sizing: border-box;
  height: 232px;
  top: 10px;
  z-index: 1;

@media (width: 375px) {
   left: 37px;
   top: 39px;
   width: 200px;
   height: 142px;
}

@media (min-width: 376px) and (max-width: 450px) {
   left: 37px;
   top: 31px;
   width: 200px;
   height: 142px;
}

@media (min-width: 451px) and (max-width: 670px) {
   width: 240px;
   height: 162px;
   margin-bottom: 12px;
   left: 40px;
} 

@media (min-width: 671px) and (max-width: 992px) {
   top: 9px;
   left: 20px;
}

@media(min-width: 993px) and (max-width: 1095px) {
   top: 1px;
   left: 20px;
   width: 280px;
   height: 182px;
}

`

export const SliderTitleWrapper = styled.div`
    max-width: 600px;
    height: max-content;

  >h1 {
    position: relative;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    line-height: 53px;
    color: #4A5A72;
    z-index: 6;

    @media (min-width: 375px) and (max-width: 450px) {
       position: absolute;
      width: auto;
      font-size: 24px;
      line-height: 26px;
    }
    
    @media (min-width: 451px) and (max-width: 670px) {
       position: absolute;
       font-size: 24px;
       line-height: 28px;
       width: 90%;
    }
    
    @media (min-width: 671px) and (max-width: 992px) {
       position: absolute;
      font-size: 34px;
      line-height: 38px;
      width: 80%;
    }

    @media (min-width: 993px) and (max-width: 1240px) {
       font-size: 36px;
       line-height: 42px;
       width: 120%;
    }
  }
  
  >h3 {
    position: relative;
    margin-top: 15px;
    margin-right: 90px;
    color: #9F9FB8;
    font-family: Urbanist;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 28px;
    z-index: 6;

    @media (min-width: 375px) and (max-width: 450px) {
       position: absolute;
       margin-right: 0px;
       top: 48px;
       font-size: 14px;
       line-height: 18px;
       width: 52%;
    }

    @media (min-width: 451px) and (max-width: 670px) {
      position: absolute;
      margin-right: 0px;
      top: 50px;
      font-size: 16px;
      line-height: 18px;
      width: 55%;
   }

    @media (min-width: 671px) and (max-width: 992px) {
      position: absolute;
      top: 70px;
      font-size: 18px;
      line-height: 22px;
      width: 50%;
      margin-right: 0px;
    }

    @media (min-width: 993px) and (max-width: 1240px) {
      margin-top: 10px;
      font-size: 18px;
      line-height: 22px;
      width: 100%;;
    }
  }
`

