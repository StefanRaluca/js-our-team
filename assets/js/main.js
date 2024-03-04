console.log('ok');

/* Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto. */
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//stampare su console le informazioni di nome, ruolo e la stringa della foto

// facciamo un ciclo for per ciclare dentro il array 
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    //usiamo il operatore di concatenare per le stringhe e le variabili
    console.log("Name: " + member.name + ", Ruolo: " + member.role + ", Foto: " + member.image);

}


//stampare le stesse informazioni su DOM sottoforma di stringhe 
// creaio una const per prendere il elemento dalla dom creato 
/* const teamContainer = document.getElementById('container_team');
//riusiamo il ciclo for per ciclare dentro il array
for (let i = 0; i < team.length; i++) {
    const member = team[i];
//creiamo un div principale dove mettiamo ogni membro 
const memberContainer=document.createElement('div')
//creiamo un paragrafo per il nome del membro
const nameMember = document.createElement('p')
nameMember.innerHTML= "Name: " + member.name 
console.log(nameMember); 
//creiamo un altro paragrafo per il ruolo del membro
const ruoloMember = document.createElement('p')
ruoloMember.innerHTML= " Ruolo: " + member.role 
console.log(ruoloMember);
//creiamo una const per inserire img per ora come p 
const imgMember= document.createElement('p')
imgMember.innerHTML=" Foto: " + member.image
console.log(imgMember);
// appendiamo al container il nome del member
memberContainer.appendChild(nameMember);
// appendiamo anche il ruolo 
memberContainer.appendChild(ruoloMember);
//appendiamo anche img
memberContainer.appendChild(imgMember);

// appendiamo al team container il container member
teamContainer.appendChild(memberContainer);

}

 */
//BONUS 1:
//trasformare la stringa foto in una immagine effettiva
//riprendo tutto il ciclo e la DOM creata sopra 

const teamContainer = document.getElementById('container_team');
//aggiungiamo le classi di bootstrap
teamContainer.classList.add('card-deck', 'd-flex', 'flex-wrap', 'justify-content-center');
// Creiamo un elemento per il titolo
const titleOfPage = document.createElement('div');
titleOfPage.classList.add('text-center');
// Aggiunta del contenuto HTML al nuovo elemento div
titleOfPage.innerHTML = `
    <h3>Our Team</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde,
    sint eaque, maxime minima voluptas iusto ullam nam vero.maxime minima voluptas iusto ullam nam vero
    </p>
`;
// style del paragrafo tramite querry selector
titleOfPage.querySelector('p').style.whiteSpace = 'pre-wrap';
titleOfPage.classList.add('text_color')

//style per h3 
titleOfPage.querySelector('h3').style.padding='1rem'
titleOfPage.querySelector('h3').style.color='grey'

//aggiungiamo al DOM il title e usiamo beforbegin per essere certi che sarà sopra le card
teamContainer.insertAdjacentElement('beforebegin', titleOfPage)

//riusiamo il ciclo for per ciclare dentro il array
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    //creiamo un div principale dove mettiamo ogni membro 
    const memberContainer = document.createElement('div')
    memberContainer.classList.add('card', 'm-3', 'text-center', 'shadow' , 'text_color');
    //creiamo un paragrafo per il nome del membro
    const nameMember = document.createElement('h4')
    nameMember.innerHTML = member.name
    console.log(nameMember);
    //creiamo un altro paragrafo per il ruolo del membro
    const ruoloMember = document.createElement('p')
    ruoloMember.innerHTML = member.role
    console.log(ruoloMember);
    //creiamo una const per inserire img per ora come p 
    // Creazione dell'elemento immagine
    const imgMember = document.createElement('img');

    //il percorso della img 
    imgMember.src = './assets/img/' + member.image;
    // appendiamo img al contenitore del membro
    memberContainer.appendChild(imgMember);


    // appendiamo al container il nome del member
    memberContainer.appendChild(nameMember);
    // appendiamo anche il ruolo 
    memberContainer.appendChild(ruoloMember);
    /* //appendiamo anche img
    
    memberContainer.appendChild(imgMember); */

    // appendiamo al team container il container member
    teamContainer.appendChild(memberContainer);

}
