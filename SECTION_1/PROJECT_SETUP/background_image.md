/*
Challenge: Place the gray react logo in the background

Don't use an `img` element, but rather set it as the
`background-image` of the `main` element.

Hint: you'll need to use the following properties:
- background-image: url(...)
- background-repeat
- background-position

(Or the shorthand `background` property with values for all
those other properties)
*/  => PURELY CSS


*{
    box-sizing: border-box;
}

body{
    /*if not there would be gap */
    margin: 0;
    font-family: Inter,sans-serif;
    background-color: #282D35;
    color: white;
}

/* for aligning react facts to the center */
nav{
    display: flex;
    align-items: center;
    /*so it fills the entire parent container*/
    height: 100%;
}

/*overall height to header */
header{
    height: 90px;
    background-color: #21222A;
    /*top-bottom | left-right*/
    padding: 30px 25px;
}   


nav>img{ /* image inside of a nav*/
     width: 30px;
}

nav>span{
    color: #61DAFB;
    font-size: 4.1rem;
    font-weight: 700;
}
/* why dont  do this
main{
    /*from this we are gonna get collapsing margin happening from our H1 its pushing our entire main section down and 2nd we are not taking full height of our page  
        background-color: #282D35;
}

do line 9 instead
*/

main{
    padding: 60px 30px;
}

main>h1{
    margin: 0;
    /*rem= /16 */
    font-size: 2.4rem;
}

.fact-list{
    
/*the lines are damn too close*/

    margin-top: 46px;
    max-width: 460px;
}

/*i can add margin to both top and bottom of each item */

.fact-list >li{
    padding-block: 20px;
    line-height: 10px
}

/*for coloring the buuleets of ul*/

.fact-list >li::marker{
    color: #61DAFB;
    font-size: 1.5rem;
}