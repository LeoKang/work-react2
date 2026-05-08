import "./Viewer.css";
import { emotionList } from "../util";

const Viewer = ({ content, emotionId }) => {
  const emotionItem = emotionList.find((it) => it.id === emotionId);
  console.log(emotionItem);

  return <div className="Viewer"></div>;
};
export default Viewer;
