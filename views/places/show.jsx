const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <img className="showPage" src={`/${data.place.pic}`} alt={data.place.name} />
        <h2 className="description">Description</h2>
        <p className="description-details">
          {data.place.name} is locaated in {data.place.city}, {data.place.state} and serves {data.place.cuisines}
        </p>
        <hr />
        <div>
          <h2 className="comments">Comments</h2>
          <p>No comments yet !!!</p>
        </div>
        <hr />
        <div className="ratingP">
          <p>
            <h2 className="rating">Rating:</h2>
            <h2 className="ratingDetails">Not Yet Rated</h2>
          </p>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
