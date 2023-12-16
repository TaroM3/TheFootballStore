import { Link } from 'react-router-dom';

const Whatsapp = () => {
  return (
    <div>
      <Link
        target="blank"
        to="https://wa.me/+5492216697039"
        style={{ position: 'fixed', bottom: 10, right: 50 }}
      >
        <img
          alt="Chat on WhatsApp"
          src="https://res.cloudinary.com/daq80uhh9/image/upload/v1699041500/thefootballstore/Whatsapp_jkwsqd.png"
        />
      </Link>
    </div>
  );
};

export default Whatsapp;
