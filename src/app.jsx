import { h } from 'preact';
import { useState } from 'preact/hooks';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import './app.css';
import GoToTop from './assets/GoToTop';
import Card from './Card';
import Astro from './Astro';
import Virgo from './Components/Virgo';
import Leo from './Components/Leo';
import Cancer from './Components/Cancer';
import Gemini from './Components/Gemini';
import Taurus from './Components/Taurus';
import Aries from './Components/Aries';
import Libra from './Components/Libra';
import Scorpio from './Components/Scorpio';
import Sagattarius from './Components/Sagattarius';
import Capricorn from './Components/Capricorn';
import Pisces from './Components/Pisces';
import Aquarius from './Components/Aquarius';

// Modal.setAppElement('#root')

export function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [isOpen, isSetOpen] = useState(false);

  function toggleModal() {
    isSetOpen(!false);
  }

  function toggleModal2() {
    isSetOpen(false);
  }

  function getZodiacSign(day, month) {
    if ((month === 1 && day <= 19) || (month === 12 && day >= 22)) {
      return 'Capricorn';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return 'Aquarius';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return 'Pisces';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return 'Aries';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return 'Taurus';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return 'Gemini';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return 'Cancer';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return 'Leo';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return 'Virgo';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return 'Libra';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return 'Scorpio';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return 'Sagittarius';
    } else {
      return 'Invalid date';
    }
  }

  const showZodiacSign = () => {
    if (selectedDate) {
      const day = selectedDate.getDate();
      const month = selectedDate.getMonth() + 1;
      const zodiacSign = getZodiacSign(day, month);
      return (
        <strong>
          <p className="zsign">
            Your zodiac sign is:<b className="signcolor">&nbsp; {zodiacSign}</b>
            <br />
          </p>
        </strong>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div id="header1">
        <Virgo />
        <Leo />
        <Cancer />
        <Gemini />
        <Taurus />
        <Aries />
        <Libra />
        <Scorpio />
        <Sagattarius />
        <Capricorn />
        <Aquarius />
        <Pisces />
      </div>

      <div className="header2">
        <h1> 𝓴𝓪𝓻𝓶𝓪:𝓶𝓸𝓴𝓼𝓱𝓪</h1>
      </div>
      <div id="main">
        <h2>Rest. Breath. Restart</h2>
        <div class="card1">
          {/* <button onClick={() => setCount((count) => count + 1)}>
            Set BirthDate {count}
          </button> */}
          <div>
            <h3>Select Your BirthDate </h3>
            <ReactDatePicker
              name="inputvalue"
              placeholderText="select a date"
              class="date-input"
              id="input"
              dateFormat="dd-MM-yyyy"
              showYearDropdown
              showMonthDropdown
              popperPlacement="auto"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
            <p>{selectedDate && selectedDate.toISOString()}</p>
            {showZodiacSign()}
          </div>
        </div>
      </div>
      <footer>
        <p class="read-the-docs">Click on the Zodiac signs for more details</p>
      </footer>
      <div className="details">
        <h1>Astrology: Real or Not According to Science</h1>
        <p>
          People have been reading their horoscopes for decades, firmly thinking
          that the contents represent an accurate summary of who they are and
          how their lives are going.
          <hr />
        </p>
        <p>
          <b>Is Astrology Real or Not:</b> <br />
          For decades, there has been much debate about astrology and whether it
          is real. One fraction of the population believes that the position of
          the sun, moon, stars, and planets can affect people’s lives,
          positively or negatively, whereas the other fraction believes it all
          to be hocus-pocus. It is pretty hard to confirm and deny the
          plausibility of astrology being real. There are contradictory claims
          going about astrology and zodiacs. Some research done by the community
          conforms to the belief that astrology is real. On the other hand,
          there is data available to prove the notion wrong. Now, which side is
          to be believed? We take the help of science to determine the reality
          of astrology and zodiac signs.
        </p>
        <p>
          <b>But first, what exactly is astrology?</b>
          <br /> Astrology is the study of how distant celestial
          bodies—typically stars and planets—affect human existence. People's
          personalities, interpersonal connections, and financial futures are
          claimed to be shaped by the sun, stars, moon, and planets' positions
          at the moment of their birth. According to astrology, each person is
          born under a certain zodiac sign. The constellation that is most
          conspicuous in the night sky during any particular month serves as the
          basis for a zodiac sign. Astrologers predict how different celestial
          bodies will travel in the future and in daily life by using
          mathematics and other techniques to compute the trajectory of these
          entities.
        </p>
        <p>
          <b>How many zodiac signs are there?</b>
          <br />
          There are 12 zodiac signs in total-: Aries, Taurus, Gemini, Cancer,
          Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and
          Pisces.
        </p>
        <hr />
        <div className="signscard">
          <Card
            imageUrl="https://img.jagranjosh.com/images/2022/September/2192022/areis.jpg"
            imageAlt="Aries Image"
            title="Aries"
            descriptionTitle="1. Aries (March 21-April 19):"
            description="
             Aries is the first sign in the zodiac. This vibrant fire sign is no stranger to rivalry, of course. Aries is a courageous and ambitious sign that charges straight into even the most difficult circumstances, assuring they always come out the winner."
          />
          <Card
            imageUrl="https://img.jagranjosh.com/images/2022/September/2192022/taurus-astrology-sign.jpg"
            imageAlt="Taurus Image"
            title="Taurus"
            descriptionTitle="2. Taurus (April 20 - May 20):"
            description="
            The bull is the symbol for Taurus, an earth sign. Taureans prefer unwinding in quiet, bucolic settings surrounded by serenity, soothing odours, and exquisite flavors."
          />
          <Card
            imageUrl="https://img.jagranjosh.com/images/2022/September/2192022/gemini-compressed.jpg"
            imageAlt="Gemini Image"
            title="Gemini"
            descriptionTitle="3. Gemini (May 21 - June 20)"
            description="
            Gemini is impulsive, lively, and chaotic but in an endearing way due to its endless interest. This air sign, appropriately represented by the celestial twins, had to double in order to accommodate all of its many interests."
          />
          <Card
            imageUrl="https://img.jagranjosh.com/images/2022/September/2192022/cancer-compressed.jpg"
            imageAlt="Cancer Image"
            title="Cancer"
            descriptionTitle="4. Cancer (July 22–June 21):"
            description="
            The crab, who represents Cancer, flits between the land and the water, demonstrating Cancer's capacity to survive in both the emotional and material worlds. Cancers are very perceptive and often exhibit psychic talents in physical settings. However, this aquatic sign is prepared to go to any lengths to safeguard its emotional well-being."
          />
          <Card
            imageUrl="https://img.jagranjosh.com/images/2022/September/2192022/le.jpg"
            imageAlt="Leo Image"
            title="Leo"
            descriptionTitle="5. Leo (July 23 - August 22):"
            description="
            Leo is symbolized by the lion, and these fiery fire signs are the rulers and queens of the cosmic kingdom because they are passionate, devoted, and notoriously flamboyant. Leos are fiery people who enjoy being the center of attention."
          />
          <Card
            imageUrl="https://img.jagranjosh.com/images/2022/September/2192022/virgoo.jpg"
            imageAlt="Virgo Image"
            title="Virgo"
            descriptionTitle="6. Virgo (August 23 - September 22):"
            description="
            A historical relationship between the earth sign of Virgo and the goddess of agriculture illustrates the sign's strong connection to the physical world. This earth sign strives for excellence and is persistent. Virgos are known to be logical, practical, and methodical. "
          />
          <Card
            imageUrl="https://imgk.timesnownews.com/story/Libra_Yearly_Prediction_2021.jpg?tr=w-1200,h-900"
            imageAlt="Libra Image"
            title="Libra"
            descriptionTitle="7. Libra (September 23 - October 22):"
            description="
            Scales are a symbol for Libra since it is an air sign, which represents Libra's obsession with achieving balance. Libra energy is defined by harmony, fairness, and balance. In all aspects of life, Libra is fascinated with symmetry and seeks to achieve harmony, even in romantic pursuits. "
          />
          <Card
            imageUrl="https://img.jagranjosh.com/images/2022/September/2192022/scorpio-compressed.jpg"
            imageAlt="Scorpio Image"
            title="Scorpio"
            descriptionTitle="8. Scorpio (October 23 - November 21): "
            description="
            Scorpio is a water sign that cultivates strong insight via both the tangible and intangible worlds by using emotions and feelings as fuel. Scorpio is one of the zodiac's most complex and dynamic signs because of its psychic talents, which also give it exceptional boldness."
          />
          <Card
            imageUrl="https://starregistration.net/media/wysiwyg/SAGITTARIUS_4_10.jpg"
            imageAlt="Sagittarius Image"
            title="Sagittarius"
            descriptionTitle="9. Sagittarius (November 22 - December 21): "
            description="
            Sagittarians, symbolized by the archer, are always seeking out new information. As the final fire sign of the zodiac, Sagittarius sets out on a wide range of endeavors, pursuing philosophical, psychological, and physical explorations."
          />
          <Card
            imageUrl="https://img.jagranjosh.com/images/2022/September/2192022/istockphoto-538871926-612x612.jpg"
            imageAlt="Capricorn  Image"
            title="Capricorn "
            descriptionTitle="10. Capricorn (December 22 - January 19): "
            description="
            The sea goat, a mythical animal with a goat-like body and a fish-like tail, symbolizes Capricorn, the final earth sign of the zodiac. Capricorns are adept at managing both the mental and physical worlds as a result."
          />
          <Card
            imageUrl="https://static.tnn.in/photo/msid-95391824/95391824.jpg"
            imageAlt="Aquarius Image"
            title="Aquarius "
            descriptionTitle="11. Aquarius (January 20 - February 18): "
            description="
            Despite having the prefix aqua in its name, Aquarius is the final air sign of the zodiac, not a water sign. Aquarius is symbolized by the water carrier, the mythical healer who gives water, or life, onto the earth. Aquarius is creative, dynamic, and blatantly radical. It is the zodiac sign that is the most compassionate. "
          />
          <Card
            imageUrl="http://cdn.shopify.com/s/files/1/1045/7744/articles/9bda63f27e78c0bf57dcd331953f45b5.jpg?v=1648549867"
            imageAlt="Pisces  Image"
            title="Pisces"
            descriptionTitle="12. Pisces (February 19 - March 20): "
            description="
            Pisces is the zodiac sign that is the most perceptive, sensitive, and compassionate. Two fish swimming in opposing directions are used as a symbol to reflect the continued divide of Pisces' focus between dream and reality. "
          />
        </div>
        <div className="footer">
          <p>
            Desgined by- Sourabh Patil
            <GoToTop />
          </p>
        </div>
      </div>
    </>
  );
}
