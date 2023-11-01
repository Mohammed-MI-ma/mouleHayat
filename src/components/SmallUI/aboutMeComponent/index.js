import React, { useState } from "react";

import { Drawer } from "antd";
import { SiInformatica } from "react-icons/si";

const AboutMeComponent = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div onClick={(e) => showDrawer()}>
        <SiInformatica style={{ fontSize: "24px" }} />{" "}
      </div>
      <Drawer
        title="Profile"
        placement={"right"}
        onClose={onClose}
        open={open}
        width={"100%"}
        key={"right"}
      ></Drawer>
    </>
  );
};
export default AboutMeComponent;
