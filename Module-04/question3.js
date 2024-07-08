
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

// showing the first contact (first)
// showing the last contact (last)
// adding a new contact (new)

let first = "showing the first contact (first)\n";
let last = "showing the last contact (last)\n";
const nnew = "adding a new contact (new)\n";

alert(`${first}${last}${nnew}`);
let result = prompt("what is you choose?");

if (result == "first") {
  alert(`name: ${contacts[0].name} \nphone: ${contacts[0].phone} \nemail: ${contacts[0].email} `);
} else if (result == "last") {
  let index = contacts.length - 1;
  alert(`name: ${contacts[index].name} \nphone: ${contacts[index].phone} \nemail: ${contacts[index].email} `);
} else if (result == "new") {

  let names =  prompt("Enter with the name:");
  let phones = prompt("Enter with the phone number:");
  let emails = prompt("Enter with the email:");
  
  let newObj = {
    name: names,
    phone: phones,
    email: emails
  };

  contacts.push(newObj);

  let indexx = contacts.length - 1;
  alert(`name: ${contacts[indexx].name} \nphone: ${contacts[indexx].phone} \nemail: ${contacts[indexx].email} `);
}