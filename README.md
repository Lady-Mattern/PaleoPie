# GA_Unit2_Project
# Title: Paleo Pie

This is a mock up of an online restaurant service dedicated to pies made with alternative ingredients.

## The Pie Related Problem

Many people all over the world find the need to conform to an alternative diet for reasons of health or conscience. 

These diets include Paleo, Autoimmune Paleo, GAPS, Keto, and others. The idea behind these life changes is to eliminate foods that cause inflammation and digestive issues in the gut which can inflame autoimmune, and other gut related maladies. 

Paleo Pie is a fictitious bakery dedicated to the Paleo and Autoimmune Paleo diets to allow those with autoimmune issues access to delicious baked goods that are compliant with their diet restrictions and food intolerances. 

## Technologies Used

Deployed to Heroku - 
https://paleo-pie.herokuapp.com/PaleoPie

Front End - 
* HTML
* CSS

Back End - 
* Express
* React
* JSX

Database - 
* MongoDb
* Mongoose

## Design Concept

![paleo_pie_moods](https://user-images.githubusercontent.com/40584267/85188800-61ce8c00-b277-11ea-9d1d-af1060e79a8d.jpg)

The vibe I was going for here was sort of a hipstery type of bakery café style. Lots of warm, woods. Charming chalk boards, and shabby industrial string lighting. Sort of rustic and friendly.
_________

## In The Beginning...

My initial project idea was written down in my notebook. As were my wireframes. 

My initial thoughts for the Pie site came in form of the View Pages.

### **Index Page**
This page lists all of the pies the bakery makes. This should include an anchor tag image that links to the show page, and the pie description.

### **Show Page**
Shows the pie you selected (clicked on). 
- Pie name
- Pie description
- Pie price
- Pie ingredients

### **Edit Pie**
If the user would like to order a pie the bakery makes, but has some allergy to any of the ingredients, they can click the Edit This Pie button to choose friendlier ingredients. 

### **Create Pie**
Users can create their own pie from a selection of ingredients the bakery can use to make a unique creation.

### **Delete Pie**
User can delete any pie they have created.

___________

## Developed Structure
As my site developed, I learned that I should like to add some view pages to my site. Here are some of them.

### **Fan Faves**
This page will act as a new Index page, but it will house all of the user created pies. Fans should have the option to change these items...

- Pie name
- Pie description
- Pie ingredients
- Pie image - the future site should give the user the option to upload an image from their computer, but for now, they can copy a url to paste in leu of the default image.

### **About Paleo Pie**
Most new age, hpstery pages like this one have an adorable story. Paleo Pie is no different. Unfortunately, this incarnation will have some dummy text in the form of 'Cupcake Ipsom.'
At least for now...

## Challenges
Two major challenges presented themselves when creating this app.

### Issue One
My Create and Edit routes use forms with checkboxes so that the user sees the selection of ingredients they have to choose from. The idea was that each checked ingredient would be pushed to either the 'crust' or 'filling' array so they could viewable by the user.

This threw me for a loop because I was not sure how to add all the button logic to the create route. I was worried I would need a ton of conditional statements. 

### Issue Two
Using CSS to style the JSX pages has proven quite tricky. Selectors that I have used for plane front-end work do not work in React. Especially in forms. I have not been able to style the labels and checkboxes the way I would like.

### Surprise Third Issue
I thought once I got the Create route all figured out I could use similar logic for the Update route. Not so much. 
I was not able to get the edited pie updated to the Fan Faves page like I intended. 

## Successes

At long last, I was finally able to display the newly created pie and it's ingredients to the Fan Faves page. The user can delete it if they want as well.

The site looks great too. I was not able to completely figure out how to style some things, but I think the overall product looks good. 

I also learned so much about how each page of the website is connected now. 

There are so many more things I would like to learn. I would like to know how to add a 'download' button so people can upload images directly from their computers. 

I would also like to know more about how to style pages in React and how to pull and manipulate information from web forms.

## To The Future and Beyond

I would love to make Paleo Pie function more like a real bakery website! Here are a couple of things that I would love to add to help the site grow.

- A Shopping Cart feature! Down the road a bit, there will be a button added to each pie that will add each choice to a 'cart page.' Users will be able to view their cart to find a list of the pies that they chose to purchase.
- The cart will be able to add up the pie prices and calculate the total and mae it visable to the user so they can make an informed purchase.
- Gotta add the functionality to allow users to actually upload their hand drawn pie pictures and pie photographs to the Fan Faves page!
