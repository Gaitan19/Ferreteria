import { CCarousel, CCarouselItem } from '@coreui/react';
import React from 'react';
import Card from './card';

import { picturesImages } from '@/constants/pictures';

const Carrusel = () => {
  const renderPictures = () => {
    return picturesImages.map((picture) => {
      return (
        <CCarouselItem key={picture.id}>
          <div className="Carrusel-item">
            <Card
              text="Add dark property to the CCarousel for darker controls, indicators, and captions."
              picture={picture.pictureImage[0].image}
            />
            <Card
              text="Add dark property to the CCarousel for darker controls, indicators, and captions."
              picture={picture.pictureImage[1].image}
            />
          </div>
        </CCarouselItem>
      );
    });
  };

  return (
    <CCarousel controls className="Carrusel" dark interval={false}>
      {renderPictures()}
      {/* <CCarouselItem>
        <div className="Carrusel-item">
          <Card text="Add dark property to the CCarousel for darker controls, indicators, and captions." />
          <Card
            text="Add dark property to the CCarousel for darker controls, indicators, and captions."
            picture="/picture2.png"
          />
        </div>
      </CCarouselItem>

      <CCarouselItem>
        <div className="Carrusel-item">
          <Card
            text="Add dark property to the CCarousel for darker controls, indicators, and captions."
            picture="/picture3.png"
          />
          <Card
            text="Add dark property to the CCarousel for darker controls, indicators, and captions."
            picture="/picture4.png"
          />
        </div>
      </CCarouselItem>

      <CCarouselItem>
        <div className="Carrusel-item">
          <Card
            text="Add dark property to the CCarousel for darker controls, indicators, and captions."
            picture="/picture2.png"
          />
          <Card text="Add dark property to the CCarousel for darker controls, indicators, and captions." />
        </div>
      </CCarouselItem> */}
    </CCarousel>
  );
};

export default Carrusel;
