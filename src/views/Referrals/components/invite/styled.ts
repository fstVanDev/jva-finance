import styled from 'styled-components'

export const Card = styled.div`
  max-width: 320px;

  font-family: Urbanist;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;

  @media (max-width: 1310px) {
    max-width: 300px;
 margin: auto 20px auto 20px;
    font-size: 18px;
    line-height: 23px;
  }

  @media (max-width: 1260px) {
    max-width: 300px; 
  }

  @media (max-width: 1190px) {
    max-width: 300px;
  }

  @media (max-width: 1060px) {
    max-width: 300px;
  }

  @media (max-width: 992px) {
    max-width: 300px;
   
    font-size: 18px;
    line-height: 23px;
  }
`

export const CardContent = styled.div`
  position: relative;

  margin-bottom: 30px;

  width: 100%;
  min-height: 300px;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

//   border: 1px solid #e2e6f3;
  border-radius: 10px;

  background: #ffffff;

  @media (max-width: 1060px) {
    min-height: 280px;
  }
`

export const Badge = styled.div`
  position: absolute;

  top: 0;
  left: 30px;

  width: 30px;
  height: 40px;

  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  color: #4a5a72;
  background: #fade32;
`

export const InviteCardImg = styled.img`
  width: 200px;
  height: 100px;

  margin-top: 40px;
  margin-bottom: 20px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));

  @media (max-width: 1060px) {
    width: 150px;
    height: 75px;
  }
`

export const InviteTitle = styled.div`
  margin-bottom: 15px;

  font-weight: bold;

  color: #4a5a72;
`

export const InviteSubTitle = styled.div`
  padding: 0 30px;

  font-size: 18px;
  line-height: 22px;
  text-align: center;

  color: #9f9fb8;

  @media (max-width: 1060px) {
    font-size: 14px;
    line-height: 16px;

    padding: 0 15px;
  }
`

export const Description = styled(InviteSubTitle)`
  margin-bottom: 25px;

  padding: 0;

  text-align: justify;

  @media (max-width: 1310px) {
    font-size: 16px;
    line-height: 18px;

    margin-bottom: 15px;
  }

  @media (max-width: 1060px) {
    font-size: 14px;
    line-height: 16px;

    margin-bottom: 10px;
  }
`

export const ReadMore = styled.a`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  color: #fb075f;

  @media (max-width: 1310px) {
    font-size: 16px;
    line-height: 18px;
  }
`
