import "./HomeContact.scss";
import Button from '../Button/Button';
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <div className='home-contact'>
      <h2 className='home-contact__header fade-in-up'>Let's work together!</h2>
      <p className='home-contact__description fade-in-up stagger-1'>If you have any questions or inquiries, feel free to reach out!</p>

      <Link to="/contact">
        <Button name="Get in Touch" style="button__home-contact"/>
      </Link>
    </div>
  )
}

export default HomeContact;