---
title: "What is HTML Canvas?"
slug: "/blog/what-is-html-canvas"
date: "2020-03-04"
featuredImage: "./html-canvas.jpeg"
---

I've heard all about the Canvas API and, admittedly, have even used it multiple times without knowing exactly how it works or the full potential of it. The intention of this post is to help understand the best use cases for this API.

So let's start with the basic definition.

What is the Canvas API?
-----------------------

In the shortest way possible the Canvas API is defined by MDN as the following:

> The Canvas API provides a means for drawing graphics via JavaScript and the HTML `<canvas>` element.

At face value this means that the Canvas API has to consist of at least two parts. The space (read: canvas) in which our graphics will be drawn, and the means by which to draw them. So all the HTML really does here is provide a space for the JavaScript to actually draw the graphics.

Why is there a specific canvas element?
---------------------------------------

The canvas element is similar to the `<img>` element except it doesn't have any `src` or `alt` attributes. The only attributes that the canvas must have are width and height, however it can also be sized using CSS. Providing a fallback element is super simple, just place the element inside the `<canvas>` tag in order to do so.

Using the specific `<canvas>` tag ensures that only browsers capable of using the API are doing so, and also provides us a way to provide fallback content.

What are the best use cases for the Canvas API?
-----------------------------------------------

The Canvas API has a vast variety of use cases, many of which I would have never thought of. Rather than just thinking of Canvas as a way to draw static 2 dimensional shapes, it can also be used to create animations, build graphic design editors, visualizations, and much more.

The easiest way to learn more about this API is to start messing around with it!

How do I use the Canvas API?
----------------------------

For a full tutorial on how to use the Canvas API, head on over to [MDN's Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) to get started.

Basically you need to create a canvas element (with a fallback):

### index.html

    ...
    <canvas id="my-canvas" width="200" height="200">
        This is your fallback content.
    </canvas>
    ...

Then you need to grab your canvas element in your JavaScript code, and access the drawing context:

### index.js

    ...
    var canvas = document.getElementById('my-canvas');
    var ctx = canvas.getContext('2d');
    ...

And after that you can begin drawing! Note that canvas only support rectangles and paths. A rectangle is… well a rectangle, and a path is a list of points connected by lines. Every other shape you can imagine can be created using these two primitives, but these are the only two that are "built in".

Tutorial with code?
-------------------

If there's any interest in a more in depth tutorial on this topic, please leave a comment or yell at me on twitter and I'll post one soon.

Thanks for reading!