// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
// } from "@material-tailwind/react";
// import './Movies.css'; // Importing CSS file for custom styles

// export const MoviesCard = () => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       <Card className="mt-6 w-64 m-2"> {/* Adjusted card width and added margin */}
//         <CardHeader color="blue-gray" className="relative h-40"> {/* Adjusted card header height */}
//           <img className="rounded-img"
//             src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
//             alt="img"
//           />
//         </CardHeader>
//         <CardBody>
//           <Typography variant="h5" color="blue-gray" className="mb-2">
//             2019
//           </Typography>
//           <Typography>
//             The place is close to Barceloneta Beach and bus stop just 2 min by
//             walk and near to &quot;Naviglio&quot; where you can enjoy the main
//             night life in Barcelona.
//           </Typography>
//         </CardBody>
//       </Card>
      

//       <Card className="mt-6 w-64 m-2"> {/* Adjusted card width and added margin */}
//         <CardHeader color="blue-gray" className="relative h-40"> {/* Adjusted card header height */}
//           <img className="rounded-img"
//             src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
//             alt="img"
//           />
//         </CardHeader>
//         <CardBody>
//           <Typography variant="h5" color="blue-gray" className="mb-2">
//             UI/UX Review Check
//           </Typography>
//           <Typography>
//             The place is close to Barceloneta Beach and bus stop just 2 min by
//             walk and near to &quot;Naviglio&quot; where you can enjoy the main
//             night life in Barcelona.
//           </Typography>
//         </CardBody>
//       </Card>


//       <Card className="mt-6 w-64 m-2"> {/* Adjusted card width and added margin */}
//         <CardHeader color="blue-gray" className="relative h-40"> {/* Adjusted card header height */}
//           <img className="rounded-img"
//             src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
//             alt="img"
//           />
//         </CardHeader>
//         <CardBody>
//           <Typography variant="h5" color="blue-gray" className="mb-2">
//             UI/UX Review Check
//           </Typography>
//           <Typography>
//             The place is close to Barceloneta Beach and bus stop just 2 min by
//             walk and near to &quot;Naviglio&quot; where you can enjoy the main
//             night life in Barcelona.
//           </Typography>
//         </CardBody>
//       </Card>

//       <Card className="mt-6 w-64 m-2"> {/* Adjusted card width and added margin */}
//         <CardHeader color="blue-gray" className="relative h-40"> {/* Adjusted card header height */}
//           <img className="rounded-img"
//             src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
//             alt="img"
//           />
//         </CardHeader>
//         <CardBody>
//           <Typography variant="h5" color="blue-gray" className="mb-2">
//             UI/UX Review Check
//           </Typography>
//           <Typography>
//             The place is close to Barceloneta Beach and bus stop just 2 min by
//             walk and near to &quot;Naviglio&quot; where you can enjoy the main
//             night life in Barcelona.
//           </Typography>
//         </CardBody>
//       </Card>
//       {/* Add more cards here if needed */}
//     </div>
//   );
// };









import React, { useState } from "react";
import demoPic from "../../assets/demoPic.jpg";
import { MdLocalMovies, MdBookmark, MdBookmarkBorder } from "react-icons/md";
import card from "./movie.module.css";

const MoviesCard = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <>
      <div className={card.cardContainer}>
        <div className={card.imageContainer}>
          {isBookmarked ? (
            <MdBookmark className={card.bookmarkIcon} onClick={toggleBookmark} />
          ) : (
            <MdBookmarkBorder className={card.bookmarkIcon} onClick={toggleBookmark} />
          )}
          <img src={demoPic} alt="img" />
        </div>
        <div className={card.totalContent}>
          <div className={card.content}>
            <div className="year">
              2019<span className={card.dot}>.</span>
            </div>
            <div className={card.dynamicIcon}>
              <MdLocalMovies />
            </div>
            <div className="icon-type">
              <span className={card.dot}>.</span>Movie
              <span className={card.dot}>.</span>
            </div>
            <div className="type">PG</div>
          </div>
          <div className={card.movieName}>Pushpa</div>
        </div>
      </div>
    </>
  );
};

export default MoviesCard;
