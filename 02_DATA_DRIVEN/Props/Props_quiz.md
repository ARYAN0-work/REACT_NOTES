1. What do props help us accomplish?
Make a component more resuable. also its not neccesary to always use props bcz smetimes we ave to use props max 1 or 2 times max ;come wuth experience

2. How do you pass a prop into a component?
<MyAwesomeHeader tittle="???"/>

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
no, when react sees a regular html element try to render we express that element through jsx syntax and it returns an object  and the object describes the actual DOM node that should be created when we add an attribute to regular dm element lik div the object that jsx creates is expecting to be able to add this property to the dom eleement , since dom element doesnt have attributes balh blah blah

4. How do I receive props in a component?

//function Navbar(props) {
  function Navbar(whatever){ also true
    return (
        <header>
            ...{props.}=> synatx
        </header>
    )
}


5. What data type is `props` when the component receives it?
an object