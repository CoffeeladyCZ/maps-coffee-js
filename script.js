// Variales
const letna = document.querySelector('#letna');
const karlin = document.querySelector('#karlin');
const vinohrady = document.querySelector('#vinohrady');
const nusle = document.querySelector('#nusle');
const dejvice = document.querySelector('#dejvice');
const centrum = document.querySelector('#centrum');
const coffeehouse = document.querySelector('.list-coffeehouse');

const listCoffeehouse = [{
  name: 'Kofárna',
  time: 'Po - Ne: 8:00 - 19:00',
  district: 'Centrum',
  type: 'coffeehouse',
  content: 'kavárna která je kousek od Janáčkova nábřeží a přivítá vás skvělou kávou.',
  position: new google.maps.LatLng(50.08033951568018, 14.407263420492933),
},
{
  name: 'format.coffee',
  time: 'Po - Ne: 9:00 - 18:00',
  adress: 'M. Horákové 26, 170 00 Praha 7-Holešovice',
  district: 'Letná',
  type: 'coffeehouse',
  content: ' je další kavárna na Letné od Jackieho.',
  position: new google.maps.LatLng(50.099816256123965, 14.429540195462284),
},
{
  name: 'Kafe Karlín',
  adress: 'Sokolovská 46/51, 186 00 Karlín',
  district: 'Karlín',
  time: 'Po - Pá: 7:30 - 17:30',
  content: ' pokud jezdíte do Karlína nesmíte ji minout.',
  position: new google.maps.LatLng(50.09300737010227, 14.445987692151286),
},
{
  name: 'Café Tvaroh',
  adress: 'Šmeralova 22, 170 00 Praha 7-Dejvice',
  time: 'Po - Ne: 9:00 - 19:00',
  content: ' je nenápadná kavárna kousek od Centrum Stromovka.',
  position: new google.maps.LatLng(50.10256728584566, 14.422197754862381),
}, 
{
  name: 'Cafe Letka',
  adress:'Letohradská 44, 170 00 Praha 7-Letná',
  district: 'Letná',
  time: 'Po - Pá: 8:00 - 18:00, So - Ne: 9:00 - 18:00',
  content: ' jedna z nejstarších na Letné.',
  position: new google.maps.LatLng(50.09896095139468, 14.425286868749494),
},
{
  name: 'Kafe Kiosek',
  adress: 'Roh ulic Evropská a Šolínova, 160 00 Praha 6 - Dejvice',
  district: 'Dejvice',
  time: 'Po - Pá: 7:00 - 18:00, So - Ne: 9:00 - 16:00',
  content: '',
  position: new google.maps.LatLng(50.10123348075611, 14.39239431587142),
},
{
  name: 'Kafemat',
  adress: 'Dejvická 3, 160 00 Praha 6-Dejvice',
  district: 'Dejvice',
  time: 'Po - Pá: 8:00 - 18:00, So - Ne: 9:00 - 15:00',
  content: '',
  posiiton: new google.maps.LatLng(50.09809293267724, 14.40069573866305),
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
  
  // Create icon
  const icons = {
    coffeehouse: {
      name: 'CoffeeHouse',
      icon: "img/coffee-shop.png",
    }
  };

  
  
  // Create markers
  for (let i = 0; i < listCoffeehouse.length; i++) {
    const marker = new google.maps.Marker({
      position: listCoffeehouse[i].position,
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
  }

  letna.addEventListener('click', addList);

}

initMap();

// Add list
  function addList() {
    const list = document.createElement('div');
    list.className = 'coffeehouse';
    coffeehouse.appendChild(list);

    const listName = document.createElement('h4');
    listName.className = 'list-name';
    listName.appendChild(document.createTextNode(listCoffeehouse[1].name))
    list.appendChild(listName);

    const listAdress = document.createElement('p');
    listAdress.className = 'list-adress';
    listAdress.appendChild(document.createTextNode(listCoffeehouse[1].adress))
    list.appendChild(listAdress);

    const listTime = document.createElement('p');
    listTime.className = 'list-time';
    listTime.appendChild(document.createTextNode(listCoffeehouse[1].time))
    list.appendChild(listTime);
  }






