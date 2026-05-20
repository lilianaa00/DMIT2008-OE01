//1. Import the data from the file
import expenses from "./expense-data.js";

//2. Grab relevant DOM elements
const expenseContainer = document.getElementById('expense-container')
const expenseList = document.getElementById('expense-list')

//3.render out data into a grid of cards
function renderExpenses(expenseData){
    //first clear out existing html for the container,
    //because we are about to re-render it
    expenseContainer.innerHTML = '';

    //then take out array of data and render out a card for each one
    expenseData.forEach(
        (expense)=>{
            expenseContainer.innerHTML +=
            <div class="card" id="$(expense-id)">
              <div class="header">
                <div>
                  <div class="title">$(expense.title)</div>
                  <div class="meta category">$(expense.category)</div>
                </div>
                <div class="amount">$(expense.amount)</div>
              </div>
              <div class="meta date">$(expense.date)</div>
              <div class="actions">
                <button class="edit-btn" id="$(expense-id)">Edit</button>
                <button class="delete-btn" id="$(expense-id)">Delete</button>
              </div>
            </div>
        }
    ); 

}

//4.call the function to actually do the render
renderExpenses(expenses)

