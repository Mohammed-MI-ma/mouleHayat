import style from "./pageOne.module.css";

const PageOne = () => {
  return (
    <div className={style.pageOne}>
      <canvas className={style.canvas}></canvas>
    </div>
  );
};

export default PageOne;
