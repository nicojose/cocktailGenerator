function showCocktails(event){
    event.preventDefault();

    document.getElementById("savedContainer").classList.remove("hidden");
    document.getElementById("speichern").style = "display:none";

    const values = Object.fromEntries(new FormData(event.target));
    console.log(values);

    fetch('/cocktails', {
        method: 'GET',
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

document.querySelector('#showCocktail').addEventListener('submit', showCocktails)
