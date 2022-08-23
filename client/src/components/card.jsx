import { Link } from "react-router-dom";

export const Card = (props) => {
  const { title, img, id, shortDesc } = props.post;

  return (
    <div className="flex flex-col gap-4 border border-slate-300 p-3 rounded-lg my-4">
      <Link to={`/post/${id}`}>
        <h2 className="text-center font-bold mb-4 uppercase">{title}</h2>
        <div className="w-full">
          <img className="w-[100%]" src={img} alt={title} />
        </div>
        <p className="mt-2 text-justify">{shortDesc}</p>
        <button type="button" className="mt-3 w-[100%] block bg-slate-400 px-4 py-2 rounded-lg font-bold text-white hover:text-slate-400 hover:border hover:border-slate-400 hover:bg-white">
          Read more
        </button>
      </Link>
    </div>
  );
};
