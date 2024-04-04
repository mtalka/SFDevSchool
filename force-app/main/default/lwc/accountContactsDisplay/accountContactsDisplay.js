import { LightningElement, api } from 'lwc';
import getContactsForAccount from '@salesforce/apex/AccountContactsController.getContactsForAccount';

export default class AccountContactsDisplay extends LightningElement {
    @api recordId;
    contacts;
    selectedContactId;

    connectedCallback() {
        this.fetchContacts();
    }

    fetchContacts() {
        getContactsForAccount({ accountId: this.recordId })
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                console.error(error);
            });
    }

    handleContactChange(event) {
        this.selectedContactId = event.detail.value;
    }

    get options() {
        return this.contacts ? this.contacts.map(contact => {
            return {
                label: contact.Name,
                value: contact.Id
            };
        }) : [];
    }
}
