import React from 'react';
import './Home.css';
import bg from '../../images/bg.jpg'

const Home = () => {
    return (
        <div className="home">
           <div className="text-9x1 text">
           <h3 className="text-9x1 text-black font-black text mt-48">“<span className="text-red-400">Always</span> serve too much <span className="text-red-400">hot fudge sauce </span> on ot fudge sundaes. It makes <span className="text-red-400">people overjoyed </span>and puts<span className="text-red-400"> them</span> in your debt”</h3>
           <p className="ml-96 font-bold text-purple-400"><small>- Judith Olney</small></p>
           </div>
        </div>
    );
};

export default Home;