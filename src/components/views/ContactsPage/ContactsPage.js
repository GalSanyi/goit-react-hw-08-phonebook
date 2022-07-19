import ContactForm from 'components/Form/ContactForm ';
import ContactList from 'components/Contacts/ContactList ';
import Filter from 'components/Filter/Filter';



export default function ContactsPage() {
    return(
        <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
  
        <h2>Contacts</h2>
        <ContactList /> 
        
        </div>
    );
}
