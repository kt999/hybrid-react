import { BrowserRouter } from "react-router-dom";
import RootRoute from "./routes";
import styled from "styled-components";

import './reset.css';
const App = () => {
  return (
    <RootWrap>
      <BrowserRouter>

        <RootRoute />

      </BrowserRouter>
    </RootWrap>
  );
}


const RootWrap = styled.div`
  position: absolute;
  top:0;
  bottom:0;

  width:100%;
  max-width:500px;

  left:50%;
  transform:translate(-50%,0);
  
  background-color:#f7f7f7;

  overflow:hidden;
`;

export default App;
