import { dummyData } from "../db/data";
import { Card } from "../components/card";

export const Home = () => {
  return (
    <div className="flex gap-3 justify-between mt-4">{
        dummyData.map((item) => {
            return <Card key={item.id} post={item} />
        })
    }</div>);
};
