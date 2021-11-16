import React from "react";
import "./bio.scss";
import Footer from "../../components/footer/footer";

const Bio = () => {
  return (
    <div className="bioWrapper">
      <div className="bioCoreWrapper">
        <h1>Cristiano Ronaldo Biography</h1>
        <ul>
          <li>Name – Cristiano Ronaldo</li>
          <li>Full Name – Cristiano Ronaldo dos Santos Aveiro</li>
          <li>Nick Name – The Sultan Of The Stepover</li>
          <li>Birthday – 5 February 1985</li>
          <li>Age – 36 Years (as in 2021)</li>
          <li>Nationality – Portuguese</li>
          <li>Zodiac/Sun Sign – Aquarius</li>
          <li>Born In – Santo António, Portugal</li>
          <li>Profession – Football Player, Sports Persons</li>
        </ul>
        <h1>Cristiano Ronaldo Physical Stats & More</h1>
        <ul>
          <li>Height – 188 cm (in feet inches- 6’2″)</li>
          <li>Weight – 83 kg (in pounds- 183 lbs)</li>
          <li>
            Body Measurements – Chest: 43 Inches, Waist: 33 Inches, Biceps: 14
            Inches
          </li>
          <li>Eye Colour – Dark Brown</li>
          <li>Hair Colour – Light Brown</li>
        </ul>
        <h1>Cristiano Ronaldo won awards</h1>
        <p>Cristiano Ronaldo has won lots of awards and recognitions.</p>
        <ul>
          <li>
            In 2008, Ronaldo won the FIFA World Player of the Year Award. [1]
          </li>
          <li>
            Cristiano Ronaldo holds the record for being the highest scorer in
            the history of Real Madrid with 338 goals.
          </li>
          <li>
            Forbes magazine ranked him the world’s highest-paid athlete in 2016
            and 2017.
          </li>
        </ul>

        <p>
          Cristiano Ronaldo is “the most charitable athlete” for the massive
          amounts of money he donated to different charity foundations.
        </p>
        <p>Cristiano Ronaldo Net worth is $500 Million dollars.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Bio;
