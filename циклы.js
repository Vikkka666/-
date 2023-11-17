let users = [
    { title: "Пользователь 1", url: "userOne.html" },
    { title: "Пользователь 2", url: "userTwo.html" },
    { title: "Пользователь 3", url: "userThree.html" }
  ];
  

  let nav=document.createElement('ul');
  for(let j=0; j<users.length; j++){
    let menu=document.createElement('li');
    let menuA=document.createElement('a');
    menuA.href=users[j].url;
    menuA.textContent=users[j].title;
    menu.appendChild(menuA);
    nav.appendChild(menu);
  }
  document.body.appendChild(nav);

  let table = document.createElement("table");
  for (let i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");
    let tdTitle = document.createElement("td");
    tdTitle.textContent = users[i].title;
    let tdUrl = document.createElement("td");
    let a = document.createElement("a");
    a.href = users[i].url;
    a.textContent = "Пользователи";
    tdUrl.appendChild(a);
    tr.appendChild(tdTitle);
    tr.appendChild(tdUrl);
    table.appendChild(tr);
  }
  document.body.appendChild(table);


  