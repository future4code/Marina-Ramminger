import React from "react";
import { Button} from "@material-ui/core";
import styled from "styled-components"
import LabedditLogo from "../assets/logo.labeddit.png";


const Logo = styled.img`
  height: 3rem;
  margin: 0.5rem;
`
// const HeaderContainer = styled.div`
// display: flex; 
// background-color: #ec6137;
// flex-direction: row;
// justify-content: space-between;
// `
export const BotãoHeader = styled(Button)`
background-color: #44535c;
color:#44535c;
font-size: larger; 
width: 150px;
text-shadow:none;
width:80vw;
max-width:200px;
margin-top: 30px; 
`
const Header = () => {
  return (

     <div>
              <Logo src={LabedditLogo} />
            <BotãoHeader>
            
          <Button><strong>LOGIN</strong></Button>
        
  </BotãoHeader>
          </div>

         
  );
}

export default Header;