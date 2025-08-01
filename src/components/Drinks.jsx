import { useRef, useState } from "react";

import { drinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Drinks = () => {
  const contentRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 1, xPercent: -100 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" }
    );
  }, [currentIndex]);

  const handleGoToSlide = (index) => {
    const newIndex = (index + drinks.length) % drinks.length;
    setCurrentIndex(newIndex);
  };

  const handleGetDrinkAt = (indexOffset) => {
    return drinks[(currentIndex + indexOffset + drinks.length) % drinks.length];
  };

  const currentDrink = handleGetDrinkAt(0);
  const prevDrink = handleGetDrinkAt(-1);
  const nextDrink = handleGetDrinkAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {drinks.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={item.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => handleGoToSlide(index)}
            >
              {item.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left cursor-pointer"
            onClick={() => handleGoToSlide(currentIndex - 1)}
          >
            <span>{prevDrink.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left cursor-pointer"
            onClick={() => handleGoToSlide(currentIndex + 1)}
          >
            <span>{nextDrink.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentDrink.image} className="" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentDrink.name}</p>
          </div>

          <div className="details">
            <h2>{currentDrink.title}</h2>
            <p>{currentDrink.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drinks;
