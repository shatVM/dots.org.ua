//console.clear()


//[START]зняти вибір з усіх чекбоксів крім C++ (C++17) / GNU C++ (G++) 12.x, ISO/IEC 14882:2017

// Знаходимо всі елементи <input> з типом "checkbox" і назвою "langs[]"
var checkboxElements = document.querySelectorAll('input[type="checkbox"][name="langs[]"]');

// Перевіряємо кожен елемент <input>
checkboxElements.forEach(function (checkbox) {
  // Отримуємо значення атрибуту "value" елемента <input>
  var checkboxValue = checkbox.value;
  
  // Перевіряємо, чи значення рівне "30" С++ 17
  if (checkboxValue === "30") {
    // Залишаємо вибір для цього елемента <input>
    checkbox.checked = true;
  } else {
    // Знімаємо вибір для інших елементів <input>
    checkbox.checked = false;
  }
});


//[END]зняти вибір з усіх чекбоксів крім C++ (C++17) / GNU C++ (G++) 12.x, ISO/IEC 14882:2017

//[START] Встановлюємо тривалість турніру 600 хвилин

// Знаходимо елемент <input> за назвою "duration"
var durationInput = document.querySelector('input[name="duration"]');

// Встановлюємо значення 600 для елемента <input>
durationInput.value = 600;

//[END] Встановлюємо тривалість турніру 600 хвилин