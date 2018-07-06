function HotelRoom(hotelname, city, distToSea, distToCityCenter, uslugi, price, url) {
    this.hotelname = hotelname;
    this.city = city;
    this.distToCityCenter = distToCityCenter;
    this.distToSea = distToSea;
    this.uslugi = uslugi;
    this.price = price;
    this.likes = 0;
    this.url = url;
}
HotelRoom.prototype.showInfo = function () {
    var result = '<li style="background-color:#f4f4f4; border:1px solid grey"><article style="box-sizing:border-box; padding:5px;"><img src="' + element.url + '"alt="Image of the hotel" width="200px" style="float:left;"/><div style=" margin-left: 222px;"><h3>' + element.hotelname + '</h3><span>' + element.city + '</span><p>Distance to City center ' + element.distToCityCenter + ' km</p><p>Distance to the beach ' + element.distToSea + ' km</p></div></article></li><br/>';
    return result;

}

var hotels = [
    new HotelRoom('Philoxenia', 'Pefkochori ,Greece', 0.4, 0.6, ['WiFi', 'Pool', 'Air conditioner', 'Pets', 'SPA', 'TV', "Parking", 'Restaurant', 'Fitness'], 125, 'assets/images/151.jpeg'),
    new HotelRoom('Imperial Palace', 'Solun, Greece', 0.7, 0.2, ['WiFi', 'Pool', 'Air conditioner', 'TV', "Parking", 'Restaurant', 'Fitness'], 186, 'assets/images/164.jpeg'),
    new HotelRoom('Sentido Ixian', 'Rhodes Island, Greece', 0.3, 0.6, ['WiFi', 'Pool', 'Air conditioner', 'Pets', 'TV', "Parking", 'Restaurant', 'Fitness', "Spa"], 435, 'assets/images/174.jpeg'),
    new HotelRoom('President', 'Atina,Greece', 0.8, 0.2, ['WiFi', 'Pool', 'Air conditioner', 'Pets', 'TV', "Parking", 'Restaurant', 'Fitness'], 324, 'assets/images/188.jpeg'),
    new HotelRoom('The George', 'Mikonos,Greece', 0.1, 0.7, ['WiFi', 'Pool', 'Air conditioner', 'Pets', 'TV', "Parking", 'Restaurant', 'Fitness', 'Spa'], 586, 'assets/images/200.jpeg'),
    new HotelRoom('Marina Hotel', 'Kushadasa,Turkey', 0.3, 1.0, ['WiFi', 'Pool', 'Air conditioner', 'SPA', 'TV', "Parking", 'Restaurant'], 225, 'assets/images/206.jpeg'),
    new HotelRoom('Ayvalik Cinar', 'Ayvalik, Turkey', 0.7, 0.2, ['WiFi', 'Pool', 'Air conditioner', 'TV', 'Restaurant'], 95, 'assets/images/212.jpeg'),
    new HotelRoom('Royal Palace', 'Kushadasa,Turkey', 0.4, 2.8, ['WiFi', 'Pool', 'Air conditioner', 'Pets', 'TV', "Parking", 'Restaurant', 'Fitness', "Spa"], 335, 'assets/images/213.jpeg'),
    new HotelRoom('President', 'Atina,Greece', 0.8, 0.2, ['WiFi', 'Pool', 'Air conditioner', 'Pets', 'TV', "Parking", 'Restaurant', 'Fitness'], 324, 'assets/images/188.jpeg'),
    new HotelRoom('The George', 'Kushadasa,Turkey', 0.1, 0.7, ['WiFi', 'Pool', 'Air conditioner', 'Pets', 'TV', "Parking", 'Restaurant', 'Fitness', 'Spa'], 586, 'assets/images/200.jpeg'),
];

function Hotels(hotel) {
    this.hotel = hotel;
}
Hotels.prototype.filt = function (word) {
    var searched = this.hotel.filter(x => x.hotelname.toLowerCase().indexOf(word.toLowerCase()) !== -1 || x.city.toLowerCase().indexOf(word.toLowerCase()) !== -1);
    return searched;
}
var hotelio = new Hotels(hotels);
function receiveValue(){
    var val=document.getElementById('search').value;
    var ser=hotelio.filt(val);
    var result='';
    if(ser.length==0){ 
        result+='<h2>No suitable results</h2><br/>';
    }
    else{
        result += '<ol style="list-style-type:none;" class="justify-content-center align-items-center">';
        ser.forEach(function (element) {
            result += '<li><article><img src="' + element.url + '"alt="Image of the hotel" width="200px" /><div><h3>' + element.hotelname + '</h3><span>' + element.city + '</span><p>Distance to City center ' + element.distToCityCenter + ' km</p><p>Distance to the beach ' + element.distToSea + ' km</p></div></article></li><br/>';
        }, this);
        result += '</ol>';
    }

    return result;
}
function draw(func, event){
    var d=func();
    console.log(d);
    event.preventDefault();    
    document.getElementById('hot').innerHTML=d;
}
