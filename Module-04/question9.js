/*
  We can improve our contact list program a bit by using loops.
  You can now try to display not only the first or last contact, 
  but all contacts in the list, regardless of their number.

  Additionally, try to enclose the whole program in a loop so that the user is repeatedly 
  asked what they want to do. The user can choose to:

  display the first contact (first)
  display the last contact (last)
  display all contacts (all)
  add a new contact (new)
  exit the program (quit)

  After executing the selected action, the program will give the opportunity to choose again. 
  The program should end the actions only after the user gives a specified command, for example quit.
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

let userInput = "";
while (userInput !== "quit") {

  userInput = prompt("choose");

  switch (userInput) {
    case "first": {
      alert(`name: ${contacts[0].name} \nphone: ${contacts[0].phone} \nemail: ${contacts[0].email}`);
      break;
    }
    case "last": {
      let index = contacts.length - 1;
      alert(`name: ${contacts[index].name} \nphone: ${contacts[index].phone} \nemail: ${contacts[index].email}`);
      break;
    }
    case "all": {
      for (let contact of contacts) {
        alert(`name: ${contact.name} \nphone: ${contact.phone} \nemail: ${contact.email}\n\n`);
      }
      break;
    }
    case "new": {
      let newContact = {
        name: prompt("input your name:"),
        phone: prompt("input your phone:"),
        email: prompt("input your email:")
      }
      // add new contact
      contacts.push(newContact);
      break;
    }
    case "quit": {
      window.alert("quit");
      break;
    }
  }
}