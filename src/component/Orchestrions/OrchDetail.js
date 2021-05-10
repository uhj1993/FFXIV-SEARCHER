import React from "react";
import { useParams } from "react-router-dom";

let OrchDetail = ({ posts }) => {
  let { id } = useParams();
  let OrchPost = posts.find(function (item) {
    return item.id == id;
  });
  return (
    <main>
      <div>{OrchPost.id}</div>
      <div className="orch-card">
        <div className="card-head">
          <div className="img-box">
            <img src={OrchPost.icon} alt="#" />
          </div>
          <h3>{OrchPost.number}</h3>
          <h3>{OrchPost.name}</h3>
        </div>
        <div className="card-body lists">
          <div className="orch-info list">
            <ul>
              <li>
                <span className="no">카테고리: </span>
                {OrchPost.category.name}
              </li>
              <li>
                <span className="no">패치: </span>
                {OrchPost.patch}
              </li>
              <li>
                <span className="no">획득처: </span>
                {OrchPost.description}
              </li>
            </ul>
            <hr></hr>
            <h4>샘플곡</h4>
            <audio controls controlsList="nodownload">
              <source
                src={`https://www.garlandtools.org/files/orchestrion/${OrchPost.id}.ogg`}
                type="audio/ogg"
              />
            </audio>
            <h4>
              출처:
              <a
                href="http://www.garlandtools.org/db/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Garland Tools
              </a>
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrchDetail;