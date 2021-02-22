
    //Do the following steps in this file, and make sure this file is linked to the shopping-list.html file

    

   // 1. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.
    
    let listStatic = document.querySelector("ul");
    let itemStatic = document.getElementById("item");
    let buttonStatic = document.querySelector("button");
    
    //2. Create a function that will run in response to the button being clicked. (See below, starts line 16)
    
    //3. Inside the function body, start off by storing the current value of the input element in a variable.
    
    //4. Next, empty the input element by setting its value to an empty string — ''.
    
    //5. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.
    
    //6. Append the span and the button as children of the list item.
    
    //7. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
    
    //8. Append the list item as a child of the list.
    
    //9. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
    
    //10. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.

    buttonStatic.onclick = function() { // 2
        let listOrder = itemStatic.value; // 3
        console.log(listOrder);

        itemStatic.value = ''; // 4

        let listElement = document.createElement("li"); // 5
        let spanElement = document.createElement("span");
        let buttonElement = document.createElement("button");

        listElement.appendChild(spanElement); // 6
        listElement.appendChild(buttonElement);

        spanElement.textContent = listOrder; // 7
        buttonElement.textContent = 'Delete';
        console.log(listElement);

        listStatic.appendChild(listElement); // 8

        buttonElement.addEventListener("click", () => listElement.remove()); // 9
        // Another way to do it v
        // buttonElement.onclick = () => listElement.remove();

        itemStatic.focus(); // 10
     }