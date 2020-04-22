import React from "react";

const Card = (props) => {
   const {id,name,email} = props;
  return (
    <div className="bg-light-green dib pa3 ma2 tc br3 grow shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="Tanjim" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
