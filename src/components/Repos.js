import React from "react";
import { Spring } from "react-spring/renderprops";
function RepoCards(props) {
  function durationTimer(key) {
    return key * 75;
  }
  return (
    <Spring
      from={{ opacity: 0, marginTop: 50, marginRight: -500 }}
      to={{ opacity: 1, marginTop: 0, marginRight: 0 }}
      config={{ delay: durationTimer(props.timer), duration: 500 }}
    >
      {props => (
        <div className="repoText" style={props}>
          <p> {}</p>
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
