# cocktailGenerator
Generator für Cocktails
Die Anwendung erstellt einen Cocktail nach der Namenseingabe durch einen Nutzer.
## QuickStart
### Lokal
git clone https://github.com/nicojose/cocktailGenerator.git
npm install
node server.js
localhost:3000/home

### Im Web
Im Web erreichbar unter: 104.248.32.110:8080/home

## Architektur
Das Backend nutzt eine REST-Api. Die Daten werden aus durch eine Variable aus dem Frontend abgegriffen und können somit bearbeitet werden.

### Datenmodell
``
[
  { "name": "BeispielhafterCocktail"}
]
``

### REST Services (Backend)
POST - Legt einen neuen Cocktail an
GET - gibt den vorhandenen Cocktail
DELETE - löscht den vorhandenen Cocktail

### Frontend
Das Frontend hat vier UI Masken. Diese bilden jeweils eine CRUD operation ab.
Generator - hier wird ein neuer Cocktail angelegt
CocktailBuch - hier wird der angelegte Cocktail angezeigt
Bearbeiten - her kann der Cocktail gesucht und bearbeitet werden
Löschen - hier kann der Cocktail gesucht und gelöscht werden

