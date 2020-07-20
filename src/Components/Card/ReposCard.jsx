import React from 'react';
import ForkIcon from '../Icons/ForkIcon';
import StarIcon from '../Icons/StarIcon';
import ForkCountIcon from '../Icons/ForkCountIcon';
import Language from '../Languages/Language';
import FlipMove from 'react-flip-move';

// User Repositories

const ReposCard = ({
  name,
  description,
  stargazers_count,
  forks_count,
  size,
  html_url,
  language,
}) => {
  return (
    <div key={Math.random()} className="w-100 col-lg-3 col-md-4 col-sm-6">
      <a
        className="repos-card"
        href={html_url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <h4 className="name">
          <ForkIcon /> {name}
        </h4>
        <p className="description">{description}</p>
        <div className="status">
          <Language language={language} />
          <span>
            <StarIcon /> {stargazers_count}
          </span>
          <span>
            <ForkCountIcon /> {forks_count}
          </span>
          <span>{size} KB</span>
        </div>
      </a>
    </div>
  );
};

// class ReposCard extends React.Component {
//   render() {
//     return (
//       <div key={Math.random()} className="w-100 col-lg-3 col-md-4 col-sm-6">
//         <a
//           className="repos-card"
//           href={this.props.html_url}
//           rel="noopener noreferrer"
//           target="_blank"
//         >
//           <h4 className="name">
//             <ForkIcon /> {this.props.name}
//           </h4>
//           <p className="description">{this.props.description}</p>
//           <div className="status">
//             <Language language={this.props.language} />
//             <span>
//               <StarIcon /> {this.props.stargazers_count}
//             </span>
//             <span>
//               <ForkCountIcon /> {this.props.forks_count}
//             </span>
//             <span>{this.props.size} KB</span>
//           </div>
//         </a>
//       </div>
//     );
//   }
// }

export default ReposCard;
