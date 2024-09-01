import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EventCard = ({ day, date, monthYear, poster, eventTitle, location }) => {
  return (
    <div className="overflow-hidden relative max-w-[23.75rem] bg-white shadow-lg rounded-2xl">
      <div className="absolute top-3 right-3 bg-white/90 shadow-md rounded-lg px-3 py-1 uppercase text-center text-[0.813rem] text-dark-green/65 font-semibold">
        <p>{day}</p>
        <p className="text-2xl font-bold text-dark-green/95 tracking-tighter">
          {date}
        </p>
        <p>{monthYear}</p>
      </div>
      <div>
        <img
          src={poster}
          alt="poster"
          className="object-cover object-center rounded-t-2xl "
        />
      </div>
      <div className="flex flex-col justify-between font-Roboto text-dark-green/65 text-sm p-5">
        <div className="h-[4.375rem]">
          <h2 className="font-bold text-2xl text-dark-green/95 line-clamp-2">
            {eventTitle}
          </h2>
          <p className="line-clamp-1">{location}</p>
        </div>
        <div>
          <Link
            to={'https://web.facebook.com/starmusicph'}
            target="_blank"
            className="group max-w-24 flex items-center gap-1 mt-7 "
          >
            <p>See details</p>
            <i className="group-hover:translate-x-3 transition-all duration-150 ease-in-out">
              <FaLongArrowAltRight />
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
