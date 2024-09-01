import { heroVideo } from '../assets/videos';

const Hero = () => {
  return (
    <section>
      <div>
        <video
          className="w-full object-cover aspect-[4/6] md:aspect-video"
          src={heroVideo}
          autoPlay
          muted
          loop
        />
      </div>
    </section>
  );
};

export default Hero;
