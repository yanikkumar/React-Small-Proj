// Template Literals

const name = 'bob';
const lastname = "sanders";
const age = 25;
// const phrase = "My name is " + name + "=" + "And my age is " + age;

const phrase = `My name is ${name} ${lastname}.And I'm ${age} years old `;

console.log(phrase);

const div = document.createElement("div");
// div.innerHTML = "<p>" + name + "</pp>" + "<p>" + lastname + "</p>";
div.innerHTML = `
<h1>My name is: ${name}</h1>
<h3>lastname is: ${lastname}</31>
<h6>My age is: ${age}</h6>
<p>${phrase}</p>
`

document.body.appendChild(div);