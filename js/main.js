
/*

Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page 
that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  

The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for each day of the week.  
All of the above must occur within one page.

image ( a pic of the coffee)
alt (a description of the pic for people who can't see it)
description (a note about the cofee)
   weekday 
   color (to support the coffee)

   The unique color could affect the background HTML, or an element on the page 
   for each day of the week   All of the above must occur within one page  

   */

   function coffeeTemplate(coffee){
    return `<p> 
        <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong > </strong>${coffee.name}</strong>, ${coffee.desc}
        </p>`;
   }


   let myDate = new Date();
   let today = myDate.getDay();
   let coffee = "";

        //use location object to access querystring (address bar)
        const queryString = window.location.search;
            
        //output to console    
        console.log(queryString);
            
        //separate querystring parameters
        const urlParams = new URLSearchParams(queryString);

        if(urlParams.has("day")){//from querystring
            today = urlParams.get("day");
         }
         
         //convert the string to an integer
         today = parseInt(today);


   switch(today){
        case 1:
            today = "Monday";
            coffee = {
                color:"pink",
                name:"Bubble Tea",
                pic:"bubble-tea.jpg",
                alt:"A picture of a bubble tea",
                day:"Monday",
                desc:`I like me some bubble tea!`
            };
        break;

        case 2:
            today = "Tuesday";
            coffee = {
                color:"Brown",
                name:"Caramel Latte",
                pic:"caramel-latte.jpg",
                alt:"A picture of a caramel latte",
                day:"Tuesday",
                desc:`Its cold, so a caramel latter sounds good right now!`
            };
        break;

        case 3:
            today = "Wednesday";
            coffee = {
                color:"Black",
                name:"Cold Brew",
                pic:"cold-brew.jpg",
                alt:"A picture of cold brew",
                day:"Wednesday",
                desc:`I need some serious caffeine! Give me a cold brew!`
            };
        break;
        default:
            alert("something went wrong!");
   }


   console.log(coffee);
   document.getElementById("coffee-template").innerHTML=coffeeTemplate(coffee);

   //Here we are changing the background color of the html tag
document.querySelector("html").style.backgroundColor = coffee.color;