import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

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
