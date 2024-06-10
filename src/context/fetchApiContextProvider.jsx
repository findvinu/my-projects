import React, { createContext, useEffect, useState } from "react";
import { githubApiURl } from "../api";

export const GitContext = createContext();

const GitContextProvider = (props) => {
  const [gitData, setGitData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(githubApiURl);
        if (response.ok) {
          const data = await response.json();
          setGitData(data);
        } else {
          console.error(
            "Failed to fetch data from GitHub API:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching data from GitHub API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <GitContext.Provider value={{ gitData }}>
      {props.children}
    </GitContext.Provider>
  );
};

export default GitContextProvider;
