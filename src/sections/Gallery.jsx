import { Grid } from '../components';
import { galleryImages } from '../constants';
import { galleryChery, gallerySlime } from '../assets/images';

const Gallery = () => {
  return (
    <section id="gallery" className="w-full overflow-hidden">
      <div className="relative py-20">
        <div className="flex justify-center font-Roboto font-bold text-5xl text-center capitalize text-dark-green mb-[2.5rem] sm:mb-[3.5rem]">
          <h1>Photo Gallery</h1>
          <div className="hidden xs:block w-14 rotate-[-30deg] translate-x-[-0.625rem]">
            <img
              src={galleryChery}
              alt="star-outline"
              className="object-cover"
            />
          </div>
        </div>
        <Grid galleryImages={galleryImages} />
        <div className="hidden sm:block absolute bottom-0 sm:left-[-18rem] lg:left-[-11.875rem] w-[27.5rem] rotate-[-10deg] transition-all ease-in-out select-none">
          <img
            src={gallerySlime}
            alt="slime"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
