import * as React from 'react';
import { render } from 'react-dom';
import { Contact, ContactCard } from './contactCard';

const CONSTANTS = {
    entityLogicalName: 'contact'
};

function App(): JSX.Element {

    const [contacts, setContacts] = React.useState<Contact[]>([]);
    React.useEffect(() => {
        const options =
            '?$select=fullname,emailaddress1,mobilephone' +
            '&$filter=statecode eq 0' +
            '&$orderby=fullname';

        parent.Xrm.WebApi
            .retrieveMultipleRecords(CONSTANTS.entityLogicalName, options)
            .then((response) => {
                setContacts(response.entities);
            });
    }, []);

    const cards = contacts.map(c => {
        return <div className="col-3">
            <ContactCard contact={c} entityLogicalName={CONSTANTS.entityLogicalName} />
        </div>
    });

    return <div className="container-fluid">
        <h1>Contacts</h1>
        <div className="www-contactcards row">
            {cards}
        </div>
    </div>
}

render(<App />, document.getElementById('root'));