import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

import { useState } from "react";

import contactsData from "../assets/contactsData.json";
import SearchBox from "./SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState(contactsData);

  const handleDelete = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contact.id);
    });
  };

  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contactsData} handleDelete={handleDelete} />
    </>
  );
}

export default App;
