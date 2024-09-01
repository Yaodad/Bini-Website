import { useState } from 'react';

const ProfileCard = ({
  backPic,
  frontPic,
  nickname,
  fullname,
  birthdate,
  color,
}) => {
  const [flipCard, setFlipCard] = useState(false);

  return (
    <div
      className="relative sm:w-full max-w-[12.688rem] h-[17.563rem] rounded-3xl mx-auto cursor-pointer"
      onClick={() => {
        setFlipCard(!flipCard);
      }}
    >
      <div
        className={`${
          flipCard ? '[transform:rotateY(-180deg)]' : ''
        } [transform-style:preserve-3d] rounded-3xl shadow-md w-full h-full transition-all duration-300 ease-linear`}
      >
        <div className="[backface-visibility:hidden] w-full h-full rounded-3xl absolute top-0 left-0">
          <img
            src={backPic}
            alt="back of card"
            className="object-cover rounded-3xl w-full h-full"
          />
        </div>
        <div className="[backface-visibility:hidden] [transform:rotateY(-180deg)] w-full h-full absolute top-0 left-0 rounded-3xl">
          <img
            src={frontPic}
            alt={nickname}
            className="object-cover rounded-3xl w-full h-full"
          />
          <div
            className={`absolute bottom-[-1rem] left-[50%] translate-x-[-50%] w-[80%] h-[8rem] ${color} rounded-[50%] blur-xl xs:blur-2xl opacity-70  xs:opacity-100`}
          ></div>
          <div className="absolute bottom-0 left-0 w-full h-[13rem] rounded-b-3xl bg-gradient-to-t from-black/75 to-transparent"></div>
          <div className="absolute bottom-5 left-5 w-full font-Roboto text-white/90 text-[0.813rem] leading">
            <p
              className={`${color} bg-clip-text text-transparent font-Baskerville font-normal text-3xl uppercase italic before:content-['BINI'] before:text-white/85 before:font-Roboto before:text-sm before:font-bold before:not-italic before:absolute before:top-[-0.875rem] before:left-[-0.313rem]`}
            >
              {nickname}
            </p>
            <p className={`my-[-0.188rem]`}>{fullname}</p>
            <p>{birthdate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
