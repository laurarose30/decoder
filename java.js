var message = document.querySelector('#message');
var button = document.querySelector('#button');
var paragraph = document.querySelector('#secret');

function rot13(str) { 
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  
    return str.split("")
        .map(char => 
            {
                let position = upper.indexOf(char.toUpperCase());
                if (position >= 0) {
                return (char == char.toUpperCase() ? upper[(position + 13) % 26] : lower[(position + 13) % 26]);
            }

            else 
            {
             return char;
            }
           })
             
           .join("");
}

button.addEventListener('click', function(e) {
  secret.innerHTML = rot13(message.value);


});