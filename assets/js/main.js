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
const teamContainer = document.getElementById('container_team');
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

  