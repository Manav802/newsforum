import React from 'react';

function InterestSecCard({data}) {
  return (
      
    <div className="col-sm-4 ">
     <div className="interestseccard card ">

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
          <h6 className=" text-color-light" >{data.title.slice(0, 100) + '. . .'}</h6>
        </div>
        <div className="card-body ">
        <p className="cardtext content-color">
              {data.content !== null
                ?data.content.slice(0, 100) + '. . .'
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

// function InterestSecCard({ data }) {
//   return (
//     <div className="col-sm-4">
//       <div className="interestseccard card ">
//         <img
//          className="card-img  "
//             width="100%"
//             height="100%"
//             src={
//               data.urlToImage !== null
//                 ? data.urlToImage
//                 : 'https://ak4.picdn.net/shutterstock/videos/14402014/thumb/1.jpg'}
//         ></img>
//         <div className="card-header">
//           <h4 className="text-color-light">{data.title + '. . .'}</h4>
//         </div>
//         <div className="card-body text-light">
//           <p className="card-text">{data.content !== null
//                 ? data.content + '. . .'
//                 : 'Click below to read about it.'}</p>
//                 <p className=" text-right ">
//               <a className="linkstyle" href={data.url}>
//                 Read more...
//               </a>
//             </p>
//         </div>
//       </div>
//     </div>
//   );
}
export default InterestSecCard;
