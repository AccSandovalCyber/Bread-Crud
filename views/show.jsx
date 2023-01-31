const React = require('react')
const Default = require('./layouts/Default')


function Show({ bread, index }) {
    // we are getting our bread data in the terminal 
    //console.log(bread.name)
  return (
      <Default>
          <h3> {bread.name} </h3>
      <form action={`/breads/${index}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
      <a href={'breads/${index}/edit'}> <button> Edit </button> </a>
      <p>
              and it
              {
                  bread.hasGluten
                      ? <span> does </span>
                      : <span> does NOT </span>
        }
        have gluten.
      </p>
      <img src={bread.image} alt={bread.name} />
      <li>
        <a href="/breads"> Go Home </a>{" "}
      </li>
    </Default>
  )
}

module.exports = Show