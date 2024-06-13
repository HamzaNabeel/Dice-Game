import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    h1 {
        font-size: 100px;
        line-height: 100px;
        margin: 0;
    }
    p{
        font-size: 24px;
        font-weight: 500;
        margin: 0;
    }

    @media (max-width: 750px) {
      max-width: 100px;
      
      h1{
        font-size: 50px;
        font-weight: 400
      }

      p{
        font-size: 18px;
        font-weight: 400;
      }
      
    }

`