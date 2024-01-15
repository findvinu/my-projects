import React, { createContext, useEffect, useState } from "react";
import { githubApiURl } from "../../public/api";

export const GitContext = createContext();

const GitContextProvider = (props) => {
  const [gitData, setGitData] = useState();

  useEffect(() => {
    fetch(githubApiURl)
      .then((res) => res.json())
      .then((resData) => setGitData(resData));
  }, []);

  return (
    <GitContext.Provider value={{ gitData }}>
      {props.children}
    </GitContext.Provider>
  );
};

export default GitContextProvider;
