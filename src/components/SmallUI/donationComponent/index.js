import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Drawer } from "antd";
import { LiaDonateSolid } from "react-icons/lia";


const DonationComponent = () => {
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
        <LiaDonateSolid style={{ fontSize: "24px" }} />{" "}
      </div>
      <Drawer
        title="Donat"
        placement={"bottom"}
        onClose={onClose}
        open={open}
        width={"50%"}
        key={"right"}
      >
       
      </Drawer>
    </>
  );
};
export default DonationComponent;
