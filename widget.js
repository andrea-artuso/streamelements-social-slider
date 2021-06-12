const container = document.getElementById("main-container");
var counter = 0;

window.addEventListener("onWidgetLoad", function(obj){
	const fieldData = obj.detail.fieldData;
  
  	let icon1 = fieldData.socialIcon1;
  	let name1 = fieldData.socialName1;
  
  	let icon2 = fieldData.socialIcon2;
  	let name2 = fieldData.socialName2;
  
  	let icon3 = fieldData.socialIcon3;
  	let name3 = fieldData.socialName3;
  
  	let customImage = fieldData.customSocialImage;
  	let customName = fieldData.customSocialUsername;
  
  	let time = fieldData.time;
  
  	if ( (icon1!="" && name1!="") || (icon2!="" && name2!="") || (icon3!="" && name3!="") ){
    	generateCard(icon1, name1, icon2, name2, icon3, name3);
    }
  
  	if (customImage!=null && customName!=""){
    	generateCustomCard(customImage, customName);
    }
});

function generateCard(i1,n1, i2,n2, i3,n3){
	if (i1!="" && n1!=""){
        var firstDiv = document.createElement("div");
      
      	var firstNameDiv = document.createElement("div");
      	var firstIconDiv = document.createElement("div");
      
        var firstName = document.createElement("h1");
        var firstIcon = document.createElement("i");
      
		firstName.innerText = n1;
        switch(i1){
          case 'ig':
              firstIcon.classList.add('fa', 'fa-instagram');
            break;
          case 'yt':
              firstIcon.classList.add('fa', 'fa-youtube-play');
            break;
          case 'ttv':
              firstIcon.classList.add('fa', 'fa-twitch');
            break;
        }
      
      firstIconDiv.appendChild(firstIcon);
      firstNameDiv.appendChild(firstName);
      firstDiv.appendChild(firstIconDiv);
      firstDiv.appendChild(firstNameDiv);
      container.appendChild(firstDiv);
    }
  	
	if (i2!="" && n2!=""){
        var secondDiv = document.createElement("div");
      
      	var secondNameDiv = document.createElement("div");
      	var secondIconDiv = document.createElement("div");
      
        var secondName = document.createElement("h1");
        var secondIcon = document.createElement("i");
      
		secondName.innerText = n2;
        switch(i2){
          case 'ig':
              secondIcon.classList.add('fa', 'fa-instagram');
            break;
          case 'yt':
              secondIcon.classList.add('fa', 'fa-youtube-play');
            break;
          case 'ttv':
              secondIcon.classList.add('fa', 'fa-twitch');
            break;
        }
      
      secondIconDiv.appendChild(secondIcon);
      secondNameDiv.appendChild(secondName);
      secondDiv.appendChild(secondIconDiv);
      secondDiv.appendChild(secondNameDiv);
      container.appendChild(secondDiv);
    }
  
	if (i3!="" && n3!=""){
        var thirdDiv = document.createElement("div");
      
      	var thirdNameDiv = document.createElement("div");
      	var thirdIconDiv = document.createElement("div");
      
        var thirdName = document.createElement("h1");
        var thirdIcon = document.createElement("i");
      
		thirdName.innerText = n3;
        switch(i3){
          case 'ig':
              thirdIcon.classList.add('fa', 'fa-instagram');
            break;
          case 'yt':
              thirdIcon.classList.add('fa', 'fa-youtube-play');
            break;
          case 'ttv':
              thirdIcon.classList.add('fa', 'fa-twitch');
            break;
        }
      
      thirdIconDiv.appendChild(thirdIcon);
      thirdNameDiv.appendChild(thirdName);
      thirdDiv.appendChild(thirdIconDiv);
      thirdDiv.appendChild(thirdNameDiv);
      container.appendChild(thirdDiv);
    }
}

function generateCustomCard(customI, customN){
	if (customI!=null && customN!=""){
        var fourthDiv = document.createElement("div");
      
      	var	customIconDiv = document.createElement("div");
     	var	customNameDiv = document.createElement("div");
      	
        var customName = document.createElement("h1");
        var customIcon = document.createElement("img");
      
		customName.innerText = customN;
      	customIcon.src = customI;
      
        customIconDiv.appendChild(customIcon);
        customNameDiv.appendChild(customName);
      	fourthDiv.appendChild(customIconDiv);
        fourthDiv.appendChild(customNameDiv);
        container.appendChild(fourthDiv);
    }	
}