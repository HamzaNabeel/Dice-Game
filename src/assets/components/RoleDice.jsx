import styled from 'styled-components'

const RoleDice = ({roleDice, currentDice}) => {

    

    


  return (
    <DiceContainer>
        <div className='dice'
        onClick={roleDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="dice_1" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }

    p{
        margin: 0;
        font-size: 24px;
    }
`