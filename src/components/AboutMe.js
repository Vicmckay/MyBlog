import React from "react";
import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMeTitle">
        <ItemTitle itemTitle="About me"></ItemTitle>
      </div>
      <div className="aboutMePicture">
        <ItemPicture
          itemPicture={<img alt="Moi" src="/assets/photo_eric.JPG" />}
        ></ItemPicture>
      </div>
      <div>
        <ItemDescription itemDescription="Journaliste séries télé pendant 20 ans (Génération Séries, Episode, TéléStar, Mad Movies...) et passionné de comics depuis 40 ans. Ce blog relate mes opinions et n'engagent que moi (ericbou@hotmail.com)."></ItemDescription>
      </div>
    </div>
  );
};

export default AboutMe;
