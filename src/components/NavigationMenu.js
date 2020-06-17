import React from "react";
import Link from "./Link";

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <div className="navigation-menu-left-items">
        <div className="link">
          <Link link="Les news" />
        </div>
        <div className="link">
          <Link link="Les sorties" />
        </div>
        <div className="link">
          <Link link="L'agenda" />
        </div>
        <div>
          <Link link="Les dossiers" />
        </div>
      </div>

      <Link link="Contactez-nous" />
    </div>
  );
};

export default NavigationMenu;
