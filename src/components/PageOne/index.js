import { Image } from "antd";
import style from "./pageOne.module.css";
import logoImage from "../assets/png/0120.png"; // Replace with the actual path to your logo image

const PageOne = () => {
  return (
    <div className={style.pageOne}>
    

      <Image
              src={logoImage}
              alt="Logo"
              preview={false}
            />
   
    </div>
  );
};

export default PageOne;
