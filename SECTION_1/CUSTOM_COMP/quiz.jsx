/*
# 1. What is a React component?

- a component is a particular variable contain set of cod => wrong

- a function that returns React elements(Ui)

- a react elements is a react version of what we see in the Dom you can think of it kind of like the react version of an HTML element and because jsx looks so similar to HTML elements we can call them react eleements however the main diffrence is we are returning react elements like our div and our header and everything else that you see here well first is turning jsx syntax into calls to react.create eleement and then create eleement function is turning them into js object  that react is able to interpret and turn into real dom nodes under the hood 

# 2. What's wrong with this code?

```jsx
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}

- PASCAL CASE  MyComponent()
```

# 3. What's wrong with this code?

```jsx
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
-> wrongky written <Header/>
*/