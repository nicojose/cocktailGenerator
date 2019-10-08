fetch("https://swapi.co/api/people/") // request object
.then(response => respose.json()) // response object
.then(json => console.log(json));
