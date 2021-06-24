

import React, { useEffect, useState } from 'react';

import InterestSecCard from './InterestSecCard';

function InterestCards() {

  var url =
    'https://newsapi.org/v2/everything?q=bitcoin&apiKey=5ba33b83af9d4febab7e05a05f983793';
  var req = new Request(url);
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(req)
      .then((res) => res.json())
      
      .then((data) => setItem(data))
      .catch((error) => console.log(error));
  }, []);
  var news = item.articles;

  console.log(news);
  return (
    <div className="container-fluid">
    <div className="page">
 
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-2">

      {news
        ? news.map((news) => <InterestSecCard data={news} key={news.url} />)
        : 'loading'}
    </div>
    </div>
    </div>
  );
}
export default InterestCards;
