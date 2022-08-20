import { useLocation } from "react-router-dom";
import { dummyData  } from "../db/data";

export const Post = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const post = dummyData.find(p => p.id.toString() === path);
    
    const { title, img, desc } = post;
  return (
    <div>
      <img src={img} alt={ title } />
      <h1>{ title }</h1>
      <p>{ desc }</p>
    </div>
  );
};
