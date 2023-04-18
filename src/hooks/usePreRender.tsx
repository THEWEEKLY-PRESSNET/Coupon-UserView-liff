import { useState, useEffect } from "react";

export const usePreRender = (PreRender, Render) => {
  const [Elm, setElm] = useState(PreRender);

  useEffect(() => {
    setElm(Render);
  }, []);

  return Elm;
};

export default usePreRender;
