import React from "react";
import { Spring } from "react-spring/renderprops";
import js from "../img/js.png";
import html5 from "../img/html5.png";
function RepoCards({ repo, timer }) {
  function durationTimer(key) {
    return key * 75;
  }
  console.log(repo);
  return (
    <Spring
      from={{ opacity: 0, marginTop: 50, marginRight: -500 }}
      to={{ opacity: 1, marginTop: 0, marginRight: 0, info: { repo } }}
      config={{ delay: durationTimer(timer), duration: 500 }}
    >
      {props => (
        <div className="repoText" style={props}>
          {props.info.repo.language === "JavaScript" ? (
            <img className="repoImg" atl="Logo" src={js} />
          ) : (
            <img className="repoImg" atl="Logo" src={html5} />
          )}
          <div className="repoHeader">{props.info.repo.name.trim()} </div>
          <button
            className="RepoButton"
            onClick={() =>
              (window.location.href = `${props.info.repo.html_url}`)
            }
          >
            View
          </button>
        </div>
      )}
    </Spring>
  );
}

export default RepoCards;

// import React from "react";

// function Repos(props) {
//   return (
//     <div className="RepoCard">
//       <p className="RepoHeader">{props.repo.name}</p>
//       <div className="Information">
//         <p className="infoHeader">Description</p>
//         <p className="repoDescription">
//           {!props.repo.description
//             ? "No Description Listed"
//             : props.repo.description}
//         </p>
//         <p className="infoHeader">Language</p>
//         <p>{props.repo.language}</p>
//         <p className="infoHeader">Private</p>
//         <p>{props.repo.private.toString()}</p>
//         <p className="infoHeader">Owner</p>
//         <p>{props.repo.owner.login} </p>
//         <button
//           type="button"
//           id="ViewMe"
//           onClick={() => (window.location.href = `${props.repo.html_url}`)}
//         >
//           View Me
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Repos;
