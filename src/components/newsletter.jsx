import React, { useState } from 'react'
import '../firebase';
import{ getFirestore, addDoc, collection } from "firebase/firestore"
import './newsletter.css'
import newsletterimg from "./images/newsletter.png"


function Newsletter() {
    const [email, setEmail] = useState('');
    const db = getFirestore();

    const isValidEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const saveDataToFirestore = async () => {
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        try {
            const docRef = await addDoc(collection(db, 'newsletters'), {
                email: email
            });
            alert('Subscribed successfully!');
            setEmail(''); // Clear the input field after successful subscription
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error subscribing. Please try again.');
        }
    };

    return (
        <div className="newsletter">
            <img className="newsletterimg" src={newsletterimg} alt="" />
            <h3>Subscribe to my newsletter!</h3>
            <p>Follow my journey, I write about tech, my experiences and more.</p>
            <input
                required
                type="email"
                placeholder="    Your email...."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /> <br />
            <button onClick={saveDataToFirestore}>Subscribe</button> 
        </div>
    );
}

export default Newsletter;
