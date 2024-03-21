import React from "react";

import "./Header.scss";

const Header = ({title}: {title: string}) => {
  return (
    <header className="header">
      <h2 className="header__message">
        {title}
      </h2>
    </header>
  );
};

export default Header;