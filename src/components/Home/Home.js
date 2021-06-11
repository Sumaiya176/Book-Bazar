import React from 'react';
import './Home.css';
import bg from '../../images/bg.jpg'

const Home = () => {
    return (
        <div className="home">
           <div className="text-9x1 text">
           <h3 className="text-9x1 text-black font-black text mt-56">“<span className="text-red-400">Good</span> friends, good <span className="text-red-400">books,</span> and a sleepy <span className="text-red-400">conscience:</span> this is the <span className="text-red-400"> ideal</span> life.”</h3>
           <p className="ml-96 font-bold text-purple-400"><small>- Mark Twain</small></p>
           </div>
        </div>
    );
};

export default Home;