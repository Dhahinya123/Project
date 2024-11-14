import React from 'react';

const Home = ({ changeView }) => {
    return (
        <div className="home">
            <h1>Welcome to the Meeting Scheduler</h1>
            <p>Your online meeting solution.</p>
            <button onClick={() => changeView('schedule')} className="btn">Schedule a Meeting</button>
            <nav>
                <button onClick={() => changeView('login')}>Login</button>
                <button onClick={() => changeView('signup')}>Sign Up</button>
                <button onClick={() => changeView('meetings')}>Meetings</button>
            </nav>
        </div>
    );
};

export default Home;
