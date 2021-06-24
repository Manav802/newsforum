import React, { useEffect, useState } from 'react';
import SqrCards from './SqrCards';
import InterestSection from "../InterestSection";

export function Business() {
  
    var url1 =
    'http://newsapi.org/v2/everything?q=business&apiKey=5ba33b83af9d4febab7e05a05f983793';
    var req = new Request(url1 );
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
 
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">

      {news
     ? news.map((news) => < SqrCards data={news} key={news.url} />)
       : 'loading'}
          
       
      </div>
      </div>
    </div>
  
    );
  }

  export function Sports() {
  
    var url2 =
    'http://newsapi.org/v2/everything?q=sports&apiKey=5ba33b83af9d4febab7e05a05f983793';
    var req = new Request(url2 );
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
 
      <div className="row row-cols-md-4 ">

      {news
     ? news.map((news) => < SqrCards data={news} key={news.url} />)
       : 'loading'}
          
       
      </div>
      </div>
    </div>
  
    );
  }
  
  export function Technology() {
  
    var url3 =
    'http://newsapi.org/v2/everything?domains=techcrunch.com&q=technology&apiKey=5ba33b83af9d4febab7e05a05f983793';
    var req = new Request(url3 );
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
 
      <div className="row row-cols-md-4 ">

      {news
     ? news.map((news) => < SqrCards data={news} key={news.url} />)
       : 'loading'}
          
       
      </div>
      </div>
    </div>
  
    );
  }

  export function World() {
  
    var url4 =
    'http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5ba33b83af9d4febab7e05a05f983793';
    var req = new Request(url4 );
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
 
      <div className="row row-cols-md-4 ">

      {news
     ? news.map((news) => < SqrCards data={news} key={news.url} />)
       : 'loading'}
          
       
      </div>
      </div>
    </div>
  
    );
  }
 