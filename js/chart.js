// file to hold the object containing the clothing info
//an object of objects seems best, so you can find the right object when you have the temperature key
//range from -15 to 80 in 5°
//it might be better to give a smaller range of outfits, maybe like 7
//and then use if/else statements to pass the temperature in and return an outfit object
//this would also make it easier for the user to request a slightly warmer or cooler outfit.
//roughly: a -15, b 0, c 15, d 30, e 45, f 60, g 75, h 80

var chartData ={
'a' : {'head' : 'Facemask, scarf, hat and goggles' ,
  	    'legs' : 'Thermal underlayer, winter bike pants',
  	    'chest' : 'Insulating layer and windproof layer',
  	    'feet' : 'Winter boots and wool socks',
  	    'hands' : 'Windproof mittens'
		} ,
  //  below freazing
'b' : {'head' : 'Facemask and hat',
  	    'legs' : 'Thermal underlayer, winter bike pants',
  	    'chest' : 'Insulating layer and windproof layer',
  	    'feet' : 'Winter boots and wool socks',
  	    'hands' : 'Windproof mittens'
		} ,
    //33-45
'c' : {'head' : 'Hat and scarf',
	      'legs' : 'Thermal underlayer and winter bike pants',
  	    'chest' : 'Insulating layer and windproof layer',
  	    'feet' : 'Winter boots and wool socks',
  	    'hands' : 'Windproof mittens'
		} ,
    // 33-45 with rain
'd' : {'head' : 'Winter beanie',
  	    'legs' : 'Warm pants',
  	    'chest' : 'Windproof jacket' ,
  	    'feet' : 'Normal shoes and warm socks' ,
  	    'hands' : 'Winter gloves'
		 },
     // 46 - 60
'e' : {'head' : 'helmet',
  	    'legs' : 'Warm pants',
  	    'chest' : 'Windproof jacket',
  	    'feet' : 'Normal shoes and warm socks' ,
  	    'hands' : 'Light gloves'
		} ,
    // 61 - 75
'f' : {'head' : 'helmet' ,
  	    'legs' : 'Light pants or shorts' ,
  	    'chest' : 'Light sweater' ,
  	    'feet' : 'Summer shoes' ,
  	    'hands' : 'Light gloves or bare hands'
		} ,
    // 76 or hotter
'g' : {'head' : 'helmet' ,
  	    'legs' : 'Light pants or shorts' ,
  	    'chest' : "Light shirt",
  	    'feet' : 'Summer shoes' ,
  	    'hands' : 'Bare hands'
		}
  };
