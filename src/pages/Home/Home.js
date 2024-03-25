import { useEffect, useState } from "react";
import { upcoming } from "../../api";
import styled from "styled-components";
import { SyncLoader } from "react-spinners";

const Container = styled.div`
  height: 90vh;
  background: url(https://image.tmdb.org/t/p/original/${(props) => props.$Bg})
    no-repeat center/cover;
`;
const LdContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ConWrap = styled.div``;

export const Home = () => {
  const [upData, upDataset] = useState();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { results } = await upcoming();
      console.log(results);
      upDataset(results);
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      {Loading ? (
        <LdContainer>
          <SyncLoader size={"16px"} color={"#00A7F6"} />
        </LdContainer>
      ) : (
        <>
          {upData && (
            <Container $Bg={upData[0].backdrop_path}>
              <ConWrap>
                <h1>{upData[0].title}</h1>
                <h3></h3>
                <p></p>
              </ConWrap>
            </Container>
          )}
        </>
      )}
    </div>
  );
};
