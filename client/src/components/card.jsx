import { Link } from "react-router-dom";

export const Card = (props) => {
  const { title, img, id, shortDesc } = props.post;

  return (
    <div className="flex flex-col gap-4">
      <Link to={`/post/${id}`}>
        <h2 className="text-center font-bold">{title}</h2>
        <img src={img} alt={title} />
        <p>{shortDesc}</p>
        <button type="button" className="bg-slate-400 px-4 py-2 rounded-lg">
          Read more
        </button>
      </Link>
    </div>
  );
};
