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
  
  let names = prompt("input your name");
  let phones = prompt("input your phone");
  let emails = prompt ("input your email");
  
  let last = contacts.length - 1;

  let contato = {
    name : contacts[last].name = names,
    phone : contacts[last].phone = phones,
    email : contacts[last].email = emails
  }

  contacts.push(contato);

  
  console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
  console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);