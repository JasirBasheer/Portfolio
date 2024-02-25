import React, { useEffect, useState } from 'react';
import './guestbook.css';
import Navbar from './Navbar';
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";
import Newsletter from './newsletter';
import Thanks from './thanks';
import Checkout from './checkout';
import Theme from './theme';

function Guestbook() {
    const [user, setUser] = useState(null);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const db = getFirestore();

    // Function to handle signing in
    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                localStorage.setItem('email', user.email);
            })
            .catch((error) => {
                console.error("Error signing in:", error);
            });
    };

    // Function to handle signing out
    const logout = () => {
        auth.signOut()
            .then(() => {
                setUser(null);
                localStorage.removeItem('email');
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };

    // Function to handle submitting comment
    const handleSubmit = () => {
        if (comment.trim() !== '') {
            addDoc(collection(db, 'comments'), {
                email: user.email,
                comment: comment
            })
            .then(() => {
                console.log("Comment added successfully");
                setComment('');
            })
            .catch((error) => {
                console.error("Error adding comment:", error);
            });
        }
    };

    // Effect to fetch comments when user is logged in
    useEffect(() => {
        
            const unsubscribe = onSnapshot(collection(db, 'comments'), (snapshot) => {
                const commentsData = [];
                snapshot.forEach((doc) => {
                    commentsData.push(doc.data());
                });
                setComments(commentsData);
            });
            return () => unsubscribe(); // Cleanup function to unsubscribe from snapshot listener
        
    }, [user, db]);

    // Effect to set user from local storage
    useEffect(() => {
        const userEmail = localStorage.getItem('email');
        if (userEmail) {
            setUser({ email: userEmail });
        }
    }, []);

    // Function to handle pressing Enter in input field
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className='guestbookContainer'>
            <Navbar />
            <div className="guestbookMainContainer">
                <Theme/>
                <div className="comments">
                    <h2>Sign my guestbook</h2>
                    {user ? (
                        <div className='commentInpBtn'>
                            <input
                                type="text"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder=" Enter your comment..."
                            />
                            <button className='siginBtn' onClick={handleSubmit}>Sign</button>
                            <br />
                            <button className='signoutBtn' onClick={logout}>Sign Out</button>
                        </div>
                    ) : (
                        <button className='signinGoogle' onClick={handleClick}>Sign in With Google</button>
                    )}


                    <div className='DispComments'>
                        {comments.map((comment, index) => (
                            <div  className='eachComment' key={index}>
                                <p><span className='username'>{comment.email.split('@')[0]}</span><span className='Commentss'>: {comment.comment}</span></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="guestBookRightSide">
          <Newsletter/>
          <Thanks/>
          <Checkout/>
        </div>
        </div>
    );
}

export default Guestbook;
