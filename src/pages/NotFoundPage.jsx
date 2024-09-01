import { NavLink } from 'react-router-dom';
import { DocumentTitle } from '../components';
import { biniLogoBlack, rareMaloi } from '../assets/images';

const NotFoundPage = () => {
  DocumentTitle('Error 404 (Not Found) • BINI | Unofficial Website | BINI');
  const path = window.location.pathname;

  return (
    <main>
      <div className="flex flex-col md:flex-row justify-center items-center px-4 my-28 gap-10">
        <div className="text-[0.938rem] max-w-[18.75rem]">
          <NavLink to={'/'}>
            <img src={biniLogoBlack} alt="logo" width={150} />
          </NavLink>
          <p className="font-bold my-[1.375rem]">
            404.
            <span className="text-light-gray font-normal">
              &nbsp;That's an error.
            </span>
          </p>
          <p>
            The requested URL&nbsp;
            <span className="whitespace-nowrap text-primary">
              {path.substring(0, 18)}
            </span>
            &nbsp;was not found on this server.
            <span className="text-light-gray">&nbsp;That's all we know.</span>
          </p>
        </div>
        <div className="w-[6.5rem]">
          <img
            src={rareMaloi}
            alt="dancing-maloi"
            className="hidden md:flex object-cover w-full h-full"
          />
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
