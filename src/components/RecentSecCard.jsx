import React from 'react';

function Card({ data }) {
  return (
    <div className="horizontalcards card mb-3 ">
      <div className="row no-gutters">
        <div className="col-md-4 ">
          <img
            className="card-img  "
            width="100%"
            height="100%"
            src={
              data.urlToImage !== null
                ? data.urlToImage
                : 'https://ak4.picdn.net/shutterstock/videos/14402014/thumb/1.jpg'
            }
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body ">
            <h4 className="card-title">{data.title + '. . .'}</h4>
            <p className="card-text content-color">
              {data.content !== null
                ? data.content + '. . .'
                : 'Click below to read about it.'}
            </p>

            <p className=" text-right ">
              <a className="linkstyle" href={data.url}>
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
