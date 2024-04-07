let itemList = [
  {
  item : '',
  dueDate : '',
  }
];
// displayItemList();

function storeTodo(){
  let getItem = document.querySelector('#todoItems');
  let getDate = document.querySelector('#todoDates');
  let itemValue = getItem.value;
  let itemDate = getDate.value;
  
  itemList.push({item : itemValue, dueDate : itemDate});

  getItem.value = '';
  getDate.value = '';

  displayItemList();
}

function displayItemList(){
  let getList = document.querySelector('.displayItem');
  let insideHtml = '';
  getList.innerText = '';

  for(i=1; i<itemList.length; i++){

    let {item, dueDate} = itemList[i];

    insideHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="deleteBtn" onclick="itemList.splice(${i},1);
      displayItemList()">Delete</button>
    `
    getList.innerHTML = insideHtml;
  }
}