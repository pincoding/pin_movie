import { useEffect, useState } from "react";
import { discover, list02 } from "../../api";

export const List = () => {
  const [cdata02, setcdata02] = useState();
  const [disdata, setDisdata] = useState();

  useEffect(() => {
    (async () => {
      try {
        const list02Data = await list02();
        const { results } = await discover();
        setDisdata(results);

        setcdata02(list02Data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(cdata02);
  console.log(disdata && disdata.map((data) => data.backdrop_path));
  console.log(disdata && disdata.map((data) => data.genre_ids));

  return <div>리스트</div>;
};
