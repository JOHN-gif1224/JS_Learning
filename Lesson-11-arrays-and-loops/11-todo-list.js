/*Process for creating websites: 
  1. Save data
  2. Generate the HTML
  3. Make it interactive
*/

/*Algo for this code
  1. Loop through the array
  2. Create some HTML code for each todo
  3. Put the HTML on web page
*/

const todoList = ["wash dishes", "cook rice"];

let todoListHTML = "";

for (let i = 0; i < todoList.length; i++) {
  const todo = todoList[i];
  const html = `<p>${todo}</p>`;

  todoListHTML += html;
}

console.log(todoListHTML);

function addTodo() {
  let todoInput = document.querySelector(".todo-input");
  let todoInputElement = todoInput.value;
  console.log(todoInputElement);

  todoList.push(todoInputElement);

  todoInput.value = "";
  console.log(todoList);
}
