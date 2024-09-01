import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { ProfileCard } from '../components';
import { profileDetails } from '../constants';

const ProfileSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          865: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1080: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1335: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {profileDetails.map((member) => (
          <SwiperSlide key={member.nickname}>
            <ProfileCard
              backPic={member.backPic}
              frontPic={member.frontPic}
              nickname={member.nickname}
              fullname={member.fullname}
              birthdate={member.birthdate}
              color={member.color}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProfileSwiper;
