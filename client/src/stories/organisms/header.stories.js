import React from "react";

import { Header } from "../../ui/organisms/header";

export default {
  title: "Organisms/Header",
};

export const header = () => (
  <>
    <Header />
    <div className="page-overlay hidden"></div>
  </>
);
