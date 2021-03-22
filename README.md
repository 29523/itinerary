# Lab 2 - A Day Itinerary (Interactive Storytelling)

## Collaborations and Reliance on Other Sources:
I wanted to learn how to code a storytelling style map for my group's final project and found a perfect tutorial at https://github.com/mapbox/storytelling. I tinkered with map locations such as **pitch** (angle of the map view) and **bearing** (degrees of rotation clockwise from North) using the template code. I also tested different **mapAnimation** options, **rotateAnimation**, **onChapterEnter**, and **callback** to insert my custom code (legend). I have shown this map to a friend, and she suggested I make a legend for the lines and polygons to be more explicit about what it indicates.

## Reflective Analysis
I designed this map for those looking forward to travelling after the pandemic by themselves or in a small bubble. I, for one, am incredibly excited for the summer when the vaccine rolls out, and there are many places to explore locally and safely in Vancouver. I used a storytelling method to show the available travel routes from one place to another in an interactive way. I think this map successfully engages with the audience as they scroll down from one location to another as if they are travelling right now. However, there are limited animations to choose from, scrolling down from one place to another, and I would have liked more options (e.g. speed) to animate the lines. 

I created several JSON polygons to represent the destination and lines to define walking or public transit routes. In hindsight, I could have made one entire JSON with all the necessary features, with the exception of a few that needs different customization in Mapbox. I used Mapbox Studio and imported all of my JSONs to create layers and customized the map to my liking (colour, dashed lines, thickness, and toggling 3D buildings). After creating the style of the map, I used the **helper** link in the tutorial to find all the location coordinates and used a code called **chapters**, which contains all the story content codes. I then created a custom callback function to create a legend on the map at all times: dashed black lines representing public transit and dashed green lines representing walking, while solid lines are used for buildings and locations indicating it stays in place. 

I think CSS could improve the current map visuals, such as centring each story title, changing the font, and resizing the images. After looking at the map for a long time, it does give me a slight headache from motion sickness, which should be an essential consideration as the reading about virtual reality explained. I want to look into coding a timer or speed function that shows down the motion to create smoother interactivity next time. Overall, I think the map does a great job in hooking the audience into a visual experience from one location to another. 

## Link to Map: 
https://29523.github.io/itinerary/

![Image of Vancouver](https://github.com/29523/itinerary/blob/main/mapgif.gif)
