console.clear()

//[START] вибрати мову на сторінці здачі задачі

// Знаходимо елемент <select> за назвою "lang"
var selectElement = document.querySelector('select[name="lang"]');

// Знаходимо елемент <option> зі значенням "30" С++ 17
var optionElement = selectElement.querySelector('option[value="30"]'); 

// Встановлюємо атрибут "selected" для обраного елемента <option>
optionElement.setAttribute('selected', 'selected');
//[END] вибрати мову C++ на сторінці здачі задачі

