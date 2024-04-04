import { LightningElement } from 'lwc';

export default class ExampleComponent extends LightningElement {
    showGreeting = true;
    greeting = 'Hello, SF Dev School!';

    handleCheckboxChange(event) {
        this.showGreeting = event.target.checked;
    }
}