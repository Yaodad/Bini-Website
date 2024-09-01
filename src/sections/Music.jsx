import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  spotify,
  itunes,
  youtube,
  musicStar,
  musicHeart,
  musicDiamond,
  musicRingHeart,
  musicStarAd,
} from '../assets/images';
import { musicAlbumDetails } from '../constants';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode } from 'swiper/modules';

const Music = () => {
  const [title, setTitle] = useState('');
  const [pickedAlbumArt, setPickedAlbumArt] = useState(null);
  const [pickedAlbumVinyl, setPickedAlbumVinyl] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const [selectedLatestMusic] = musicAlbumDetails.filter(
      (index) => index !== 0,
    );

    setPickedAlbumArt(selectedLatestMusic.albumVinyl);
    setPickedAlbumArt(selectedLatestMusic.albumArt);
    setTitle(selectedLatestMusic.title);
  }, []);

  return (
    <section id="music" className="relative w-full overflow-hidden">
      <div className="container w-full py-20">
        <div className="flex justify-center font-Roboto font-bold text-5xl text-center capitalize text-dark-green mb-[2.5rem] sm:mb-[3.5rem]">
          <div className="w-14 rotate-[60deg] translate-y-[-0.625rem]">
            <img src={musicStar} alt="star-outline" className="object-cover" />
          </div>
          <h1>discography</h1>
        </div>

        <div className="w-full grid grid-cols-1 xl:grid-cols-2">
          <div className="relative w-[16.875rem] h-[16.875rem] xs:w-[18.75rem] xs:h-[18.75rem] sm:w-[25rem] sm:h-[25rem] mx-auto xl:mx-0 xl:pr-10 shadow-xl">
            <img
              src={pickedAlbumVinyl}
              alt="vinyl"
              width={500}
              height={500}
              className={`hidden md:block object-cover w-[21.875rem] absolute ${
                loaded ? 'translate-x-52 xl:translate-x-52' : 'translate-x-0'
              } top-[50%] left-2 xl:translate-x-0 translate-y-[-50%] p-3 bg-gray-100 ring-2 ring-gray-200 shadow-xl rounded-[50%] transition-all duration-500 ease-in-out`}
              onLoad={() => setLoaded(true)}
            />

            <img
              src={pickedAlbumArt}
              alt="album-art"
              width={560}
              height={560}
              className="object-cover w-[45rem] absolute top-0 left-[50%] xl:left-0 translate-x-[-50%] xl:translate-x-0 "
            />
          </div>

          <div className="font-Roboto capitalize text-[0.75rem] md:text-sm mt-7 xl:mt-0 xl:mx-4 text-dark-green">
            <div className="xl:mx-3 text-center xl:text-start my-4 xl:my-0">
              <h2 className="font-bold text-3xl">{title}</h2>
              <h3 className="font-bold text-xl">Bini</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="xl:mx-3">
                <h4 className="font-bold mt-[0.625rem]">Composer:</h4>
                <p>
                  Mart Sam Emmanuel Olavides, Angelika Samantha Ortiz, Paula
                  Patricia Chavez and Julius James” Jumbo” De Belen of FlipMusic
                </p>

                <h4 className="font-bold mt-[0.625rem]">Arranger:</h4>
                <p>Mat Olavides of FlipMusic</p>

                <h4 className="font-bold mt-[0.625rem]">Mixed & Mastered:</h4>
                <p>Mat Olavides and Jumbo De Belen of FlipMusic</p>

                <h4 className="font-bold mt-[0.625rem]">Producer:</h4>
                <p>Mat Olavides and Bojam of FlipMusic</p>
                <div className="flex justify-start items-center gap-2 mt-5">
                  <p className="text-sm md:text-lg font-Roboto font-bold italic">
                    Listen:
                  </p>
                  <Link
                    to={
                      'https://open.spotify.com/artist/7tNO3vJC9zlHy2IJOx34ga'
                    }
                    target="-blank"
                    className="w-6"
                  >
                    <i>
                      <img src={spotify} alt="spotify-icon" />
                    </i>
                  </Link>
                  <Link
                    to={'https://music.apple.com/ph/artist/bini/1542236646'}
                    target="-blank"
                    className="w-7"
                  >
                    <i>
                      <img src={itunes} alt="itunes-icon" />
                    </i>
                  </Link>
                  <Link
                    to={
                      'https://www.youtube.com/channel/UCtOcDBKgyr-f50SgbMErFkQ'
                    }
                    target="-blank"
                    className="w-7"
                  >
                    <i>
                      <img src={youtube} alt="youtube-icon" />
                    </i>
                  </Link>
                </div>
              </div>

              <div className="xl:mx-3">
                <h4 className="font-bold mt-2">Rap Written By:</h4>
                <p>
                  Ma. Nicolette Vergara, Mikhaela Janna Lim and Stacey Aubrey
                  Sevilleja of BINI
                </p>

                <h4 className="font-bold mt-[0.625rem]">Choreography by:</h4>
                <p>
                  Matthew Almodovar, Reden Blanquera, Adam Alonzo, and Michael
                  Perz
                </p>

                <h4 className="font-bold mt-[0.625rem]">Vocal Arranger:</h4>
                <p>Nica del Rosario & Jumbo De Belen of FlipMusic</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-12">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            className="myAlbumSwiper"
          >
            {musicAlbumDetails.map((music) => (
              <SwiperSlide key={music.title}>
                <div
                  className={`pt-3 mb-10 w-36 cursor-pointer scale-[1.01] shadow-md hover:translate-y-[-0.625rem] hover:shadow-xl ${music.shadow} transition-all duration-300 ease-in-out`}
                  onClick={() => {
                    setTitle(music.title);
                    setPickedAlbumArt(music.albumArt);
                    setPickedAlbumVinyl(music.albumVinyl);
                  }}
                >
                  <img
                    src={music.albumArt}
                    alt="album-art"
                    className="object-cover w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute left-[-0.063rem] r xs:left-[-0.125rem] top-0 z-[1] h-full w-[2.25rem] bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-[-0.063rem] xs:right-[-0.125rem] top-0 z-[1] h-full w-[2.25rem] bg-gradient-to-l from-white to-transparent"></div>
        </div>

        <div
          className={`relative bg-youtubeChannel bg-cover bg-no-repeat xl:bg-right w-full h-[21.875rem] mt-24 text-purple-800 text-center sm:text-start sm:pl-16 px-4 flex flex-col items-center sm:items-start justify-center gap-6 rounded-3xl shadow-sm`}
        >
          <div className="max-w-[24rem]">
            <p className="font-Baskerville italic text-5xl">
              It's
              <span className="font-Roboto font-bold not-italic text-6xl">
                {' '}
                BINI
              </span>
              's World!
            </p>
            <p className="font-Roboto text-md  mt-2 leading-4 text-sm font-medium text-purple-900/80">
              Watch the latest videos featuring BINI's music, adventures and
              more!
            </p>
          </div>
          <div>
            <Link
              to={'https://www.youtube.com/channel/UCtOcDBKgyr-f50SgbMErFkQ'}
              target="-blank"
            >
              <button className="bg-red-700 hover:bg-red-700/80 px-3 py-2 rounded-3xl text-white font-Roboto text-sm transition-all duration-300 ease-in-out shadow-lg">
                Youtube Channel
              </button>
            </Link>
          </div>
          <div className="absolute top-[-1.875rem] left-[-0.938rem] sm:left-24 hidden xs:block w-[8.125rem]">
            <img src={musicRingHeart} alt="ring-heart" />
          </div>
          <div className="absolute top-[-2rem] right-0 xs:right-8 w-[5.625rem]">
            <img src={musicDiamond} alt="diamond" />
          </div>
          <div className="absolute bottom-[-2.5rem] left-96 w-[10rem]">
            <img src={musicStarAd} alt="star" />
          </div>
        </div>
      </div>
      <div>
        <img
          src={musicHeart}
          alt="bubble"
          className="absolute top-[50rem] lg:top-[24.375rem] right-[-23.75rem] lg:right-[-8.625rem] max-w-[30.25rem] z-[-1] opacity-30 blur-sm brightness-110"
        />
      </div>
    </section>
  );
};

export default Music;
