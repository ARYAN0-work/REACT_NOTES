function App() {

    function signUp(formData) {
        const email = formData.get("email")
        const password = formData.get("password")
        console.log(password)
    }

    return (
        <section>
            <h1>Signup form</h1>

            <form action={signUp}>

                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    defaultValue="joe@schmoe.com"
                    type="email"
                    name="email"
                    placeholder="joe@schmoe.com"
                />

                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    defaultValue="password123"
                    type="password"
                    name="password"
                />
                
                <label htmlFor="description">Description:</label>
                <textarea
                    defaultValue="this i a discription " // this thing will appear inside the box
                    id="description"
                    name="description"
                ></textarea>
                
                <fieldset>// if you dont add this the box will not appear
                    <legend>Employment Status:</legend>// if you dont add this the line which is between the box line is will not appear
                
                    <label>
                        <input
                            type="radio"
                            name="employmentStatus"// if you dont write this you can select more thn 1 at a time
                        />
                        Unemployed
                    </label>
                
                    <label>
                        <input
                            type="radio"
                            name="employmentStatus"
                        />
                        Part-time
                    </label>
                
                    <label>
                        <input
                            type="radio"
                            name="employmentStatus"
                        />
                        Full-time
                    </label>
                </fieldset>


            </form>
        </section>
    )
}