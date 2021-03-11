// Hamburger menu

// Variales
const letna = document.querySelector('#letna');
const karlin = document.querySelector('#karlin');
const vinohrady = document.querySelector('#vinohrady');
const nusle = document.querySelector('#nusle');
const dejvice = document.querySelector('#dejvice');
const centrum = document.querySelector('#centrum');
const coffeehouse = document.querySelector('.list-coffeehouse');

// Create icon
const icons = {
  coffeehouse: {
    name: 'CoffeeHouse',
    icon: "img/coffee-shop.png",
  }
};

// list of coffeehouse
const listCoffeehouse = [
  {
  name: 'Kofárna',
  time: 'Po - Ne: 8:00 - 19:00',
  adress: 'Zborovská 60, Malá Strana',
  district: 'Centrum',
  type: 'coffeehouse',
  content: ', kavárna která je kousek od Janáčkova nábřeží a přivítá vás skvělou kávou.',
  lat: 50.08033951568018, 
  lng: 14.407263420492933,
},
{
  name: 'format.coffee',
  time: 'Po - Ne: 9:00 - 18:00',
  adress: 'M. Horákové 26, Praha 7-Holešovice',
  district: 'Letná',
  type: 'coffeehouse',
  content: ' je další kavárna na Letné od Jackieho.',
  lat: 50.099816256123965, 
  lng: 14.429540195462284,
},
{
  name: 'Kafe Karlín',
  adress: 'Sokolovská 46/51, Praha -Karlín',
  district: 'Karlín',
  time: 'Po - Pá: 7:30 - 17:30',
  content: ' pokud jezdíte do Karlína nesmíte ji minout.',
  lat: 50.09300737010227, 
  lng:14.445987692151286,
},
{
  name: 'Café Tvaroh',
  adress: 'Šmeralova 22, Praha 7-Dejvice',
  time: 'Po - Ne: 9:00 - 19:00',
  content: ' je nenápadná kavárna kousek od Centrum Stromovka.',
  lat: 50.10256728584566, 
  lng: 14.422197754862381,
}, 
{
  name: 'Cafe Letka',
  adress:'Letohradská 44, 170 00 Praha 7-Letná',
  district: 'Letná',
  time: 'Po - Pá: 8:00 - 18:00, So - Ne: 9:00 - 18:00',
  content: ' jedna z nejstarších na Letné.',
  lat: 50.09896095139468, 
  lng: 14.425286868749494,
},
{
  name: 'Kafe Kiosek',
  adress: 'Roh ulic Evropská a Šolínova, Praha 6 - Dejvice',
  district: 'Dejvice',
  time: 'Po - Pá: 7:00 - 18:00, So - Ne: 9:00 - 16:00',
  content: '',
  lat: 50.10123348075611, 
  lng: 14.39239431587142,
},
{
  name: 'Kafemat',
  adress: 'Dejvická 3, Praha 6-Dejvice',
  district: 'Dejvice',
  time: 'Po - Pá: 8:00 - 18:00, So - Ne: 9:00 - 15:00',
  content: '',
  lat: 50.09809293267724,
  lng: 14.40069573866305,
},
];

// Map
function initMap() {
  const center = {lat: 50.08033951568018, 
                  lng: 14.407263420492933}
  const map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 12
  });
  
  // Create markers
  for (let i = 0; i < listCoffeehouse.length; i++) {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(listCoffeehouse[i].lat, listCoffeehouse[i].lng),
      icon: icons.coffeehouse.icon,
      title: listCoffeehouse[i].title,
      map: map,
    })

    // Create InfoWindow
    const infoWindow = new google.maps.InfoWindow({ 
      content: '<div id="content">' + '<div id="siteNotice">' +
          '</div>' +
          '<h2 id="firstHeading" class="firstHeading">' + listCoffeehouse[i].name + 
          '</h2>' +
          '<div class="timeContent"><p><b>' + listCoffeehouse[i].time + '</b></p></div>' +
          '<div id="bodyContent">' +
          '<p><b>' + listCoffeehouse[i].name + '</b> ' + listCoffeehouse[i].content + 
          '</div>',
    });

    // InfoWindow event
    marker.addListener('click', () => {
    infoWindow.open(map, marker);
    })

    // Add list
  function addList(e) {
    const list = document.createElement('div');
    list.className = 'coffeehouse';
    coffeehouse.appendChild(list);

    const listName = document.createElement('h4');
    listName.className = 'list-name';
    listName.appendChild(document.createTextNode(listCoffeehouse[i].name))
    list.appendChild(listName);

    const listAdress = document.createElement('p');
    listAdress.className = 'list-adress';
    listAdress.appendChild(document.createTextNode(listCoffeehouse[i].adress))
    list.appendChild(listAdress);

    const listTime = document.createElement('p');
    listTime.className = 'list-time';
    listTime.appendChild(document.createTextNode(listCoffeehouse[i].time))
    list.appendChild(listTime);
  }

  const choiceDistrickt = '';
  // Add filter
  letna.addEventListener('click', () => {
    if (listCoffeehouse[i].district === 'Letná') {
      addList();
    }
  })
  karlin.addEventListener('click', () => {
    if (listCoffeehouse[i].district === 'Karlín') {
      addList();
    }
  })
  centrum.addEventListener('click', () => {
    if (listCoffeehouse[i].district === 'Centrum') {
      addList();
    }
  })
  nusle.addEventListener('click', () => {
    if (listCoffeehouse[i].district === 'Nusle') {
      addList();
    }
  })
  vinohrady.addEventListener('click', () => {
    if (listCoffeehouse[i].district === 'Vinohrady') {
      addList();
    }
  })
  dejvice.addEventListener('click', () => {
    if (listCoffeehouse[i].district === 'Dejvice') {
      addList();
    }
  })


}
}
