console.clear()
// Створення елементу <link>
var linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.href =
  "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";

// Додавання елементу <link> до <head>
document.head.appendChild(linkElement);

try {
    // Отримайте всі елементи кнопок на сторінці за їх типом
// if (document.querySelector('input[type="submit"]')) {
  var button = document.querySelector('input[type="submit"]');
  // Додайте класи Bootstrap для стилізації кнопки
       // Додайте стилі за потреби
    
      button.classList.add("btn");
      button.classList.add("btn-primary"); 
      button.classList.add("btn-sm ");  
  
// }
} catch (error) {
    console.log(error)
}


try {
   if (document.querySelector('input[type="file"]')){
  var button = document.querySelector('input[type="file"]');
// Додайте класи Bootstrap для стилізації кнопки
// Додайте стилі за потреби
 {
  button.classList.add("btn");
  button.classList.add("btn-info");
  button.classList.add("btn-sm ");
}  
} 
} catch (error) {
    
}


try{
// Отримати всі елементи <select>
var selects = document.getElementsByTagName("select");
if (select) {
  for (var i = 0; i < selects.length; i++) {
    var select = selects[i];

    // Додати клас "form-select" до кожного елементу <select>
    select.classList.add("form-select");
    select.classList.add("form-select-lg");
  }
}

// Пройдіться по кожному елементу <select>
}
catch{

}

