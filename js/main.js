
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

   let myDate = new Date();
   let today = myDate.getDay();
   let coffee = "";

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

        default:
            alert("something went wrong!");
   }


   console.log(coffee);