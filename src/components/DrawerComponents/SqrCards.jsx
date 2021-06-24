import React from 'react';

function SqrCards({data}) {
  return (
      
    <div className="col ">
      <div className="business card ">
      <div className="sqrcards">
        <img
          className="card-img-top"
          width="200px"
          height="200px"
          src={
              data.urlToImage !== null
                ? data.urlToImage
                : 'https://ak4.picdn.net/shutterstock/videos/14402014/thumb/1.jpg'
            } 
        ></img>
        <div className="card-header">
          <h4 className="card-title text-color-light">{data.title + '. . .'}</h4>
        </div>
        <div className="card-body ">
        <p className="cardtext content-color">
              {data.content !== null
                ?data.content + '. . .'
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
export default SqrCards;
