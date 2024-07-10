/*
  Our program has grown quite a bit, making it a little hard to read. 
  It is especially visible in the switch instruction, where most of the logic is enclosed. 
  Try to organize your program code by using functions. Define and call three functions in the appropriate places:

  showContact: the function should take two arguments; 
  the first is the list of contacts, and the second is the index number of the contact to display; 
  inside the function, check if the correct arguments are passed, 
  that is, if the contacts are an array (use the instanceofArray construction for this);
  showAllContacts: the function should take one argument, the list of contacts; inside the function, 
  check if the given argument is an array;
  addNewContact: the function should take four arguments, a contact list and the data of the new contact, 
  that is: name, phone, and number; before adding a new contact, check if the passed argument is an array and if the new contact data have any value.
*/

let contacts = [{
  name: "Maxwell Wright",
  phone: "(0191) 719 6495",
  email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
  name: "Raja Villarreal",
  phone: "0866 398 2895",
  email: "posuere.vulputate@sed.com"
}, {
  name: "Helen Richards",
  phone: "0800 1111",
  email: "libero@convallis.edu"
}];

// new object for test
let newContact = {
  name: "Edgar",
  phone: "4747-5784",
  email: "edgar@gmail.com"
}
let nullContact = {}

let showContact = (listContacts, index) => {

  if ((listContacts instanceof Array) && (Number.isInteger(index))) {
    console.log(`nome: ${listContacts[index].name}\nphone: ${listContacts[index].phone}\nemail: ${listContacts[index].email}`);
    console.log("--------------");
  } else {
    return console.log("digite uma lista valida ou um indice valido");
  }
}

let showAllContacts = (listContacts) => {
  if (listContacts instanceof Array) {
    for (let contact of contacts) {
      console.log(`nome: ${contact.name}\nphone: ${contact.phone}\nemail: ${contact.email}`);
      console.log("--------------");
    }
  } else {
    console.log("lista não é um array");
  }
}

let addNewContact = (listContacts, newContact) => {
  if (listContacts instanceof Array && newContact != null) {
    listContacts.push(newContact);
  }
}

// show contact input the index
showContact(contacts, 1);

// add new contact
addNewContact(contacts, nullContact);

// show all contacts
showAllContacts(contacts);