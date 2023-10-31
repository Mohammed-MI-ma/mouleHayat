import { Image } from "antd";
import style from "./pageOne.module.css";
import PNGSequenceAnimation from "../SmallUI/PNGSequenceAnimation";

const PageOne = () => {
  return (
    <div className={style.pageOne}>
      <PNGSequenceAnimation />{" "}
    </div>
  );
};

export default PageOne;
