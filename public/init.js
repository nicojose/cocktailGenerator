function saveAndCreateNewCocktail(event){
    event.preventDefault();

    document.getElementById("savedContainer").classList.remove("hidden");
    document.getElementById("speichern").style = "display:none";

    const values = Object.fromEntries(new FormData(event.target));
    console.log(values);

    fetch('/cocktails', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(res => {
        return res.json();
      }).then(todo => {
        createListItem(todo);
      });
}

function showSavedContainer()
{
  document.getElementById("savedContainer").classList.remove("hidden");
  document.getElementById("speichern").style = "display:none";
}
document.getElementById('speichern').addEventListener('click',showSavedContainer);
//document.querySelector('#createCocktail').addEventListener('submit', saveAndCreateNewCocktail)
  
