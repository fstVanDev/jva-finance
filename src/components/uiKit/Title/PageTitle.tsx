import styled from 'styled-components'

const PageTitle = styled.div`
max-width: 550px;
background: white;
padding: 24px;
border-radius: 14px;
box-shadow: 0px 2px 12px -8px rgba(25,19,38,0.1),0px 1px 1px rgba(25,19,38,0.05);
margin: auto;
justify-content: space-between;


  > h1 {
    font-family: 'Kanit' !important;
    font-weight: 700;
    font-size: 1.4em;
    color: #23439c;

    @media (min-width: 992px) and (max-width: 1300px) {
      font-size: 1.4em;
      line-height: 28px;
    }

    @media (min-width: 375px) and (max-width: 992px) {
      padding-top: 20px;

      font-size: 18px;
      line-height: 29px;
    }
  }

  > h2 {
     font-family: 'Kanit' !important;
      color: #23439c !important;
      font-size: 1em !important;
      color: #23439c;

    @media (min-width: 375px) and (max-width: 992px) {
      font-size: 14px;
      line-height: 17px;
    }

    b {
      font-weight: normal;

      color: #ffbf00;
    }
  }

  & > h1 + h2 {
    margin-top: 15px;
  }

  & > h2 + button {
    margin-top: 20px;
  }

  @media (max-width: 1300px) {
   margin: 20px;
  }
`

export default PageTitle
