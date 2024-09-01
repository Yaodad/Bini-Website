import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaTimesCircle,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { useState } from 'react';

const Grid = ({ galleryImages }) => {
  const [currentPage, setCurrectPage] = useState(1);
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  // Modal
  const handleOpenModal = (num) => {
    setSlideNumber(num);
    setOpenModal(true);
    document.body.classList.add('overflow-y-hidden');
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.classList.remove('overflow-y-hidden');
  };

  const prevSlide = () => {
    slideNumber === 1
      ? setSlideNumber(galleryImages.length)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber === galleryImages.length
      ? setSlideNumber(1)
      : setSlideNumber(slideNumber + 1);
  };

  // Pagination
  const picturesPerPage = 6;
  const lastIndex = currentPage * picturesPerPage;
  const firstIndex = lastIndex - picturesPerPage;
  const picturesDisplay = galleryImages.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(galleryImages.length / picturesPerPage);
  const numberOFNav = [...Array(numberOfPages + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrectPage(currentPage - 1);
    }
  };

  const changePage = (n) => {
    setCurrectPage(n);
  };

  const nextPage = () => {
    if (currentPage !== numberOfPages) {
      setCurrectPage(currentPage + 1);
    }
  };

  return (
    <div>
      {openModal && (
        <div className="overflow-hidden fixed top-0 bottom-0 left-0 right-0 z-[1000] bg-black/80 flex justify-center items-center w-full h-full">
          <FaChevronCircleLeft
            onClick={prevSlide}
            className="fixed top-[50%] translate-y-[-50%] left-3 sm:left-10 w-10 h-10 cursor-pointer opacity-60 text-primary z-50 hover:opacity-100"
          />
          <FaChevronCircleRight
            onClick={nextSlide}
            className="fixed top-[50%] translate-y-[-50%] right-3 sm:right-10 w-10 h-10 cursor-pointer opacity-60 text-primary z-50 hover:opacity-100"
          />
          <FaTimesCircle
            onClick={handleCloseModal}
            className="fixed top-10 right-5 sm:right-10 w-10 h-10 cursor-pointer opacity-60 text-primary z-50 hover:opacity-100"
          />
          <div className="w-[calc(100%-2.5rem)] h-[calc(100%-2.5rem)] flex justify-center items-center select-none">
            <img
              src={galleryImages.find((item) => item.num === slideNumber).img}
              alt="photo"
              className="max-w-full max-h-full pointer-events-none select-none"
            />
          </div>
        </div>
      )}

      <div className="w-full h-[31.25rem] flex overflow-x-auto select-none">
        <div className="max-w-[125rem] w-full h-full mx-auto grid-rows-3 sm:grid-rows-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 xl:gap-8">
          {galleryImages &&
            picturesDisplay.map((item, index) => (
              <div
                key={index}
                className="lg:[&:nth-last-child(3n)]:row-span-2 lg:[&:nth-last-child(3n)]:col-span-2 lg:[&:nth-child(3)]:row-start-2 lg:[&:nth-child(3)]:col-start-3 cursor-pointer hover:brightness-75 transition-all duration-300 ease-in-out rounded-lg"
                onClick={() => handleOpenModal(item.num)}
              >
                <img
                  src={item.img}
                  alt="grid-photo"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            ))}
        </div>
      </div>

      <nav>
        <ul className="flex justify-center items-center gap-2 mt-7 font-Roboto text-lg text-primary">
          <li>
            <FaChevronLeft
              onClick={prevPage}
              className="w-7 h-7 cursor-pointer"
            />
          </li>
          {numberOFNav.map((n) => (
            <li key={n}>
              <button
                className={`${
                  currentPage === n ? 'bg-primary text-white' : 'bg-transparent'
                } border-2 border-primary px-3 py-1 text-center rounded-md select-none`}
                onClick={() => {
                  changePage(n);
                }}
              >
                {n}
              </button>
            </li>
          ))}
          <li>
            <FaChevronRight
              onClick={nextPage}
              className="w-7 h-7 cursor-pointer"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Grid;
