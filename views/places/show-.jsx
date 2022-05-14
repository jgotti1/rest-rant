const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! 💥" : "Rave! 🥳"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <h1 className="dataPlace">{data.place.name}</h1>
        <img className="showPage" src={`${data.place.pic}`} alt={data.place.name} />
        <h2 className="description">Description</h2>
        <p className="description-details">
          {data.place.name} is locaated in {data.place.city}, {data.place.state} and serves {data.place.cuisines}
        </p>
        <hr />
        <div>
          <h2 className="comments">Comments</h2>
          {comments}
        </div>
        <hr />
        <div className="ratingP">
          <p>
            <h2 className="rating">Rating:</h2>
            <h2 className="ratingDetails">Not Yet Rated</h2>
          </p>
        </div>
        <hr />
        <div className="showButtonDiv">
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>

          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
