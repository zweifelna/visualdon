# Exercice 1

Approche pour récupérer les données de la page https://www.webscraper.io/test-sites/e-commerce/allinone/computers/laptops :

Il fallait commencer par trouver l'élément dans lequel toutes les données étaient stockées et le mettre en variable globale. Dans notre cas, c'était la div avec la classe row.

Ensuite, il fallait créer une map, en stockant pour chaque élément le nom du produit, le nombre d'étoiles et le prix. 

Ces trois éléments sont récupérés grâce à leur classe ou leur attribut. Au final, cela retourne les données sous forme de JSON.

Les données récupérées sont dans le même répertoire dans le fichier data.json.

### Code  utilisé

```js
var cl = (el, tag) => Array.from(el.querySelectorAll(tag))

cl(temp1, 'div.thumbnail')
  .map(el => {
    let product = el.querySelectorAll("a.title")[0].textContent
    let rate = el.querySelectorAll("[data-rating]")[0].getAttribute("data-rating")
    let price = el.querySelectorAll("h4.price")[0].textContent
    
    return {
        produit: product,
        prix: price,
        etoiles: rate
    }
  })
```

