import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Schedule from './components/Schedule';
import MeetingList from './components/MeetingList';

const App = () => {
    const [view, setView] = useState('home'); // State to manage the current view
    const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication status
    const [meetings, setMeetings] = useState([]); // State to store scheduled meetings

    // Function to change views
    const changeView = (newView) => {
        setView(newView);
    };

    // Function to handle login
    const handleLogin = () => {
        setIsAuthenticated(true); // Set user as authenticated
        setView('schedule');      // Redirect to schedule page upon login
    };

    // Function to add a new meeting to the meetings state
    const addMeeting = (meeting) => {
        setMeetings((prevMeetings) => [...prevMeetings, meeting]);
    };

    return (
        <div>
            {view === 'home' && <Home changeView={changeView} />}
            {view === 'login' && <Login changeView={changeView} onLogin={handleLogin} />}
            {view === 'signup' && <Signup changeView={changeView} />}
            
            {view === 'schedule' && isAuthenticated ? (
                <Schedule changeView={changeView} addMeeting={addMeeting} />
            ) : (
                view === 'schedule' && (
                    <div>
                        <p style={{ color: 'red' }}>Please log in to access the schedule.</p>
                        <button onClick={() => changeView('login')}>Back to Login</button>
                    </div>
                )
            )}

            {view === 'meetings' && isAuthenticated ? (
                <MeetingList changeView={changeView} meetings={meetings} />
            ) : (
                view === 'meetings' && (
                    <div>
                        <p style={{ color: 'red' }}>Please log in to view meetings.</p>
                        <button onClick={() => changeView('login')}>Back to Login</button>
                    </div>
                )
            )}
        </div>
    );
};

export default App;
