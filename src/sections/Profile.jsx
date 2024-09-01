import { ProfileSwiper } from '../components';
import {
  aboutImg,
  aboutFlowerImg,
  aboutHeartImg,
  aboutBubbleImg,
  aboutArrowImg,
} from '../assets/images';

const Profile = () => {
  return (
    <section id="profile" className="relative w-full overflow-hidden">
      <div className="container py-[3.75rem] w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
        <div>
          <div className="w-full flex items-baseline justify-center lg:justify-start mb-6">
            <h1 className="font-Baskerville italic text-5xl text-dark-green whitespace-nowrap text-center lg:text-start">
              About{' '}
              <span className="font-Roboto not-italic font-black text-6xl bg-gradient-to-r from-purple-400 to-primary bg-clip-text text-transparent">
                BINI
              </span>
            </h1>
            <div className="max-w-[3.75rem] ml-2">
              <img src={aboutFlowerImg} alt="pink-flower" />
            </div>
          </div>
          <p className="font-Roboto text-dark-green max-w-[65ch] lg:max-w-[50ch] text-center lg:text-start">
            Filipino pop phenomenon BINI features 8 multi-talented members,
            <strong>
              Aiah, Colet, Maloi, Gwen, Stacey, Mikha, Jhoanna, and Sheena.
            </strong>{' '}
            The girls have quickly become the biggest female Filipino artist in
            history, and second biggest artist overall in the Philippines,
            holding both the #1 & #2 spots on the top Filipino music charts
            simultaneously with the hits “Salamin, Salamin” and “Pantropiko.”
            <br />
            <br />
            BINI's sound is shaped by homegrown artists and global sensations
            alike. On the heels of their unprecedented growth in socials and in
            streaming listenership (30M +), the girls recently sold out their
            “BINIverse” tour in record-breaking time, and have been heralded as
            one of Teen Vogue's 2024 Girl Groups to watch!
          </p>
        </div>

        <div className="relative w-full">
          <div className="relative max-w-[23.75rem] m-auto">
            <img
              src={aboutImg}
              alt="bini-group-photo"
              className="rounded-2xl my-16"
            />
            <div className="absolute bottom-0 right-[-1.25rem] sm:right-[-3.75rem] z-[-1] w-[15.625rem] h-[21.875rem] xs:w-[21.875rem] xs:h-[28.125rem] bg-yellow-600/25 rounded-[50%] blur-2xl"></div>
            <div className="absolute top-[-1.25rem] sm:top-[-1.875rem] right-[-1.25rem] z-[-1] w-[15.625rem] h-[15.625rem] bg-red-600/35 rounded-[50%] blur-2xl"></div>
            <div className="absolute bottom-[2.188rem] left-[-6.25rem] z-[-1] w-[15.625rem] h-[15.625rem] bg-purple-600/25 rounded-[50%] blur-2xl"></div>

            <div className="absolute bottom-[-3.125rem] xs:bottom-[-4.375rem] left-[1.875rem] z-[-1] w-[12.5rem] h-[12.5rem] xs:w-[15.625rem] xs:h-[15.625rem] bg-blue-400/65 rounded-[50%] blur-2xl"></div>
          </div>
        </div>
      </div>

      <div className="w-[90%] lg:max-w-[77.5rem] mx-auto z-10">
        <div className="w-full flex items-baseline justify-center mb-[2rem] sm:mb-[4rem]">
          <h2 className="font-Baskerville italic text-dark-green text-3xl xs:text-4xl whitespace-nowrap text-center">
            Pick your{' '}
            <span className="font-Roboto not-italic font-black text-4xl xs:text-5xl bg-gradient-to-r from-purple-400 to-primary bg-clip-text text-transparent">
              BIAS!
            </span>
          </h2>
          <div className="relative bottom-[-1.5rem] left-0 max-w-[5rem] hidden sm:block">
            <img src={aboutArrowImg} alt="arrow" />
          </div>
        </div>

        <div className="relative mx-2">
          <ProfileSwiper />
          <div className="hidden xs:block absolute left-[-0.125rem] top-0 z-[1] h-full w-[6.25rem] bg-gradient-to-r from-white to-transparent"></div>
          <div className="hidden xs:block absolute right-[-0.125rem] top-0 z-[1] h-full w-[6.25rem] bg-gradient-to-l from-white to-transparent"></div>

          <div className="swiper-button-prev "></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
      <div>
        <img
          src={aboutHeartImg}
          alt="heart"
          className="absolute top-[64.375rem] lg:top-[30.875rem] left-[-21.75rem] xl:left-[-6.875rem] max-w-[24.75rem] z-[-1]"
        />
      </div>
      <div>
        <img
          src={aboutBubbleImg}
          alt="bubble"
          className="absolute top-[50rem] lg:top-[24.375rem] right-[-23.75rem] lg:right-[-5.625rem] max-w-[30.25rem] z-[-1] opacity-20 blur-sm rotate-90"
        />
      </div>
    </section>
  );
};

export default Profile;
