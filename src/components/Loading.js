import styled from "styled-components";
import { SyncLoader } from "react-spinners";
const LdContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
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
