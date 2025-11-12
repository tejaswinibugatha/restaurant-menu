const dishForm = document.getElementById('dishForm');
const menuList = document.getElementById('menuList');


let dishes = JSON.parse(localStorage.getItem('dishes')) || [];


function renderMenu() {
  menuList.innerHTML = '';
  dishes.forEach((dish, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="dish-name">${dish.name}</span>  
      <span class="price">${dish.price}/-</span><br>
      <small>${dish.desc}</small>
      <button class="delete-btn" onclick="deleteDish(${index})">Delete</button>
    `;
    menuList.appendChild(li);
  });
}


dishForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('dishName').value.trim();
  const price = document.getElementById('dishPrice').value.trim();
  const desc = document.getElementById('dishDesc').value.trim();

  if (!name || !price || !desc) return;

  const newDish = { name, price, desc };
  dishes.push(newDish);
  localStorage.setItem('dishes', JSON.stringify(dishes));

  dishForm.reset();
  renderMenu();
});


function deleteDish(index) {
  dishes.splice(index, 1);
  localStorage.setItem('dishes', JSON.stringify(dishes));
  renderMenu();
}

renderMenu();
