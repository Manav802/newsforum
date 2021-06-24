import React, { createContext, useEffect, useState } from 'react';

export const NewsContext = createContext();
export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var url =
      'http://newsapi.org/v2/top-headlines?country=in&apiKey=5ba33b83af9d4febab7e05a05f983793';
    var req = new Request(url);
    fetch(req)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [data]);
  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
