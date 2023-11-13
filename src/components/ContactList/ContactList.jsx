import ContactsItem from 'components/ContactItem/ContactItem';
import css from './contactList.module.css';
const ContactList = ({ contacts, filter, deleteContact }) => {
  let toRender;
  if (filter.length !== 0) {
    toRender = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    toRender = contacts;
  }
  return (
    <ul className={css.contacts}>
      {toRender.map(el => {
        return (
          <ContactsItem
            key={el.id}
            contact={el}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};
export default ContactList;
