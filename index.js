const button = document.getElementById('btn')
const acitvity = document.getElementById('activity')
const type = document.getElementById('type')

button.addEventListener('click', function() {

  fetch('http://www.boredapi.com/api/activity/')
  .then(response => response.json()
  .then(data => {
    acitvity.textContent = data.activity;
    type.innerHTML = `<p> Type: ${data.type}</p><br>
        <p>Price: ${data.price} €</p>`;
    document.body.classList.add('fun')
    document.getElementById('bot').textContent = 'HappyBot'

  }))
})