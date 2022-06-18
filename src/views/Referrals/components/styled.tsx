import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const ContentBox = styled.div`
  min-height: 120px;
  min-width: 320px;

  display: flex;
  flex-direction: column;

  justify-content: center;

  padding: 30px;

  border-radius: 10px;
//   border: 1px solid #e2e6f3;

  background: #ffffff;
  box-sizing: border-box;

  color: #4a5a72;

  @media (max-width: 1310px) {
    min-width: 300px;
  }

  @media (max-width: 1260px) {
    min-width: 280px;
  }

  @media (max-width: 1190px) {
    min-width: 240px;
  }

  @media (max-width: 1060px) {
    min-width: 200px;

    padding: 25px 15px;
  }
`
