import { eventCardDetails } from '../constants';
import { EventCard } from '../components';
import { locationPin } from '../assets/images';

const Events = () => {
  return (
    <section id="events" className="w-full overflow-hidden">
      <div className="container py-[3.75rem]">
        <h1 className="font-Roboto font-bold text-5xl text-center capitalize text-dark-green mb-[2rem] sm:mb-[3.5rem]">
          events
        </h1>
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-10">
          {eventCardDetails.map((event) => (
            <EventCard
              key={event.eventTitle}
              day={event.day}
              date={event.date}
              monthYear={event.monthYear}
              poster={event.poster}
              eventTitle={event.eventTitle}
              location={event.location}
            />
          ))}
          <div className="hidden lg:block absolute bottom-[-3.125rem] right-[-2.5rem] w-28">
            <img src={locationPin} alt="location-pin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
