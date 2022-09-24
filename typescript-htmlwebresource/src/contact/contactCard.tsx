import * as React from 'react';

export interface Contact {
    contactid: string;
    emailaddress1: string;
    fullname: string;
    mobilephone: string;
}

export interface ContactCardProps {
    contact: Contact;
    entityLogicalName: string;
}

export function ContactCard(props: ContactCardProps): JSX.Element {

    const email = props.contact?.emailaddress1 ?? '---';
    const mobilePhone = props.contact?.mobilephone ?? '---';

    const openRecord = () => parent.Xrm.Navigation.openForm({
        entityId: props.contact.contactid,
        entityName: props.entityLogicalName
    });

    return (
        <div className="www-contactcard">
            <div className="www-contacttitle">{props.contact?.fullname}</div>
            <div>
                <dl>
                    <dt>Email:</dt>
                    <dd>{email}</dd>
                    <dt>Mobile phone:</dt>
                    <dd>{mobilePhone}</dd>
                </dl>
            </div>
            <div>
                {/* href="#" should be replaced by the record's URL */}
                <a href="#" onClick={openRecord}>More details</a>
            </div>
        </div>
    );
}