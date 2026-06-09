/**
 * Challenge: Fix the code below to use the `props`
 * object values in place of the hardcoded values below
 *
 * Note: There will be a small bug in the code, so do your
 * best to squash it!
 */

/*
export default function Contact(props) {
    console.log(props)

    return (
        <article className="contact-card">
            <img
                src="./images/mr-whiskerson.png"
                alt="Photo of Mr. Whiskerson"
            />

            <h3>Mr. Whiskerson</h3>

            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>(212) 555-1234</p>
            </div>

            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </article>
    )
}

// THats not what it is asking
*/ 
/*
export default function Contact(props) {
    console.log(props)

    return (
        <Contact
              img="./images/mr-whickerson.png"
              name="Mr.Whickerson"
              phone="(212)555-1234"
              email="mr.whiskaz@catnap.meow"
          
          />
    )
}
*/

export default function Contact(props) {
    console.log(props)

    return (
        <article className="contact-card">
            <img
                //src="./images/mr-whiskerson.png"
                // now this src is a string but we're going to pull that string off of props object which is in js 
                src={props.string}// but after this mr.whickerson => img will not show and fluffkins,felix,pumpkin will show up => bcz BUG:when we are talking about we get to choose whatever name we want for these properties so bcz in App.jsx we changed from img to image => just change 
                alt="Photo of Mr. Whiskerson"
            />
            // name of our properties that we pass into our components are consistent across cthe code 

            //<h3>props.name</h3>// props is an object it have name property, also now for each element props.name appear

            <h3>{props.name}</h3>// now the names are coming through

            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>

            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )
}
