export default function createContact() {
  const contacts = document.createElement('div');
  const conTitle = document.createElement('h1');
  conTitle.id = "contacts-title";
  conTitle.textContent = "Contacts";
  contacts.append(conTitle);

  const contactBinx = document.createElement('div');
  
  const binxInfo = document.createElement('p');
  binxInfo.textContent =
      `Binx Makai 555-555-6666
  Owner and Mananger of Binx Cafe.`;
  contactBinx.append(binxInfo);

  const contactBella = document.createElement('div');
 
  const bellaInfo = document.createElement('p');
  bellaInfo.textContent =
      `Bella Makai 555-555-6666
  Barista of Binx Cafe.`;
  contactBella.append(bellaInfo);


  contacts.append(contactBinx);
  contacts.append(contactBella);
  contacts.className = "contacts"

  return contacts;
}