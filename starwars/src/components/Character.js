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
    width: 40%;
    margin: 2.5% auto;

    `;
    const Name = styled.h2`
    color: purple;
    `;
    const Status = styled.p`
    color: green;
    `;
    const StatusD = styled.p`
    color: red;
    `;
 
    
        return( 
                <div className = "app">
                    {characters.map(character => {
                        if (character.status === 'Alive'){
                        return(
                            <StyledDiv key={character.id}>
                            <Name>{character.name}</Name>
                            <Status>{character.status}!</Status>
                            <img src={character.image} alt={`${character.name}'s face`}/>
                            </StyledDiv>
                        )}
                        
                        else {
                            return( 
                                <StyledDiv key={character.id}>
                                <Name>{character.name}</Name>
                                <StatusD>{character.status}...</StatusD>
                                <img src={character.image} alt={`${character.name}'s face`}/>
                                </StyledDiv>
                            )}
                        }
                    )
                    }
                    </div>
                
        )}
    
    


export default Character;
