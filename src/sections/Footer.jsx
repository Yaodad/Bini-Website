import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { navLinks } from '../constants';
import { biniLogo } from '../assets/images';
import { FaFacebook, FaTiktok, FaSpotify, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill, RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary">
        <div className="max-w-[86rem] mx-auto my-0 px-[1.563rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 md:gap-0 py-8 font-Roboto border-b border-white">
            <NavLink
              to={'/'}
              className="justify-self-center md:justify-self-start"
            >
              <img src={biniLogo} alt="logo" width={45} />
            </NavLink>

            <nav className="justify-self-center">
              <ul className=" flex space-x-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.id}
                      className="text-white  text-[0.813rem] xs:text-sm font-medium leading-6 text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="justify-self-center md:justify-self-end flex items-center gap-2 text-white">
              <button className="cursor-pointer text-accent ">
                <Link
                  to="https://www.instagram.com/bini_ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <RiInstagramFill size={23} />
                  </i>
                </Link>
              </button>
              <button className="cursor-pointer text-accent ">
                <Link
                  to="https://web.facebook.com/BINIph.official/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaFacebook size={20} />
                  </i>
                </Link>
              </button>
              <button className="cursor-pointer text-accent ">
                <Link
                  to="https://www.tiktok.com/@bini_ph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaTiktok size={20} />
                  </i>
                </Link>
              </button>
              <button className="cursor-pointer text-accent ">
                <Link
                  to="https://open.spotify.com/artist/7tNO3vJC9zlHy2IJOx34ga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaSpotify size={20} />
                  </i>
                </Link>
              </button>
              <button className="cursor-pointer text-accent ">
                <Link
                  to="https://x.com/BINI_ph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <RiTwitterXFill size={20} />
                  </i>
                </Link>
              </button>
              <button className="cursor-pointer text-accent ">
                <Link
                  to="https://www.youtube.com/channel/UCtOcDBKgyr-f50SgbMErFkQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaYoutube size={23} />
                  </i>
                </Link>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6 font-Roboto text-white text-center text-sm font-bold text-nowrap py-8">
            <div className="justify-self-center order-2 md:order-first lg:justify-self-start font-normal text-lg md:text-sm lg:text-lg text-white/85">
              <p>
                Designs by{' '}
                <span className="hover:text-purple-700 cursor-pointer transition duration-200 ease-in-out">
                  <Link to={'https://www.tiktok.com/@juno.mov'} target="_blank">
                    juno.mov
                  </Link>
                </span>{' '}
                &{' '}
                <span className="hover:text-purple-700 cursor-pointer transition duration-200 ease-in-out">
                  <Link
                    to={'https://www.tiktok.com/@tinebricenio'}
                    target="_blank"
                  >
                    tinebricenio
                  </Link>
                </span>
              </p>
            </div>
            <div className="justify-self-center flex gap-5">
              <Link
                to={'https://bini.abs-cbn.com/terms'}
                target="_blank"
                className="hover:text-accent"
              >
                {' '}
                Terms and Conditions
              </Link>
              <Link
                to={'https://www.abs-cbn.com/privacyinternational'}
                target="_blank"
                className="hover:text-accent"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
