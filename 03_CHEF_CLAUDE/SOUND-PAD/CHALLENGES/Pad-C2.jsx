export default function Pad(props) {
    return(
        <button style={{backgroundColor:props.color}}></button>
    )
}

/**
 * The key idea

App owns the data.

Pad owns the button UI.

App passes only the data Pad needs (color) via props, and Pad uses that data to render its button. This separation makes Pad reusable and keeps App focused on managing the list of pads.
 * 
 */