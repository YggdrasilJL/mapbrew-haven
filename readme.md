# Mapbrew - RPG Map Builder

## Project Description

Mapbrew is an interactive website focused on users creating tile based maps that are perfrect for tabletop RPGs. Unleash your endless imagination, whether to use for immersive gaming experiences or simply artistic expression. Bring your worlds into reality with MapBrew. Users can create an account so they can store their maps for future use. 

## Future Features

- Expansion of tiles to encompase both indoor and more outdoor weather conditions and attributes
- All campaign members able to join a single league to see game maps and interact with the DM on their favourites 
- Chat function on the league 
- Dungeon/Game Master note sections for keeping track of campaign storyline
- Eventual character creation section with exportable artwork


## Table of Contents

- [Deployed Webpage](#deployedpage)
- [Installation](#installation)
- [Examples](#examples)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Deployed Website <a id='deployedpage'></a> 

[Mapbrew Website](https://mapbrew-websitee-20a575919a4b.herokuapp.com)

## Installation <a id="installation"></a>

No need to install anything, just head to our website link and create an account!

## Examples <a id="examples"></a>

Main Page 
![Main Page](./public/assets/images/site%20examples/mainexample.png)
Login Page
![login Page](./public/assets/images/site%20examples/loginexample.png)
Map Builder
![Map Builder](./public/assets/images/site%20examples/builderexample.png)
FAQ Page
![FAQ Page](./public/assets/images/site%20examples/faqexample.png)

## Credits<a id="credits"></a>

- Lock and Unlock images by DinosoftLabs on flatiron.com 

## User Model Testing <a id="tests"></a>

### Password Hashing
This test verifies that passwords are securely hashed before being stored. The input password is hashed using bcrypt with a complexity factor of 10. Assertions check password mismatch, input password matching hashed password, and the correct storage of the hashed password.

### Authentication Checks
Two tests authenticate users:
- It compares a correct password using checkPassword() method, expecting true.
- It compares an incorrect password using checkPassword(), expecting false.
These tests ensure secure password handling and reliable authentication functionality in the User model.

## Questions <a id="questions"></a>

This website was divised and completed by Jacob Lowther, Nikki Vigneault, Daniel Grayson, and Scott Ogrins, if you'd like to see more of our work see our github repositories below:

Jacob - [YggdrasilJL]("https://github.com/YggdrasilJL")<br>
Nikki - [nikkivno]("https://github.com/nikkivno")<br>
Daniel - [GrayCoded]("https://github.com/GrayCoded")<br>
Scott - [Scoges]("https://github.com/scoges")

## Who Did What


Jacob
- RESTful API (bulk)
- HTML/CSS/JS front end 
- schema/seeds clean up
- Authentication
- Heroku

Nikki 
- HTML/CSS/JS front end
- Front end Design/Wireframe
- schema/seeds clean up
- RESTful API help 
- Authentication 
- Swiperjs 
- README File
- Heroku
- Presentation Slideshow


Daniel 
- Schema Creation
- Table Creation
- Authentication
- Swiperjs

Scott
- Tile Generation 
- Mapbuilder.js to integrate map builder into website 
- Authentication (spearheading)
- Presentation Script