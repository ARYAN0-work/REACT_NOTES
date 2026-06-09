const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

/*
const{name,img} =person
console.log(name);//Mr. Whiskerson
console.log(image);// undefined
*/

const {img:image,name} = person
console.log(image);//./images/mr-whiskerson.png

// we cant destructre in the parameter which leds to a challenge

/**
 * Challenge:fix the biu, now that we've
 * destructre the eops object
 */
export default function Contact(img,name,phone,email) {
    console.log(props)

    return (
        <article className="contact-card">
            <img
               
                src={props.string}
                alt="Photo of Mr. Whiskerson"
            />
            
            <h3>{props.name}</h3>

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
