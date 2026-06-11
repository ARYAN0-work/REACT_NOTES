/*
# Pop Quiz

1. Where does React put all of the elements I create in JSX when I call `root.render()`?

- ROOT

- ACTU ANS => All the elements I render get put inside the div with the id of "root"
(or whatever other element I might select when calling createRoot)

theres two prt in 1st creating root and second renderingso when you render you out all the code inside that div id ="root

2. What would show up in my console if I were to run this line of code:

```jsx
console.log(<h1>Hello world!</h1>)

- MAYBE THIS WHOLE

- ACTU ANS => An object! Unlike creating an HTML element in vanilla DOM JS, what
gets created from the JSX we have in our React code is a plain JS object
that React will use to fill in the view.

give a object, its a plain js object it odes have a prototype chain set up in react can recognize and use

```

3. What's wrong with this code:

```jsx
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>

- NO WRAPPER COMPONENTS IN ORDER TO WORK A PARENT ELEMENT AND CHILDS IN IT

You can only render 1 parent element at a time. That parent element can have
as many children elements as you want.
)
```

4. What does it mean for something to be "declarative" instead of "imperative"?

- REACT WILLL DO THINGS BY ITS OWN

*Imperative* means we need to give specific step-by-step instructions on how
to accomplish a task.

*Declarative* means we can write our code to simply "describe" what should show up
on the page and allow the tool (React, e.g.) to handle the details on *how* to
put those things on the page.

5. What does it mean for something to be "composable"?

- IT CAN CREATE CUSTOM ELEMENTS

We have small pieces that we can put together to make something
larger or greater than the individual pieces themselves.

*/