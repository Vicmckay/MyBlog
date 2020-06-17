import React from "react";
import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = (props) => {
  return (
    <div className="item">
      <ItemTitle itemTitle={props.title}></ItemTitle>

      <ItemSubtitle itemSubtitle={props.subtitle}></ItemSubtitle>

      <ItemPicture itemPicture={props.picture}></ItemPicture>

      <ItemDescription itemDescription={props.description}></ItemDescription>
    </div>
  );
};

export default Item;
