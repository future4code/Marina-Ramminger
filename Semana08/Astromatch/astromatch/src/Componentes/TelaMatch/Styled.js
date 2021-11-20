import styled from "styled-components"


export const MatchContainer= styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 400px;
border: 1px solid black;
padding: 10px;
margin: 10px;

button {
    width: 200px;
    height: 32px;
    font-size: 1rem;
    display: flex;
align-items: center;
    & + button {
        margin-left: 10px;
        margin-top: 10px; 
    }
}
`


export const Container= styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 500px;
height: 100%auto;
border: 3px solid black;
padding: 10px;
margin-bottom: 10px;

img {
width: 100px;
height: 100px;
}

button {
    width: 200px;
    height: 32px;
    font-size: 1rem;
    display: flex;
align-items: center;
    & + button {
        margin-left: 10px
    }
}
`