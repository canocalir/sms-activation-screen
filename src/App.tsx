import style from "./App.module.css";
import newLogo from "./assets/NEW.png";
import whatsAppLogo from "./assets/whatsapp.png";
import buttonsBackground from "./assets/cute_monster4.png";
import moreLogos from "./assets/MORE.png"

const App = () => {
  return (
    <div className={style.main_container}>
      <div className={style.content_container}>
        <div className={style.header_icons}>
          <img src={newLogo} alt="new_logo" />
          <img src={whatsAppLogo} alt="new_logo" />
          <img src={newLogo} alt="new_logo" />
        </div>
        <div className={style.backgroundContainer}>
        <img src={buttonsBackground} alt="cute_back" />
        </div>
        <div className={style.selection_buttons}>
          <p className={style.headingText}>
            Express yourself with
            <br/> 
            <span id={style.boldText}>New</span>{" "}
            <span id={style.colorText}>WhatsApp Stickers</span>
          </p>
          <p>Choose your sticker type:</p>
          <button>Funny</button>
          <button>Romance</button>
        </div>
        <div className={style.moreLogosContainer}>
          <img src={moreLogos} alt="more-logos" />
        </div>
      </div>
    </div>
  );
};

export default App;
