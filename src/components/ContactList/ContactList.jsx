import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contact, onDelete }) => {
  return (
    <ul className={s.list}>
      {contact.map((item) => (
        <li className={s.item} key={item.id}>
          <Contact data={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
