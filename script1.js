// version 1.15
// what's new
//  - bug fixes 	//when mouseover the name, (and accessing it by arrows), the short bio is displayed in the box up/down should move scrollbar and moveCursor
//  - new searchbar

var names = [
'Hulk','Iron Man','Thor','Captain America','Spider-Man','Black Panther','Doctor Strange','Star-Lord','Gamora','Rocket Raccoon','Groot','Drax','Nebula','Thanos','War Machine','Loki','Winter Soldier','Black Widow','Director Fury',"M'Baku",'Okoye','Jabari Tribe','Dora Milaje','Wong','Maria Hill','Captain Marvel','Heimdall','Collector','Red Skull','Vision','Scarlet Witch','Mantis','Proxima Midnight','Ebony Maw',
'Shuri','Falcon','Pepper Potts','Eitri','Bus Driver'];

var actors = [
'Mark Ruffalo','Robert Downey Jr.','Chris Hemsworth','Chris Evans','Tom Holland','Chadwick Boseman','Benedict Cumberbatch','Chris Pratt','Zoe Saldana','Bradley Cooper','Vin Diesel','Dave Bautista','Karen Gillan','Josh Brolin','Don Cheadle','Tom Hiddleston','Sebastian Stan','Scarlett Johansson','Samuel L. Jackson','Winston Duke','Danai Gurira','','','Benedict Wong','Cobie Smulders','Brie Larson','Idris Elba','Benecio Del Toro','Hugo Weaving','Paul Bettany','Elizabeth Olsen','Pom Klementieff','Carrie Coon','Tom Vaughan-Lawlor','Letitia Wright','Anthony Mackie','Gwyneth Paltrow','Peter Dinklage','Stan Lee'];

var alias = ['Bruce Banner','Tony Stark','Thor Odinson','Steve Rogers','Peter Parker',"T'Challa",'Stephen Strange','Peter Jason Quill','','','','','','','James Rhodes','Loki Odinson','Bucky Barnes','Natasha Romanoff','Nick Fury','','','','','','Eye Candy','Carol Danvers','','Taneleer Tivan','Johann Schmidtt','','Wanda Maximoff','','','','','Sam Wilson','Virginia Potts','',''];

var bios = [ //hmm
"In 2007, the first Hulk movie was released, which technically launched the MCU but is unrecognized. However it is hard not to acknowlegde the Hulk's brute strength and reputation for destruction.","Iron Man's movie in 2008 launched the Marvel Cinematic Universe. He is a core piece of the original Avengers and adds a heartfelt presence over the last decade to numerous fans. It is quite evident to see the impact he has on his peers and the world through his remarkable innovations and inventions.",
"Our royal heir to the Asgardian throne yet fights to protect Earth? Don't confuse loyalty with loyalty, as this hero rounds out our group of core Avengers. He may truly be the most powerful hero in the universe -- I have to do my research.","Legend has it that the procedure that transformed this scrawny teenage kid from Brooklyn into the honorable Captain reulted in a bullet wound to the kneecap on D-Day. Nonetheless, the serum that was injected into him, granted him the ability to perform at the peak of a human and began the trend of serum bred heroes.",
"He's just your friendly neighborhood teenage web slinger. This hero probably has the most movies out of the bunch, but most of them reside in seperate universes. Tony Stark was able to persuade him to join the group in the most recent movie in 2017","The royal heir to the Wakandan throne. King T'Challa serves as protector and mighty warrior of Wakanda with super-human abilities absorbed from the indulgence of the heart-shaped erb. One of his primary motives is to become the first king to establish relations with the outside world, and offer the resources neccessary, to make it a better place","Doctor Strange's story is quite unusual. His superpower is his ability to cast powerful spells that include, bending dimensions, defying gravity and most of all, manipulating time. ", "Leader of the Guardians of the Galaxy.","No bio Availible",'No bio Availible',
'No bio Availible','No bio Availible','No bio Availible',"Arguably the most powerful being in the universee, Thanos is motivated only by righting the wrongs that resulted in his home planet (Titan's) extinction. He first appeared in a post-credit scene after the first Avengers movie. Since then he has been waiting patiently for his opportunity to undertake his master plan and ultimately create complete balance across the universe.","It must be cool to be him. Since he's close friends with Tony Stark, he has his own 'Iron Man' suit. As a colonel, he is very skilled in combat which makes him a very good sidekick. Marvel is good for using foreshadowing but the most memorable was in the first Iron Man movie, where he is in Stark's lab and hints towards suiting up in a protoype suit 'next time baby.'",
"Step-brother to Thor, and the most used villain in the universe, we have grown to love Loki. As he grew up, he gained the passion to hold the Asgardian throne, but did not obtain birthrights to it. This dissapointment gave us the villain we have today.","He and Cap grew up best friends in Brooklyn, NY. Since he was always bigger than Cap, he looked out for him and kept him out of trouble. He was reportedly killed in action during WW2, but evil scientist, Arnim Zola, found him and revived him. Just like Cap, he is built from a serum that granted him heightened abilities along with his metallic arm.",
"Natasha Romanoff was introduced by kicking Tony Stark's butt in the boxing ring in his own house! Ever since, shes been terrorizing villains. Not to mention she has no official powers, she's only been upgraded from agent to Avenger.","The man that calls the shots. Nick Fury! It's safe to say it was his idea for all the heroes to stop acting like they dont know each other out here fighting crime and assemble into a team. He formerly worked for S.H.I.E.l.D, but now serves as a vigilant along other loyal agents whose first priority is to fight the battles for those who never could.","He is king of the Jabarri Tribe and one of T'Challa's main villains. In actuality, he is a man-ape, but was portrayed by Winston Duke as a human in the Black Panther movie. His appearance and presence often intimidates his enemy",
"Leader of the Dora Milaje. Okoye is highly loyal to protecting the Wakandan throne.","One of the 5 tribes that make up Wakanda. Even though they live in isolation from the rest of the country, they lie within Wakanda's borders, therefore making M'Baku eligible to challenge for the throne. At nature, they are reliable and efficient warriors.",'No bio Availible','No bio Availible','No bio Availible','No bio Availible',"Overseer of the Universe... Nah, we'll just refer to him as the 'Gatekeeper'",'No bio Availible',"Our pop culture reference to Adolf Hitler, Red Skull represents a thirstful villain in his search for becoming the most powerful being. He introduced the MCU to infinity stones, in which harness the power to grant beings vast superpowers. (Yeah, them joints ain't no joke)",'No bio Availible',"One of the most powerful Avengers, she is the only one that can defeat Vision. She exists in different universes as a part of the X-Men. In fact, the MCUs only speedster (wait this isn't The Flash) is her brother. ",'No bio Availible',
'No bio Availible','No bio Availible',"Her super power is intelligence. She has studied the nature of the rare metal known as vibranium and used her research to make great advances in medicine, technology, etc. As sister of T'Challa and next in line to the throne, she makes the latest and most innovative tech, including the Black Panther's suit. Wakanda would not be what it is without her mind.","Ex-military pilot, Falcon, assists Captain America as his eyes in the sky. He has some cool gadgets that make him stand out from other sidekicks. His shades have some sort of x-ray vision capabilities that can scan through surfaces and locate enemies. As far as gadgets go, he has a controllable drone that can target enemies as well."," Pepper used to only be Tony Stark's housemaid, but they caught feelings quickly in the series and now are married. In the third Iron Man movie she was given super abilities by the movie's main villain, but she now seems to be ridden from those. She has the role of pleading to stay out of danger. (Like that's going to happen)","Giant alien who creates Weapons of Mass Destruction. First introduced in Avengers Infinity War.","SPOILER ALERT: In Infinity War, Stan Lee cameos as a bus driver. Judging by the scenery, while Spider-Man was riding the bus home during the 'Alien invasion', Stan Lee is shown driving the school bus across a bridge whilst Spidey sneaks out the window and reports to duty."];

var heroes = [];

function character(name, actor, alias, bio){
  this.name = name;
  this.actor = actor;
  this.alias = alias;
  this.bio = bio;
}

for(i = 0; i < names.length; i++){
  var hero = new character('name', 'actor', 'alias', 'bio');
  hero.name = names[i];
  hero.actor = actors[i];
  hero.alias = alias[i];
  hero.bio = bios[i];
  heroes.push(hero);
}

var body = document.querySelector('body');
var input = document.querySelector('input');
var list = document.querySelector('#list');
  var listCursor = 0;
  var idList = [];
var label = document.querySelector('label');
var randomBtn = document.querySelector('#random');
var link = document.querySelector('.a');
var div = document.querySelector('.full-bg');

var heroName = document.createElement('p');
heroName.setAttribute('class', 'name');
var heroActor = document.createElement('p');
heroActor.setAttribute('class', 'actor');
var shortBio = document.createElement('p');
shortBio.setAttribute('class', 'short');
var img = document.createElement('img');
var display = document.createElement('div');
display.setAttribute('class', 'display');
display.style.display = 'none';
div.appendChild(display);

window.onload = function(){
  list.setAttribute('class', 'datalist');
    for(i = 0; i < heroes.length; i++){
      var characters = document.createElement('div');
      characters.setAttribute('class', 'characters');
      characters.setAttribute('id', 'char' + i);
      characters.innerHTML += '<div class="cName" id="this">' + heroes[i].name.toUpperCase() + '</div>';
      characters.innerHTML += '<div class="cActor">' + heroes[i].actor.toUpperCase() + '</div>';
      characters.innerHTML += '<div class="cAlias">' + heroes[i].alias.toUpperCase() + '</div>';
      characters.innerHTML += '</div></div>';
      list.appendChild(characters);
      list.style.display = 'none';
    }
};

function changeUrl(){
  for(i = 0; i < names.length; i++){
	  if(input.value.toUpperCase() === heroes[i].name.toUpperCase() || input.value.toUpperCase() === heroes[i].actor.toUpperCase() || input.value.toUpperCase() === heroes[i].alias.toUpperCase()){
      var urlName = heroes[i].name;
      urlName = parseName(urlName);
      link.setAttribute('href','http://marvelcinematicuniverse.wikia.com/wiki/' + urlName);
    }
  }
}

function parseName(name){
    if(name.indexOf(' ') !== -1)
		name = name.replace(' ', '_');
	return name;
}

function displayBox(index, speed){
  shortBio.innerHTML = heroes[index].bio;
  img.setAttribute('src', 'images/pic' + index + '.jpg');

  display.appendChild(img);
  display.appendChild(heroName);
  display.appendChild(heroActor);
  display.appendChild(shortBio);

  heroName.innerHTML = heroes[index].name + '<br /> <div class="actor">' + '-' + heroes[index].actor + '</div>';

  $(".display").show(speed);
}

function moveCursor(pos){
  for(i = 0; i < idList.length; i++){
		idList[i].classList.remove('highlighted');
	}
	idList[pos].classList.add('highlighted');
}

function moveCursorX(pos){
  for(i = 0; i < heroes.length; i++){
		list.children[i].classList.remove('highlighted');
	}
	list.children[pos].classList.add('highlighted');
  input.value = upTolowX(pos);
  changeUrl();
}

function clear(){
  for(i = idList.length - 1; i >= 0; i--){
    idList.pop(i);
  }
}

function upTolow(pos){
  var text = idList[pos].firstChild.innerText;
  text = text[0] + text.substr(1).toLowerCase();
  if(text.indexOf(' ') !== -1){
    var index = text.indexOf(' ') + 1;
    var low = text.slice(index,index + 1);
    low = low.toUpperCase();
    text = text.replace(text[index], low);
  }
  return text;
}

function upTolowX(pos){
  var text = heroes[pos].name;
  text = text[0] + text.substr(1).toLowerCase();
  if(text.indexOf(' ') !== -1){
    var index = text.indexOf(' ') + 1;
    var low = text.slice(index,index + 1);
    low = low.toUpperCase();
    text = text.replace(text[index], low);
  }
  return text;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max-min+1)) + (min);
}

list.onmouseover = function(e){//@semi-author david walsh
  if(e.target.matches("div.characters") || e.target.id === 'this'){// || e.target.matches("div.cName")){// || e.target && e.target.matches("div.cName") || e.target && e.target.matches("div.cActor") || e.target && e.target.matches("div.cAlias")){
    for(i = 0; i < heroes.length; i++){
      if(e.target.innerText.toUpperCase() === heroes[i].name.toUpperCase() || e.target.innerText.toUpperCase() === heroes[i].actor.toUpperCase() || e.target.innerText.toUpperCase() === heroes[i].alias.toUpperCase()){
        displayBox(i, 77);
        moveCursorX(i);
      }
    }
  }
  if(e.target && e.target.matches("div.datalist"))
    display.style.display = 'none';
};

list.addEventListener('click', function(e){
  if(e.target.matches("div.characters") || e.target.id === 'this'){
    var p = document.querySelector('#p');
    p.style.display = 'block';
    link.click();
  }
});

list.onmouseleave = function(){
  display.style.display = 'none';
  for(i = 0; i < heroes.length; i++){
		list.children[i].classList.remove('highlighted');
	}
  input.value = '';
  changeUrl();
};

link.onfocus = function(){
	btn.style.color = 'yellow';
	btn.style.borderColor = 'green';
};

link.addEventListener('click', function(e){
  if(input.value === '')
    return;
  var match = 0;
  for(i = 0; i < heroes.length; i++){
    if(input.value.toUpperCase() === heroes[i].name.toUpperCase() || input.value.toUpperCase() === heroes[i].actor.toUpperCase() || input.value.toUpperCase() === heroes[i].alias.toUpperCase()){
      match = 1;
      var p = document.querySelector('#p');
      p.style.display = 'block';
    }
  }
  if(match === 0)
    alert('Could not find match ' + input.value + '. Please check spelling');
    return;
});

randomBtn.onmouseover = function(){
	randomBtn.style.color = 'DodgerBlue';
  randomBtn.style.borderColor = 'DodgerBlue';
};

randomBtn.onfocus = function(){
	randomBtn.style.color = 'DodgerBlue';
  randomBtn.style.borderColor = 'DodgerBlue';
};

randomBtn.onmouseleave = function(){
	randomBtn.style.color = 'white';
	randomBtn.style.borderColor = 'white';
};

randomBtn.onblur = function(){
	randomBtn.style.color = 'white';
	randomBtn.style.borderColor = 'white';
};

randomBtn.onclick = function(){
  var index = rand(0, heroes.length);
  displayBox(index, 255);
  input.value = heroes[index].name;
  changeUrl(index);
  input.focus();
};

randomBtn.keyup = function(e){
  if(e.keyCode === 13){ //should just displayBox. maybe toggle link.click on second keypress
    //e.preventDefault();
  //  randomBtn.click();
  }
};

input.addEventListener('keydown', function(e){
  if(e.keyCode === 13)
    e.preventDefault();
});

input.addEventListener('keyup', function(e){
  if(e.keyCode === 13){//enter
    if(input.value === '')
      return;
  var match = 0;
    for(i = 0; i < heroes.length; i++){
      if(input.value.toUpperCase() === heroes[i].name.toUpperCase() || input.value.toUpperCase() === heroes[i].actor.toUpperCase() || input.value.toUpperCase() === heroes[i].alias.toUpperCase()){
        link.click();
        match = 1;
        var p = document.querySelector('#p');
        p.style.display = 'block';
      }
    }
    if(match === 0)
      alert('Could not find match ' + input.value + '. Please check spelling');
  }
  if(e.keyCode === 39){ //right
    input.value = upTolow(listCursor);
    for(i = 0; i < heroes.length; i++){
      if(input.value.toUpperCase() === heroes[i].name.toUpperCase() || input.value.toUpperCase() === heroes[i].actor.toUpperCase() || input.value.toUpperCase() === heroes[i].alias.toUpperCase())
        displayBox(i);
    }
    changeUrl();
  }
  if(e.keyCode === 38){//down
    if(listCursor > 0){
			listCursor--;
			moveCursor(listCursor);
		}
  }
  if(e.keyCode === 40){//up
    if(listCursor < idList.length - 1){
			listCursor++;
			moveCursor(listCursor);
		}
  }

	return;
});

input.addEventListener('input', function(){
  $(".display").hide(500);
	if(input.value === '')
	  return;
  var i = 0;
  while(i < heroes.length){
    if(input.value.toUpperCase() === heroes[i].name.toUpperCase() || input.value.toUpperCase() === heroes[i].actor.toUpperCase() || input.value.toUpperCase() === heroes[i].alias.toUpperCase()){
      changeUrl(i);
      displayBox(i, 250);
    }
    i++;
  }
});

input.addEventListener('input', function(){
  $('.characters').hide();
  var val = input.value.toUpperCase();
  if(val !== '' && val !== ' '){
    clear();
    list.style.display = 'block';
    var ids = [];
    for(i = 0; i < heroes.length; i++){
      ids.push('char' + i);
      var thisId = document.querySelector('#' + ids[i]);
      var name = heroes[i].name.toUpperCase();
      var actor = heroes[i].actor.toUpperCase();
      var alias = heroes[i].alias.toUpperCase();
      if (name.indexOf(val)>=0 || actor.indexOf(val)>=0 || alias.indexOf(val)>=0){
        name = name.replace(val,"<strong class='selected'>"+val+"</strong>");
        actor = actor.replace(val, "<strong class='selected'>" + val + "</strong>");
        alias = alias.replace(val, "<strong class='selected'>" + val + "</strong>");
        /*thisId.childNodes[0].innerHTML = name;
        thisId.childNodes[1].innerHTML = actor;      //could replace following with this, but we'll use my implementation // now pack these boxes
        thisId.childNodes[2].innerHTML = alias;*/
        while (thisId.firstChild) {
          thisId.removeChild(thisId.firstChild);
        }
        thisId.innerHTML = '<div class="cName" id="this">' + name + '</div>';
        thisId.innerHTML += '<div class="cActor" id="this">' + actor + '</div>';
        thisId.innerHTML += '<div class="cAlias" id="this">' + alias + '</div>';
        $(thisId).show();
        idList.push(thisId);
        //moveCursor(listCursor); //will highlight first option on input
      }
    }
    if(idList.length != 0){
      moveCursor(listCursor);
	}
  }
  if(val === ''){
    list.style.display = 'none';
  }
});
