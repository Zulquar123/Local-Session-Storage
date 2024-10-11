const handleSubmit = () => {
    
    const input_id = document.getElementById("session_id");
    const id = input_id.value;
    const input_value = document.getElementById("session_value");
    const value = input_value.value;


    if (id && value)           // To avoid blank Values
    {
          localStorage.setItem(id, value);
    }
  
}
  

const age = [12, 51, 34, 23, 56, 39];
localStorage.setItem("Array of Age", JSON.stringify(age)); // Array Need to Stringify


const getAge = localStorage.getItem("Array of Age");
console.log(JSON.parse(getAge));                          // Array need JSON.parse to Convert back to Array.


const pen = { price: 20, color: "blue", brand: "Rotomac" };  // Object Need to Stringify
localStorage.setItem("pen", JSON.stringify(pen));

const getPen = localStorage.getItem("pen");            // Oject need JSON.parse to Convert back to Array
console.log(JSON.parse(getPen));

localStorage.removeItem("Manoj");   // Removing items by giving key value of Storage.

