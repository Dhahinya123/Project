import React from 'react';

const MeetingList = ({ changeView, meetings }) => {
    return (
        <div className="meeting-list">
            <h1>Scheduled Meetings</h1>
            <ul>
                {meetings.length > 0 ? (
                    meetings.map((meeting, index) => (
                        <li key={index}>
                            <h3>{meeting.title}</h3>
                            <p><strong>Time:</strong> {meeting.time}</p>
                            <p><strong>Description:</strong> {meeting.description}</p>
                            <p><strong>Team Leader:</strong> {meeting.teamLeader}</p>
                            <p><strong>Members Count:</strong> {meeting.membersCount}</p>
                        </li>
                    ))
                ) : (
                    <p>No meetings scheduled.</p>
                )}
            </ul>
            <button onClick={() => changeView('home')}>Go back to Home</button>
        </div>
    );
};

export default MeetingList;
