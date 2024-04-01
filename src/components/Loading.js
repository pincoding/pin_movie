import styled from "styled-components";
import { SyncLoader } from "react-spinners";
const LdContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loadings = () => {
  return (
    <LdContainer>
      <SyncLoader size={"10px"} color={"#00A7F6"} />
    </LdContainer>
  );
};
