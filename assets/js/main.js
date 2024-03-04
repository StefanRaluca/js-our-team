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
   

  