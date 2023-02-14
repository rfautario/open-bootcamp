export class Contact {
    name = '';
    surname = '';
    mail = '';
    status = false;

    constructor (name, surname, mail, status) {
        this.name = name;
        this.surname = surname;
        this.mail = mail;
        this.status = status;
    }
}