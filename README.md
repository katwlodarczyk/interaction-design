# Interaction Design

#### Hosted at: https://katwlodarczyk.github.io/interaction-design/
---


## Introduction

This repository is a set of reusable React components that offer design solutions to real-world problems. Those components show the broad spectrum of possibilities of coding in React. 

Five components have been supported with research, evaluation of guidelines, design prototyping, coding, screencast, and a personal reflection. 

You can also see all 9 components, by clicking on the link at the bottom of the hosted page.

---

[1. Splash screen](#1-splash-screen)
  * [Research](#research)
  * [Evaluation of guidelines](#evaluation-of-guidelines)
  * [Planning and design prototyping](#planning-and-design-prototyping)
  * [Coding:](#coding-)
  * [Screencast](#screencast)
  * [Reflection](#reflection)

[2. Toggle Switch](#2-toggle-switch)
  * [Research](#research-1)
  * [Evaluation of guidelines](#evaluation-of-guidelines-1)
  * [Planning and design prototyping](#planning-and-design-prototyping-1)
  * [Coding](#coding)
  * [Screencast](#screencast-1)
  * [Reflection](#reflection-1)

[3. Mobile Navigation](#3-mobile-navigation)
  * [Research](#research-2)
  * [Evaluation of guidelines](#evaluation-of-guidelines-2)
  * [Planning and design prototyping](#planning-and-design-prototyping-2)
  * [Coding](#coding-1)
  * [Screencast](#screencast-2)
  * [Reflection](#reflection-2)

[4. Forms and User Feedback](#4-forms-and-user-feedback)
  * [Research](#research-3)
  * [Evaluation of guidelines](#evaluation-of-guidelines-3)
  * [Planning and design prototyping](#planning-and-design-prototyping-3)
  * [Coding](#coding-2)
  * [Screencast](#screencast-3)
  * [Reflection](#reflection-3)

[5. Modal](#5-modal)
  * [Research](#research-4)
  * [Evaluation of guidelines](#evaluation-of-guidelines-4)
  * [Planning and design prototyping](#planning-and-design-prototyping-4)
  * [Coding](#coding-3)
  * [Screencast](#screencast-4)
  * [Reflection](#reflection-4)

---


## 1. Splash screen

![splash screen](./src/assets/week1-display.jpg)

---
### Research
The main purpose of a splash screen is to show the user that the application, or a part of it, is loading. Providing such display is helpful, because it reassures the user, that the application is still working and doing something in the background. As Grigsby in Progressive web apps states, *"Immediate feedback—such as highlights, sounds, animations, and other responses to interaction— help users understand where they are, what they’re doing, and how they can interact with the app. Google’s Material Design also emphasizes on providing feedback with every interaction."*

Rohit Bhargava, in his book "Non obvious: how to think different, curate ideas & predict the future." talks about Canadian research on attention span. It turns out, that *"humans have a shorter attention span than goldfish."* This discovery is crucial because using a splash screen is asking users to wait. Using a gamification concept (*"adding game mechanics to non-gaming scenarios"* [^1] ), the waiting experience can change from boring, to exciting.
Animated character performing a task and a progress bar, so known from a game environment, helps to keep users more engaged.  

---

### Evaluation of guidelines

#### Colour 
The colour palette chosen for this component is kept within the main principles of Material Design guidelines: consistency, distinction, and intention. 

![color palette](./src/assets/color-palette.jpg)

Primary colour (#6C63FF) has been used for animated objects, such as products and a progress bar, to gain user's attention.
Secondary colour (#D1D9E4) have been used as a background. Additionally, a dark secondary colour variant (#A5B9CB) is used as a background blob for the animation, to create a sense of belonging.
White (#FFFFFF) and black (#000000) have been chosen for typography. For good contrast, white is used on dark backgrounds and black on light backgrounds.

#### Motion 

As stated previously, motion can provide feedback. A good transition choreography, a sequence in which elements move, helps users understand what is happening and what has changed. 
Using the animation of a person filling the shopping cart with one product at a time, and showing how many products have left on the shelf, the user can evaluate how long he has to wait. 

![animation](./src/assets/animation.gif)

Additionaly, a progress bar at the bottom adds a bit more reasurance. 


![progress bar](./src/assets/progress-bar.gif)


---
### Planning and design prototyping
The idea for the presented splash screen was to, in an elegant and modern way, show the user how long it will take for the application to load.
A subtle animation of a person filling their shopping cart with products of the shelf, and an additional loading bar changing colour and displayed percentage number, are a clear and communicative form of feedback.
The animation may also play the role of entertainment while the user waits.

The creation of the design began with creating an animation. 
An illustration from Undraw.co has been imported to Figma, and separate frames have been created by changing the colour and position of elements. Then, using the TinyImage plugin, frames have been merged to create a gif animation. 

![illustration](./src/assets/illustration.jpg)

After that, an iPhone X frame has been selected and a prototype design created using chosen colour palette. 

![figma display](./src/assets/figma-display.jpg)

### [Explore the Splash Screen Figma file](https://www.figma.com/file/1N3XzTEanRil1uvJlh741f/shopping-cart-gif?node-id=28%3A0)

---
### Coding:
![week1 code](./src/assets/week1.png)


---
### Screencast

![screen cast](./src/assets/1.gif)

---

### Reflection

The created component is solving the real-world problem of notifying the user about the change/work in the background and keeping him engaged while waiting. Common industry standards and principles have been identified and used. Research has provided necessary insights of human attention span and the gamification concept.

---

[^1] PANNAFINO, J., 2012. *Interdisciplinary interaction design*. United States: Assiduous Publishing. p.45

--- 


## 2. Toggle Switch

![toggle switch](./src/assets/week9-display.jpg)

---
### Research

According to [Material Design](https://material.io/components/switches), *"switches are the preferred way to adjust settings on mobile"*. These components are great to toggle between the state of the option (for example on and off) with immediate effect. Animated switch thumb provides easy to understand feedback signaling the change.

#### Light/Dark mode

Providing the ability to change the theme of the website or app has become a new trend in UX/UI. Apart from being hipp and cool, this movement also increases usability and accessibility. As [Sheri Byrne-Haber](https://uxdesign.cc/accessibility-and-dark-ui-themes-f01001339b65) [^1] states, *"Dark modes are less prone to triggering photophobia"* and are *"easier to use in a dimly lit room"*. Some people find it easier to read white letters on a dark background rather than dark letters on a light background. Byrne-Haber also points out, that switching between light and dark mode should be *"obvious and easy to find"* and that the chosen option should be saved for any future visit of that user. 

---
### Evaluation of guidelines

Toggle switches should adapt to different platforms, to match the overall design and familiar functionality. This component has been designed for the IOS system, hence the platform-specific design has been applied.

#### Touch target / Size
When designing for touch screen devices, the size of clickable elements should be big enough for comfortable usage. *"Touch target refers to the target area of a digital button or link in relation to a person's finger size."* [^2] Material Design advice to design the switch thumb 20px big with the switch track 36px wide. Apple does not provide exact measurements for IOS.

#### Colour 

Toggle switches should be customized to match the colour scheme of the application. Both Material Design and Apple recommend tinting a switch.
This switch has been created to toggle between light and dark mode, so it is using two colour gradients, accordingly to the selected option. 

#### Motion

Similar to the splash screen component, subtle animation provides the user with immediate, noticeable feedback.

---
### Planning and design prototyping

Design prototyping began by creating two toggle switches, one for each toggle state.

![switches](./src/assets/togglers.jpg)

Icons used for this project are from [Iconify plugin for Figma](https://www.figma.com/community/plugin/735098390272716381/Iconify) and the status bar is a part of a [Navigation bar community file](https://www.figma.com/community/file/820010220549989949). 
Having all the assets, two IPhone X frames were created, with status bars, switches, some dummy content containers, and an IOS swipe up bar. The background for each frame is set to match the gradient of the toggle switch.

![frames](./src/assets/frames.jpg)

### [Explore the Toggle Switch Figma file](https://www.figma.com/file/KLM2XcjdWnYNGjv82R3RCu/toggle-switch?node-id=33%3A0)

--- 

### Coding
![week9 code](./src/assets/week9.png)


---
### Screencast

![screen cast](./src/assets/toggle-cast.gif)

---

### Reflection

The popularity of dark themes is increasing and more websites or applications give their users the ability to choose between light and dark mode. Using a toggle switch for this purpose is an efficient way to present the available choice. Sun and Moon emoji icons are familiar symbols of light and dark. This graphic representation makes it clear what the component is used for.

A created toggle switch is a modern approach to present a choice that increases accessibility and usability, while still fitting within the industry and specific platform standards.  

---
[^1]: BYRNE-HABER, S. , 2019. *Dark UI themes are new and cool — but are they accessible?* In: UX Collective. 16.09.2019

[^2]: PANNAFINO, J., 2012. *Interdisciplinary interaction design*. United States: Assiduous Publishing. p.78

--- 


## 3. Mobile Navigation

![mobile navigation](./src/assets/week5-display.jpg)

---
### Research

Navigation is a crucial feature of any website or application, as it helps the user find their way around. There are many types of different navigations, and choosing the right one for a project will have a big impact on whether it is successful or not.

Mobile screens are small, and designers should remember to *"prioritize content over chrome"* [^1]. The challenge is to make navigation accessible while doing so. 

Different operating systems have their own specific guidelines, which should be followed when designing for a specific one.

There are four main groups of navigations usually used while creating a mobile-friendly website or app: navigation bar, tab bar, hamburger menu, and navigation hub.

This component uses two different navigation systems: a tab bar (bottom navigation) and a hamburger menu. Tab bar, being the most accessible and visible on all pages, have been used for the most important destinations. The hamburger menu, placed in the top right, contains less popular items, like settings or about app page links. 
 
---
### Evaluation of guidelines

Material Design advice to use [bottom navigation](https://material.io/components/bottom-navigation) for items that need to be accessible from anywhere in the app. The principle is to place only three to five destinations. Icons used on bottom navigation should be easy to understand, with or without labels. 
Items on the bottom navigation should change appearance when changing state, to notify the user where he is now, therefore an active icon should be a different colour than the inactive one. Hamburger menus, or navigation drawers, are recommended by Material Design for apps with more than 5 destinations, multiple level hierarchies, and for quick navigation between unrelated items. 

Apple's guidelines for [bottom navigation](https://developer.apple.com/design/human-interface-guidelines/ios/bars/tab-bars/) are similar. They should be used for the most important destinations only. There are, however, no guidelines for hamburger menus. 

As previously stated, the created component has two navigations. 

Tab bar navigation is used to direct the user to the five, most popular destinations in the app: home, chat, add new, notifications, and user profile. It is visible and accessible at all times. Its bottom position makes it comfortable to use with a thumb. Icons are very symbollic and easy to understand. The active item is accentuated with a different colour.

The top right location of the hamburger menu icon is the most popular for this purpose, which makes it easy to find. Items in the menu are big enough and with appropriate spaces between elements to tap comfortably at a wanted content. To differentiate the open menu from the main area, a delicate overlay is created to dim the main window content and to help the user focus on the menu. Items placed in this navigation location are less popular and usually accessed less often. 

Colour palette used for this component matches the overal palette of the app.

---
### Planning and design prototyping

Planning began from exploring possible options and grouping items that needed to be present in navigation.

The layout of the app page has been created, then both bottom navigation and a hamburger menu were designed. Lastly, transition animations were added to fully express the idea.

### [Explore the Mobile Navigation Figma file](https://www.figma.com/file/Pk6WKZqfGc468qzscqjb4b/Untitled?node-id=0%3A1)

--- 

### Coding
![week5 code](./src/assets/3.png)


---
### Screencast

![screen cast](./src/assets/3.gif)

---

### Reflection

Conducted research has helped to identify possible options for displaying navigation and to choose the right one for a needed purpose. 
Guidelines provided by Material Design and Apple revealed design principles needed to create the best possible outcome that solves a real-world problem.
A presented component is up to the current industry standards.

---
[^1]: BUDIU, R. , 2015. [*Basic Patterns for Mobile Navigation: A Primer*](https://www.nngroup.com/articles/mobile-navigation-patterns/) In: Nielsen Norman Group. 15.11.2015


--- 


## 4. Forms and User Feedback

![Forms and User Feedback](./src/assets/week7-display.jpg)

---
### Research

Forms are an important part of websites or applications. As Senior Usability Engineer [Cliff Anderson](https://www.nngroup.com/online-seminars/fundamentals-designing-usable-and-effective-forms/) points out, *"users complete them to enroll, purchase, register, apply, self-service, and give feedback."* A well-designed form should be as short as possible, fields and their label should be visually grouped together and required fields clearly labeled. Furthermore, Clear or Reset buttons should be avoided. [^1]

Any Human-Computer interaction may come with a user error. A form should not allow the user to submit without required fields filled up and when the error occurs, easy-to-read feedback should appear to help the user correct any mistakes. [^2] 

When asking users to provide sensitive data, security is really important. A solution to reduce the risk of breaching sensitive information or credentials is using federated logins. *"Federated logins allow people to log into a website using credentials from other sites—typically larger organizations like Google, Facebook, or Microsoft. In addition to eliminating the need to remember separate credentials, federated logins are also more secure because the large technology companies have more resources devoted to securing their networks and detecting malicious activity. Not storing credentials also decreases the risk for site owners."* [^3]

Nowadays people browse the internet on laptops, tablets, mobile phones, or even their TVs. Such a large scale of different screen sizes makes responsive design a necessity when creating a website. A form should look good and be easy to fill no matter which device is used to access it. Changing the size of the elements, repositioning, or even eliminating purely decorative content on the smallest screens are possible ways to adapt the website to user's needs. [^4]

---
### Evaluation of guidelines

Form component lets the user add data via different fields. Text, number, email, date, or colour picker field types are just a few examples. The type of the field should always match the intended data. 
[Material Design](https://material.io/components/text-fields) principles for fields are: discoverable, clear, and efficient.

Created sign up form component contains three input fields: two text type fields and one password type field. The active state of the selected field changes its border colour to assure the user of his location. All fields have their labels and required fields are marked with an asterisk (*) symbol.  
The form also uses two types of assistive elements: a helper text for a password field, and error messages for all required fields. Error messages appear on the screen when the user clicked a sign-up button without filling in all of the required fields. This action prevents from submitting incomplete forms. Error messages clearly describe errors.
Additional show password icon has been added to the password field area, to help the user make sure the typed password is correct. 

An option for federated login is present to reduce the amount of sensitive data being kept by the form owner. Allowing users to sign in using their social media accounts also increases user experience.  

---
### Planning and design prototyping

Planning assesed which form fields should be used and the best responsive layout for smaller screen sizes.

Colour palette matches the overal colours of the website.

Illustration from [MaxyPixels](https://www.manypixels.co/gallery/?page=1&s=authentication&style=twoColor) have been used for decoratory purposes.

--- 

### Coding
![week7 code](./src/assets/4.png)


---
### Screencast

![screen cast](./src/assets/4.gif)

---

### Reflection

Created form component solves a real-world problem of badly designed and not user-friendly sign-up forms. 

Research and evaluation of guidelines uncovered the best practices to follow. The option of federated logins reduces the risk that comes with holding the user's sensitive data. User errors have been minimized by displaying clear feedback messages and preventing submitting an empty form.

The form successfully implements the best usability practices while still being modern and visually attractive to the user.

---
[^1]: WHITENTON, K., 2016. [*Website Forms Usability: Top 10 Recommendations*](https://www.nngroup.com/articles/web-form-design/). In: Nielsen Norman Group. 1.05.2016

[^2]: PANNAFINO, J., 2012. *Interdisciplinary interaction design*. United States: Assiduous Publishing. p.80

[^3]: GRIGSBY, J., 2018. *Progressive web apps* New York:A Book Apart. p.117

[^4]: PANNAFINO, J., 2012. *Interdisciplinary interaction design*. United States: Assiduous Publishing. p.67

--- 


## 5. Modal

![Modal](./src/assets/week8-display.jpg)

---
### Research

As [Material Design](https://material.io/components/dialogs) explains, modal, or *" a dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision."* The main principles of a modal are focused, direct, and helpful. An open dialog box is interruptive, therefore should not be overused. There are several different types of popovers, alert, confirmation, full-screen and simple. When used properly, they will enhance the project or website. [Apple guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/views/popovers/) inform how popovers should be designed and when they should be used.

---
### Evaluation of guidelines

Created modal is a simple dialog that displays more information about the illustration of the month. The main window's minimalistic layout stays uncluttered, while still providing all the details to those who are interested. 

Interaction with the other parts of the website is disabled when the modal is open. To close the modal, the user can either click on the close (X) button or click/tap anywhere outside the modal window. 

A popover is positioned centrally on the screen and works well on different screen sizes. 

Colour palette and typography match the rest of the website, and transitions between the windows are smooth and seamless. 

---
### Planning and design prototyping

Prototyping began with the idea of displaying an image of the month. Upon clicking the 'more details' button, information about the illustration and a link to the website where the image can be downloaded from are displayed.

![rocket](./src/assets/rocket.png)

Two-tone rocket illustration from [ManyPixels](https://www.manypixels.co/gallery/?page=1&s=rocket&style=twoColor) has been chosen as an illustration of the month. 

--- 

### Coding
![week8 code](./src/assets/8.png)


---
### Screencast

![screen cast](./src/assets/5.gif)

---

### Reflection

The presented reusable component solves the issue of displaying all details without cluttering the minimalist layout of the main window. 
Modal works on all screen sizes, match the overall look of the project and is easy to use with a mouse, keyboard, or on touch screen devices. Created modal is sleek and stylish.

Research has helped to discover different types of dialog boxes and choose the right one for a specific purpose. 
Guidelines from Material Design and Apple ensured the design fits within the industry standards. 
