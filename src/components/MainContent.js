import React from "react";
import Item from "./Item";

const MainContent = () => {
  return (
    <div className="columnLeft">
      <div className="columnLeftFirst">
        <Item
          title="Tremblez !"
          subtitle="Le retour de Galactus"
          picture={<img alt="Galactus" src="/assets/galactus.jpg" />}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed augue et turpis tempor tempus. Morbi at vulputate dui. Nunc pulvinar dictum est, ac volutpat velit accumsan id. Morbi maximus mattis nisi, in commodo nisi iaculis nec. Nulla dictum erat ac rhoncus mattis. Nulla odio metus, euismod vitae aliquet vel, malesuada sed orci. Vivamus semper luctus ultricies. Maecenas in lacus ut ante facilisis rhoncus. Proin ut arcu venenatis, convallis libero in, faucibus justo. Fusce imperdiet, augue vel sollicitudin tincidunt, dui odio fermentum neque, aliquet ornare orci diam vehicula purus. Donec id odio pulvinar, vehicula nulla non, finibus tortor. Phasellus cursus sodales malesuada. Duis eu faucibus tortor. Quisque lobortis est vel dolor blandit, eu aliquet urna congue. Aliquam ac nunc felis. Maecenas porttitor eros a ipsum volutpat suscipit."
        ></Item>
      </div>
      <div>
        <Item
          title="Daredevil court toujours"
          subtitle="Le justicier aveugle revient"
          picture={<img alt="Daredevil" src="/assets/daredevil.jpg" />}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed augue et turpis tempor tempus. Morbi at vulputate dui. Nunc pulvinar dictum est, ac volutpat velit accumsan id. Morbi maximus mattis nisi, in commodo nisi iaculis nec. Nulla dictum erat ac rhoncus mattis. Nulla odio metus, euismod vitae aliquet vel, malesuada sed orci. Vivamus semper luctus ultricies. Maecenas in lacus ut ante facilisis rhoncus. Proin ut arcu venenatis, convallis libero in, faucibus justo. Fusce imperdiet, augue vel sollicitudin tincidunt, dui odio fermentum neque, aliquet ornare orci diam vehicula purus. Donec id odio pulvinar, vehicula nulla non, finibus tortor. Phasellus cursus sodales malesuada. Duis eu faucibus tortor. Quisque lobortis est vel dolor blandit, eu aliquet urna congue. Aliquam ac nunc felis. Maecenas porttitor eros a ipsum volutpat suscipit."
        ></Item>
      </div>
    </div>
  );
};

export default MainContent;
