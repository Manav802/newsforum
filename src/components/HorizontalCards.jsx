import React, { useEffect, useState } from 'react';

import Card from './RecentSecCard';

function HorizontalCards() {
  var url =
    'http://newsapi.org/v2/top-headlines?country=in&apiKey=5ba33b83af9d4febab7e05a05f983793';
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
    <div>
      {news
        ? news.map((news) => <Card data={news} key={news.url} />)
        : 'loading'}
    </div>
  );
}

export default HorizontalCards;
