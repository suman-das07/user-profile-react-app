import React from 'react'
import { UserRoundPlus } from "lucide-react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  // console.log(props.name)
  return (
    <>
      <div className="card">
        <img
          src={props.user.image}
          alt=""
        />
        <div className="name">
          <h1>{props.user.name}</h1>
          <p>{props.user.role}</p>
          <div className="cta">
            <button>
              <UserRoundPlus size={15} /> Follow
            </button>
            <Bookmark size={30} id="save" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card
