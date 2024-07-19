import Contact from "./Contact";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div>
      <h2>PhoneBook</h2>
      <ul>
        {contacts.map((contact) => (
          <Contact
            handleDelete={handleDelete}
            key={contact.id}
            contact={contact}
            id={contact.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
