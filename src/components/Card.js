import React from 'react';

const Card = ({ id, name, email }) => {//using function not class here. To show robots from robots.js file use props now
  //const { name, email, id } = props; //also ecmascript6 sintax applayng props so not need type ${props.id} in img tag or {props.name} in h2 ect.
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />{/* sintax from ecmascript6 */}
      <div>
        <h2>{name}</h2>{/*javascript expresions is in brackets*/}
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;