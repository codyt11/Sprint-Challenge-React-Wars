// Write your Character component here
import React from "react";
import styled from 'styled-components';


const Character = (props) => {
    const { characters } = props;

        const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 2%;
    border: 1px solid black;
    border-radius: 6px;
    background-color: yellow;
    font-size: 1.8rem;
    width: 50%;
    margin: 2.5% auto;

    `;
 
    
    return (
        <div className = "app">
          {characters.map(character => {
              return(
                <StyledDiv key={character.id}>
                  <h2>{character.name}</h2>
                  <p>{character.status}</p>
                  <img src={character.image} alt={`${character.name}'s face`}/>
                </StyledDiv>
              )
            }
          )}
          </div>
    )
    }


export default Character;
