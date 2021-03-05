// import { listCoffeehouse } from './dummydata.js';

function initMap() {
  const center = {lat: 50.08033951568018, 
                  lng: 14.407263420492933}
  const map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 12
  });
  
  const icons = {
    coffeehouse: {
      name: 'CoffeeHouse',
      icon: "img/coffee-shop.png",
    }
  };

  const listCoffeehouse = [{
      name: 'Kofárna',
      time: 'Po - Ne: 8:00 - 19:00',
      type: 'coffeehouse',
      title: 'Kofárna',
      position: new google.maps.LatLng(50.08033951568018, 14.407263420492933),
      contentString:
        '<div id="content">' + '<div id="siteNotice">' +
        "</div>" +
        '<h2 id="firstHeading" class="firstHeading">Kofárna</h2>' +
        '<div class="timeContent"><p><b>Po - Ne: 8:00 - 19:00</b></p></div>' +
        '<div id="bodyContent">' +
        "<p><b>Kofárna</b>, kavárna která je kousek od Janáčkova nábřeží a přivítá vás skvělou kávou."
        + '</div>',
    },
    {
      name: 'format.coffee',
      type: 'coffeehouse',
      position: new google.maps.LatLng(50.099816256123965, 14.429540195462284),
    },
    {
      name: 'Kafe Karlín',
      adress: 'Sokolovská 46/51, 186 00 Karlín',
      time: 'Po - Pá: 7:30 - 17:30',
      position: new google.maps.LatLng(50.09300737010227, 14.445987692151286),
    },
    {
      name: 'Café Tvaroh',
      adress: 'Šmeralova 22, 170 00 Praha 7-Dejvice',
      time: 'Po - Ne: 9:00 - 19:00',
      position: new google.maps.LatLng(50.10256728584566, 14.422197754862381),
    }, 
    {
      name: 'Cafe Letka',
      adress:'Letohradská 44, 170 00 Praha 7-Letná',
      time: 'Po - Pá: 8:00 - 18:00, So - Ne: 9:00 - 18:00',
      position: new google.maps.LatLng(50.09896095139468, 14.425286868749494),
    },
    {
      name: 'Kafe Kiosek',
      adress: 'Roh ulic Evropská a Šolínova, 160 00 Praha 6 - Dejvice',
      time: 'Po - Pá: 7:00 - 18:00, So - Ne: 9:00 - 16:00',
      position: new google.maps.LatLng(50.10123348075611, 14.39239431587142),
    },
    {
      name: 'Kafemat',
      adress: 'Dejvická 3, 160 00 Praha 6-Dejvice',
      time: 'Po - Pá: 8:00 - 18:00, So - Ne: 9:00 - 15:00',
      posiiton: new google.maps.LatLng(50.09809293267724, 14.40069573866305),
    },
  ];

  

  // Create InfoWindow
  const contentString = 
      '<div id="content">' + '<div id="siteNotice">' +
      "</div>" +
      '<h2 id="firstHeading" class="firstHeading">Kofárna</h2>' +
      '<div class="timeContent"><p><b>Po - Ne: 8:00 - 19:00</b></p></div>' +
      '<div id="bodyContent">' +
      "<p><b>Kofárna</b>, kavárna která je kousek od Janáčkova nábřeží a přivítá vás skvělou kávou."
      + '</div>';
    
    // {
    //   content: '<div id="content">' + '<div id="siteNotice">' +
    //   "</div>" +
    //   '<h2 id="firstHeading" class="firstHeading">format.coffee</h2>' +
    //   '<div class="timeContent"><p><b>Po - Ne: 8:00 - 19:00</b></p></div>' +
    //   '<div id="bodyContent">' +
    //   "<p><b>Kofárna</b>, kavárna která je kousek od Janáčkova nábřeží a přivítá vás skvělou kávou."
    //   + '</div>',
    // }
  
   

  const Infowindow = new google.maps.InfoWindow({  // toto samostatně funguje
    content: contentString,
  });
  
  // Create markers
  for (let i = 0; i < listCoffeehouse.length; i++) {
    const marker = new google.maps.Marker({
      position: listCoffeehouse[i].position,
      icon: icons.coffeehouse.icon,
      title: listCoffeehouse[i].title,
      content: listCoffeehouse[i].contentString,
      map: map,
    })
    // InfoWindow event
    marker.addListener('click', () => {
    Infowindow.open(map, marker);
  })
  }
  
}
initMap();

