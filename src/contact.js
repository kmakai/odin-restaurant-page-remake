export default function createContact() {
  const contacts = document.createElement("div");
  const conTitle = document.createElement("h2");
  conTitle.textContent = "Contacts";
  contacts.append(conTitle);

  const contactBinx = document.createElement("div");
  const binxImg = document.createElement("img");
  binxImg.src = "./images/binx.jpg";
  contactBinx.append(binxImg);

  const binxInfo = document.createElement("div");
  binxInfo.className = "contact-info";
  binxInfo.innerHTML = `<p>Binx Makai</p> 
     <p>555-555-6666</p> 
     <p>Owner and Mananger of Binx Cafe.</p>`;
  contactBinx.append(binxInfo);

  const contactBella = document.createElement("div");
  const bellaImg = document.createElement("img");
  bellaImg.src = "./images/bella.png";
  contactBella.append(bellaImg);

  const bellaInfo = document.createElement("div");
  bellaInfo.className = "contact-info";
  bellaInfo.innerHTML = `<p>Bella Makai</p> 
      <p>555-555-6666</p>
      <p>Barista of Binx Cafe.</p>`;
  contactBella.append(bellaInfo);

  contacts.append(contactBinx);
  contacts.append(contactBella);
  contacts.className = "contacts";

  return contacts;
}
