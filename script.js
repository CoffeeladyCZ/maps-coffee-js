// Variales
// const letna = document.querySelector('#letna'),
//       karlin = document.querySelector('#karlin'),
//       vinohrady = document.querySelector('#vinohrady'),
//       nusle = document.querySelector('#nusle'),
//       dejvice = document.querySelector('#dejvice'),
//       centrum = document.querySelector('#centrum'),
const coffeehouse = document.querySelector('.list-coffeehouse'),
      markers = document.querySelectorAll('#letna, #karlin, #vinohrady, #nusle, #dejvice, #centrum'),

// Create icon
    icons = {
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
  address: 'Zborovská 60, Malá Strana',
  district: 'Centrum',
  type: 'coffeehouse',
  content: ', kavárna která je kousek od Janáčkova nábřeží a přivítá vás skvělou kávou.',
  lat: 50.08033951568018, 
  lng: 14.407263420492933,
},
{
  name: 'format.coffee',
  time: 'Po - Ne: 9:00 - 18:00',
  address: 'M. Horákové 26, Praha 7-Letná',
  district: 'Letná',
  type: 'coffeehouse',
  content: ' je další kavárna na Letné od Jackieho.',
  lat: 50.099816256123965, 
  lng: 14.429540195462284,
},
{
  name: 'Café Tvaroh',
  address: 'Šmeralova 22, Praha 7-Letná',
  district: 'Letná',
  time: 'Po - Ne: 9:00 - 19:00',
  content: ' je nenápadná kavárna kousek od Centrum Stromovka.',
  lat: 50.10256728584566, 
  lng: 14.422197754862381,
}, 
{
  name: 'Cafe Letka',
  address:'Letohradská 44, 170 00 Praha 7-Letná',
  district: 'Letná',
  time: 'Po - Pá: 8:00 - 18:00, So - Ne: 9:00 - 18:00',
  content: ' jedna z nejstarších na Letné.',
  lat: 50.09896095139468, 
  lng: 14.425286868749494,
},
{
  name: 'Dos Mundos Café',
  address: 'M. Horákové 600, Holešovice, 170 00 Praha 7',
  district: 'Letná',
  time: 'Po - Ne: 9:30 - 19:00',
  content: '',
  lat: 50.106237669557665,
  lng: 14.429093765706273,
},
{
  name: 'Cafe Hrnek',
  address: 'Veletržní 839/49, 170 00 Praha 7-Holešovice',
  district: 'Letná',
  time: 'Po - Ne: 10:00 - 18:00',
  content: '',
  lat: 50.10134293265671, 
  lng: 14.42821178016424,
},
{
  name: 'Kafe Karlín',
  address: 'Sokolovská 46/51, Praha-Karlín',
  district: 'Karlín',
  time: 'Po - Pá: 7:30 - 17:30',
  content: ' pokud jezdíte do Karlína nesmíte ji minout.',
  lat: 50.09300737010227, 
  lng:14.445987692151286,
},
{
  name: 'Kafe Kiosek',
  address: 'Roh ulic Evropská a Šolínova, Praha 6 - Dejvice',
  district: 'Dejvice',
  time: 'Po - Pá: 7:00 - 18:00, So - Ne: 9:00 - 16:00',
  content: '',
  lat: 50.10123348075611, 
  lng: 14.39239431587142,
},
{
  name: 'Kafemat',
  address: 'Dejvická 3, Praha 6-Dejvice',
  district: 'Dejvice',
  time: 'Po - Pá: 8:00 - 18:00, So - Ne: 9:00 - 15:00',
  content: '',
  lat: 50.09809293267724,
  lng: 14.40069573866305,
},
{
  name: 'Osada',
  address: 'Osadní 35, 170 00 Praha 7-Holešovice',
  district: 'All',
  time: 'Po - Pá: 8:00 - 20:00, So - Ne: 9:00 - 16:00',
  content: ', to je kousek Liberce v Praze.',
  lat: 50.10459685147894,
  lng: 14.44628384082367,
},
{
  name: 'Kontejner',
  address: 'Ortenovo nám. 169, 170 00 Praha 7-Holešovice',
  district: 'All',
  time: 'Po - Pá: 8:00 - 18:00, So - Ne: 10:00 - 18:00',
  content: ' je netradiční kavárna, která na tomto místě chyběla.',
  lat: 50.10782923945228, 
  lng: 14.448746107986691,
},
{
  name: 'Mezi Srnky',
  address: 'Sázavská 720/19, 120 00 Praha 2-Vinohrady',
  district: 'Vinohrady',
  time: 'Po - Pá: 8:00 - 16:00 So - Ne: 9:00 - 16:00',
  content: '',
  lat: 50.076046307224324,
  lng: 14.440395740961378,
}

];

// Map
function initMap() {
  const center = {lat: 50.08033951568018, 
                  lng: 14.407263420492933}
  window.map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 12
  });

  // Add list
  let currentMarkers = []
  function addList({name, address, time, lat, lng, content}) {
    let wrapper = document.createElement('div')
    wrapper.classList.add('coffeehouse')
    wrapper.innerHTML = `
        <h4 class="list-name">${name}</h4>
        <p class="list-adress">${address}</p>
        <p class="list-time">${time}</p>
    `
    coffeehouse.appendChild(wrapper);

    const marker = new google.maps.Marker({  //vytvoří markery, které patří k vyfilrovaným kavárnám
      position: new google.maps.LatLng(lat, lng),
      icon: icons.coffeehouse.icon,
      animation: google.maps.Animation.DROP,
      title: name,
      map: window.map,
    })

  //   function toggleItem() {    JE TŘEBA DODĚLAT
  //     const toggles = document.querySelectorAll('.list-toggle');
  //     toggles.forEach(toggle => {
  //       toggle.addEventListener('click', () => {
  //         toggle.parentNode.classList.toggle('active');
  //       })
  //     })
  //   }

  //   <div class="list-container">
  //   <div class="list">
  //     <p class="list-title">Další informace</p>
  //     <p class="list-text">www.nejakastranka.cz</p>

  //     <button class="list-toggle">
  //       <i class="fas fa-chevron-down"></i>
  //       <i class="fas fa-times"></i>
  //     </button>
  // </div>
  //   toggleItem();
     
    // Animation marker
    marker.addListener('click', animationMarker);

    function animationMarker() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
        wrapper.classList.remove('coffeehouse__hover');
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        wrapper.classList.add('coffeehouse__hover');
      }

      window.map.addListener('click', () => {
        marker.setAnimation(null);
        wrapper.classList.remove('coffeehouse__hover');
      })
    }

    // function markedListItem () {  // označí která ikonka k položce patří (animace)
    //   wrapper.classList.add('coffeehouse__hover');

    // }
  
    // Create InfoWindow
    const infoWindow = new google.maps.InfoWindow({ 
      content: `
      <div id="content">
        <div id="siteNotice"></div> 
        <h2 id="firstHeading" class="firstHeading">${name}</h2> 
        <div class="timeContent"><p><b>${time}</b></p></div> 
        <div id="bodyContent"><p><b>${name}</b>${content}</div>`,
    });

    // InfoWindow event
    marker.addListener('click', () => {
      infoWindow.open(window.map, marker);
    })
    // Close InfoWindow
    window.map.addListener('click', () => {
      infoWindow.close(window.map, marker);
    })

    currentMarkers.push(marker)
  }
  
  document.querySelector('.navigation-menu').addEventListener('click', filterItem)

  // Add filter 
  function filterItem(event) {
    let target = event.target,
    district = target.dataset.district    
    
    document.querySelector('.list-coffeehouse').innerHTML = ''; // vymaže načtený obsah
    currentMarkers.forEach(marker => marker.setMap(null)); // vynuluje markery a načte jen aktuální
    currentMarkers = [];

    listCoffeehouse.forEach(dstr => {
      if (district === 'all') {
        addList(dstr);
      } else if (dstr.district.toLowerCase() === district.toLowerCase()) {
        addList(dstr);
      }
    })
  }

}


// OLD CODE
 // Create markers
  // for (let i = 0; i < listCoffeehouse.length; i++) {
  //   const marker = new google.maps.Marker({
  //     position: new google.maps.LatLng(listCoffeehouse[i].lat, listCoffeehouse[i].lng),
  //     icon: icons.coffeehouse.icon,
  //     title: listCoffeehouse[i].title,
  //     map: map,
  //   })

  //   // Create InfoWindow
  //   const infoWindow = new google.maps.InfoWindow({ 
  //     content: `<div id="content">
  //     <div id="siteNotice"> 
  //         </div> 
  //         <h2 id="firstHeading" class="firstHeading">  ${listCoffeehouse[i].name}
  //         </h2> 
  //         <div class="timeContent"><p><b>  ${listCoffeehouse[i].time}  </b></p></div> 
  //         <div id="bodyContent"> 
  //         <p><b>  ${listCoffeehouse[i].name}  </b>   ${listCoffeehouse[i].content} 
  //         </div>`,
  //   });

  //   // InfoWindow event
  //   marker.addListener('click', () => {
  //   infoWindow.open(map, marker);
  //   })
  // }