import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Subscribe = () => {
  return (
    <section id="subscribe" className="w-full overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-14 pt-[3.75rem] pb-[8.75rem]">
        <div className="font-Roboto text-dark-green text-center lg:text-start">
          <p className="text-2xl xs:text-4xl font-Baskerville italic">
            Stay updated with
          </p>
          <p className="text-[2.125rem] xs:text-5xl md:text-6xl font-bold text-dark-green text-nowrap">
            BINI's Newsletter!
          </p>
          <p className="text-sm w-full lg:w-[58ch]  xs:mt-4">
            Subscribe for the updates on new releases, ticket pre-sales, and
            exclusive events from BINI.
          </p>
        </div>

        <div>
          <form className="flex flex-col justify-center gap-5 h-full">
            <div className="flex flex-col md:flex-row md:justify-between gap-5">
              <label htmlFor="subscribe-field" className="w-full">
                <input
                  id="subscribe-field"
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 rounded-lg shadow-sm border border-dark-green/40 outline-none text-lg font-Roboto focus:border-primary"
                />
              </label>
              <label htmlFor="subscribe-btn">
                <input
                  id="subscribe-btn"
                  type="submit"
                  value="Join Now"
                  className="w-full h-full bg-gradient-to-r from-purple-400 to-primary p-2 px-7 rounded-lg text-white font-semibold shadow-md hover:shadow-lg cursor-pointer transition duration-150 ease-in-out"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                />
              </label>
            </div>
            <div className="font-Roboto text-sm text-gray-500 flex items-start gap-2 mx-1">
              <div className="relative w-5 h-5 cursor-pointer">
                <input
                  id="check-subsription"
                  type="checkbox"
                  className=" cursor-pointer appearance-none w-5 h-5 border border-primary rounded-sm peer"
                />
                <FaCheck className="w-4 h-4 text-primary transition absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1] opacity-0 peer-checked:opacity-100" />
              </div>

              <label htmlFor="check-subsription">
                I confirm that I have read and agree to{' '}
                <Link
                  to={'https://bini.abs-cbn.com/terms'}
                  target="_blank"
                  className="font-bold text-dark-green hover:text-primary transition duration-200 ease-in-out"
                >
                  Terms & Conditions
                </Link>{' '}
                &{' '}
                <Link
                  to={'https://www.abs-cbn.com/privacyinternational'}
                  target="_blank"
                  className="font-bold text-dark-green hover:text-primary transition duration-200 ease-in-out"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
