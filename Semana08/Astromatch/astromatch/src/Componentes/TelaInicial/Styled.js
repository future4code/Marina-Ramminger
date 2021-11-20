import styled from "styled-components"

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%
`


export const Profile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 500px;
height: 100%auto;
border: 1px solid black;
padding: 10px;
margin-bottom: 10px;

img {
width: 300px;
height: 300px;
}

button {
    width: 200px;
    height: 32px;
    font-size: 1rem;
    & + button {
        margin-left: 10px
    }
}
`