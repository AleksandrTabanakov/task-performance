const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

contacts.addEventListener("scroll", (e) => {
  const items = Array.from(contacts.getElementsByClassName("contact"));
  const itemOffsets = items.map((item) => item.offsetTop);
  
  let left=0;
  let right=itemOffsets.length-1;
  let sr=Math.floor((left+right)/2);
  while(1!=0)
  {
    if(contacts.scrollTop-itemOffsets[sr-1]>-18&&contacts.scrollTop-itemOffsets[sr]<=-18)
    break;
     if(contacts.scrollTop-itemOffsets[sr]<=-18)
      right=sr;
      else left=sr;
      sr=Math.floor((left+right)/2);
      if(sr<=1)
      break;
  }
    stickyHeader.textContent = items[sr].textContent;
});

addContacts();