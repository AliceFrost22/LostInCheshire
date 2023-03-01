import { useState } from "react";



export default function Contact() {
    const [name_first, setNameFirst] = useState("");
    const [name_last, setNameLast] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChangeMessage = (event) => {
        const message = event.target.value;
        setMessage(message);
    }
    // FETCH REQUEST
    // const handleSubmit = async (event) => {
    //     const response = await fetch(`/api/contact?name=${name}&email=${email}&message=${message}`);
    //     const data = await response.json();

    const handleSubmit = async (event) => {

    let payload = {
        name_first:name_first,
        name_last:name_last,
        email:email,
        message:message
    };

    const response =await fetch(`/api/contact.js`,{
        method: "POST",                                                                                         
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
    })

        setNameFirst("");
        setNameLast("");
        setEmail("");    
        setMessage("");
        setShowSuccess(true);
    }

    return (
        <div className="w-full ">

                <h className="w-full flex font-bold m-2 p-3">If you wish to get in touch please leave your details and a message below </h>
                <form className="flex flex-col space-y-3 m-2 px-2 mr-5 justify-items-center">
                    <Input
                        placeholder="First Name"
                        value={name_first}
                        onChange={(value) => setNameFirst(value)}
                        disabled={false}  //you can disable a field and it wont be clickable if {true}
                    />
                    <Input
                        placeholder="Last Name"
                        value={name_last}
                        onChange={(value) => setNameLast(value)}
                    />
                    <Input
                        placeholder="Email"
                        value={email}
                        onChange={(value) => setEmail(value)}
                    />
                    <textarea
                        placeholder="Message"
                        className="bg-gray-200 py-3 px-6 w-96 rounded"
                        value={message}
                        onChange={handleChangeMessage}
                    />

                    <button
                        className="bg-black py-3 px-6 w-96 rounded text-white hover:bg-gray-100"
                        onClick={handleSubmit}
                        type="button"
                    >
                        Submit
                    </button>

                    {showSuccess === true ? 
                        (<p className="text-black w-96">
                            Your message was sent
                        </p>)
                        :
                        null
                    }
                </form>

        </div>
    )
}