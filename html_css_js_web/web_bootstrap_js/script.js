const ajouter = document.querySelector('#ajouter');


const clients = [

    {
        nom: 'Ndongo',
        prenom: 'Bonaventure' ,
        age: 30,
        salaire: 300000

    },

    {
        nom: 'Sime',
        prenom : 'Vincent',
        age: 20,
        salaire: 40000

    },

    {
        nom: 'Abela',
        prenom : 'Seraphine',
        age: 45,
        salaire: 80000
    }

]

console.log(clients[0]);

function emptySpace() {

document.querySelector('#nom').value = " "
document.querySelector('#prenom').value = " "
document.querySelector('#age').value = " "
document.querySelector('#salaire').value = " "

};



function remplirTableau() {

let contenu = ""

clients.forEach((a, index) => {

    console.log(a)
    
contenu += `

<tr>
    <td> ${a.nom}</td>
    <td> ${a.prenom} </td>
    <td> ${a.age}</td>
    <td> ${a.salaire} </td>
    <td>
        <button class="btn btn-danger" onClick="supprimer(${index})"> supprimer </button>
    </td>
</tr>

`
const tableBody = document.querySelector('#table tbody');
tableBody.innerHTML = contenu;



});


}

remplirTableau();



function supprimer(index) {

if (confirm('Are you sure you want to delete this element')) {

    clients.splice(index,1);

    remplirTableau();

}


};



ajouter.addEventListener('click', () => {
const tableBody = document.querySelector('#table tbody');

const nom = document.querySelector('#nom').value;
const prenom = document.querySelector('#prenom').value;
const age = document.querySelector('#age').value;
const salaire = document.querySelector('#salaire').value;

const aClient = {

    nom: nom,
    prenom: prenom,
    age: age,
    salaire: salaire,

}

clients.push(aClient);

remplirTableau();

emptySpace();


/* tableBody.innerHTML =   `
<tr>
    <td> ${nom}</td>
    <td> ${prenom} </td>
    <td> ${age}</td>
    <td> ${salaire} </td>
    <td>
        <button class="btn btn-danger"> supprimer </button>
    </td>
</tr>

` */

});


    

