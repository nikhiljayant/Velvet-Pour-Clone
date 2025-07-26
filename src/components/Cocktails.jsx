import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../constants";

import MenuItem from "./MenuItem";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline.from("#c-left-leaf", {
      x: -100,
      y: 100,
    });
    parallaxTimeline.from("#c-right-leaf", {
      x: 100,
      y: 100,
    });
  });

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
