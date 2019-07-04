function search(){
    var emSearch = document.getElementById('emSearch').value;
}

function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
 });
}

    
    var requestURL = 'https://github.com/karivan/testJr/data.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();

    request.onload = function() {
      var datosText = request.response;
      var datos = JSON.parse(datosText);
      populateHeader(datos);
      showDatos(datos);
    }
    
        function populateHeader(jsonObj) {
      var myS1 = document.createElement('h1');
      myS1.textContent = jsonObj['name'] + ',' jsonObj['age'];
      header.appendChild(myS1);
            
      var myPara = document.createElement('p');
      myPara.textContent = 'Address: ' + jsonObj['address'] + ' // Email: ' + jsonObj['email'] + 'Phone Numbers' + jsonObj['phoneNumbers'] + 'Relatives' + jsonObj['relatives'] ;
      header.appendChild(myPara);
    }

function showResults(jsonObj) {
      var result = jsonObj['members'];
      for(var i = 0; i < result.length; i++) {
        var myArticle = document.createElement('article');
        var myS1 = document.createElement('h2');
        var myPara = document.createElement('p');
        var myList = document.createElement('ul');
        myH2.textContent = result[i].name;
        myPara1.textContent = 'Address: ' + result[i].address;
        myPara2.textContent = 'Email: ' + result[i].email;
        myPara3.textContent = 'PhoneNumbers:';
        var superPowers = heroes[i].relatives;
        for(var j = 0; j < superPowers.length; j++) {
          var listItem = document.createElement('li');
          listItem.textContent = superPowers[j];
          myList.appendChild(listItem);
        }
        myArticle.appendChild(myS1);
        myArticle.appendChild(myPara);

      }
    }
