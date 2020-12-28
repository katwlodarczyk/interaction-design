# Interaction Design

#### Hosted at: https://katwlodarczyk.github.io/interaction-design/
---


## Introduction

This repository is a set of reusable React components that offer design solutions to real-world problems.

## 1. Splash screen

![splash screen](./src/assets/week1-display.jpg)

---
### Research
The main purpose of a splash screen is to show user that the application, or a part of it, is loading. Providing such display is helpful, because it reassures the user, that the application is still working and doing something in the background. As Grigsby in Progressive web apps states, *"Immediate feedback—such as highlights, sounds, animations, and other responses to interaction— help users understand where they are, what they’re doing, and how they can interact with the app. Google’s Material Design also places an emphasis on providing feedback with every interaction."*

Rohit Bhargava, in his book "Non obvious : how to think different, curate ideas & predict the future." talks about the Canadian research on attention span. It turns out, that *"humans have a shorter attention span than goldfish."* This discovery is crucial, because using a splash screen is asking users to wait. Using a gamification concept (*"adding game mechanics to non-gaming scenarios"* [^1] ), the waiting experience can change from boring, to exciting.
Animated character performing a task and a progress bar, so known from a game environment, helps keeping users more engaged.  

---

### Evaluation of guidelines

#### Colour 
The colour palette chosen for this component is kept within the main principles of Material Design guidelines: consistency, distinction and intention. 

![color palette](./src/assets/color-palette.jpg)

Primary colour (#6C63FF) have been used for animated objects, such as products and a progress bar, to gain users attention.
Secondary colour (#D1D9E4) have been used as a background. Additionaly, dark secondary colour variant (#A5B9CB) is used as a background blob for the animation, to create a sense of belonging.
White (#FFFFFF) and black (#000000) have been chosen for typography. For good contrast, white is used on dark backgrounds, and black on light backgrounds.

#### Motion 

As stated previously, motion can provide feedback. A good transition choreography, a sequence in which elements move, helps users understand what is happening and what has changed. 
Using the animation of a person filling the shopping cart with one product at a time, an showing how many products have left on the shelf, user can evaluate how long he has to wait. 

![animation](./src/assets/animation.gif)

Additionaly, a progress bar at the bottom adds a bit more reasurance. 


![progress bar](./src/assets/progress-bar.gif)


---
### Planning and design prototyping
The idea for presented splash screen was to, in elegant and modent way, show the user how long it will take for the application to load.
A subtle animation of a person filling their shopping cart with products of the shelf, and additional loading bar changing colour and displayed percentage number, are a clear and communicative form of feedback.
The animation may also play a role of an entertainment while the user waits.

The creation of the design began from creating an animation. 
An illustration from Undraw.co have been imported to Figma, and separate frames have been created by changing the colour and position of elements. Then, using TinyImage plugin, frames have been merged to create a gif animation. 

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

The created component is solving real-world problem of notifying user about the change/work in the background and keepeing him engaged while waiting. Common industry standards and principles have been identified and used. Research have provided necessary insights of human attention span and gamification concept.

---

[^1] PANNAFINO, J., 2012. *Interdisciplinary interaction design*. United States: Assiduous Publishing. p.45

--- 


## 2. Toggle Switch

![toggle switch](./src/assets/week9-display.jpg)

---
### Research

According to Material Design (https://material.io/components/switches), *"switches are the preferred way to adjust settings on mobile"*. These components are great to toggle between the state of the option (for example on and off) with immediate effect. Animated switch thumb provides easy to understand feedback signaling the change.

#### Light/Dark mode

Providing the ability to change theme of the website or app have become a new trend in UX/UI. Apart from being hipp and cool, this movement also increases usability and accesibility. As [Sheri Byrne-Haber](https://uxdesign.cc/accessibility-and-dark-ui-themes-f01001339b65) [^2] states, *"Dark modes are less prone to triggering photophobia"* and are *"easier to use in a dimly lit room"*. Some people find it easier to read white letters on a dark background rather than dark letters on a light background. Byrne-Haber also points out, that switching between light and dark mode should be *"obvoius and easy to find"* and that the chosen option should be saved for any future visit of that user. 

---
### Evaluation of guidelines

Toggle switches should adapt to different platforms, to match the overall design and familiar functionality. This component has been designed for IOS system, hence the platform-specific design have been applied.

#### Touch target / Size
When designing for touch screen devices, the size of clickable elements should be big enough for a comfortable usage. *"Touch target refers to the target are of a digital button or link in relation to a person's finger size."* [^1] Material Design advices to design the switch thumb 20px big with the switch track 36px wide. Apple does not provide exact measurements for IOS.

#### Colour 

Toggle switches should be customised to match the colour scheme of the application. Both Material Design and Apple recommend tinting a switch.
This switch has been created to toggle between light and dark mode, so it is using two colour gradients, accordingly of the selected option. 

#### Motion

Similarly to the splash screen component, subtle animation provides user with immediate, noticable feedback.

---
### Planning and design prototyping

Design prototyping began from creating two toggle switches, one for each toggle state.

![switches](./src/assets/togglers.jpg)

Icons used for this project are from [Iconify plugin for Figma](https://www.figma.com/community/plugin/735098390272716381/Iconify) and status bar is a part of a [Navigation bar community file](https://www.figma.com/community/file/820010220549989949). 
Having all the assets, two Iphone X frames were created, with status bars, switches, some dummy content containers and an IOS swipe up bar. Background for each frame is set to match the gradient of the toggle switch.

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

Popularity of dark themes is increasing and more websites or applications give their users the ability to choose between light and dark mode. Using a toggle switch for this purpose is an efficient way to present the available choice. Sun and moon emoji icons are a familiar symbols of light and dark. This graphic representation makes it clear on what the component is used for.

Created toggle switch is a modern approach to present a choice that increases accesibility and usability, while still fitting within the industry and specific platform standards.  

---
[^1]: PANNAFINO, J., 2012. *Interdisciplinary interaction design*. United States: Assiduous Publishing. p.78

[^2]: BYRNE-HABER, S. , 2019. *Dark UI themes are new and cool — but are they accessible?* In UX Collective. 16.09.2019