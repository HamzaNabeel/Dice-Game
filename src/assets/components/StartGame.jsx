import React from 'react'
import styled from 'styled-components'
import { Button } from '../../styled/Button'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div className='img_container'>
        <img src="/images/dices.png" alt="dice_img" />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
            <p></p>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
max-width: 1180px;
height: 100%;
display: flex;
margin: 0 auto;
align-items: center;


.content{
    h1{
        margin: 0;
        font-size : 96px;
        white-space: nowrap;
    }
}

@media (max-width: 750px) {
  flex-wrap: wrap;

  .content{
    h1{
      
      font-size: 50px;
    }
  }

  .img_container{
    img{
      width: 100%;
    }
  }
}

`;
