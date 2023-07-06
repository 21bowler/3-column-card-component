import React from "react";
import sedans from './images/icon-sedans.svg';
import suvs from './images/icon-suvs.svg';
import luxury from './images/icon-luxury.svg';

const columncard = () => {
  return (
    <div className="container my-4 w-3/5 rounded-xl flex flex-col  md:flex-row">
      <div className="sedans rounded-t-xl p-6 bg-brightOrange md:rounded-l-xl rounded-tr-none">
        <div className="image">
          <img src={sedans} alt="sedan-icon" />
        </div>
        <h1 className="text-transparentWhitePar my-4">SEDANS</h1>
        <p className="text-transparentWhitePar mb-8">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="bg-transparentWhitePar rounded-full px-3 py-2 mt-8 text-brightOrange hover:text-transparentWhitePar hover:bg-transparent hover:border border-white-600">Learn More</button>
      </div>

      <div className="suvs p-6 bg-darkCyan">
        <div className="image">
          <img src={suvs} alt="icon-suvs" />
        </div>
        <h1 className="text-transparentWhitePar my-4">SUVS</h1>
        <p className="text-transparentWhitePar mb-8">
          Take an SUV for its spacious interior, power, and versatility.Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button className="bg-transparentWhitePar px-3 py-2 rounded-full mt-8 text-darkCyan hover:bg-transparent hover:text-transparentWhitePar hover:border border-white">Learn More</button>
      </div>

      <div className="luxury p-6 rounded-b-xl bg-veryDarkCyan md:rounded-r-xl rounded-bl-none">
        <div className="image">
          <img src={luxury} alt="icon-luxury" />
        </div>
        <h1 className="text-transparentWhitePar my-4">LUXURY</h1>
        <p className="text-transparentWhitePar mb-11">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="bg-transparentWhitePar rounded-full px-3 py-2 mt-4 text-veryDarkCyan hover:bg-transparent hover:text-transparentWhitePar hover:border border-white-600">Learn More</button>
      </div>
    </div>
  );
};

export default columncard;
