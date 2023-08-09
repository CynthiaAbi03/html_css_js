
const ajouter = document.querySelector('#ajouter');





const clients = [

    {
        nom : 'Abi',
        prenom : 'Cynthia',
        age : 21,
        salaire: 50000
    },

    {
        nom : 'John',
        prenom : 'Noel',
        age : 15,
        salaire: 20000 
    },
    {
        nom : 'Michael',
        prenom : 'Bonaventure',
        age : 40,
        salaire: 200000
    }
]

function remplirTableau() {

let contenu = " ";

clients.forEach((a,index) => {
    
    contenu += `
     
    <tr>

        <td> ${a.nom} </td>
        <td> ${a.prenom}</td>
        <td> ${a.age}</td>
        <td> ${a.salaire} </td>
        <td>
            <button class="btn btn-danger" onClick="supprimer(${index})"> supprimer </button>
        </td>

    </tr> 
    
    `

    const tableBody = document.querySelector('#table tbody');


    tableBody.innerHTML = contenu;
})

}

remplirTableau();

function supprimer(index) {

    if (confirm('Are you sure you want to delete')) {

        clients.splice(index,1);

        remplirTableau();

    }
}

function emptySpace() {

    document.querySelector('#nom').value = " "
    document.querySelector('#prenom').value = " "
    document.querySelector('#age').value = " "
    document.querySelector('#salaire').value = " "
    
    };


ajouter.addEventListener('click', () => {

    const nom = document.querySelector('#nom').value;
    const prenom = document.querySelector('#prenom').value;
    const age = document.querySelector('#age').value;
    const salaire = document.querySelector('#salaire').value;

     
    const newClient = {

        nom : nom,
        prenom : prenom,
        age : age,
        salaire : salaire

    }


    clients.push(newClient);

    remplirTableau();

    emptySpace();
  


})


