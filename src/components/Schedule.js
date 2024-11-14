import React, { useState } from 'react';
import '../App.css';

const Schedule = ({ changeView, addMeeting }) => {
    const [meetingTitle, setMeetingTitle] = useState('');
    const [meetingDateTime, setMeetingDateTime] = useState('');
    const [description, setDescription] = useState('');
    const [teamLeader, setTeamLeader] = useState('');
    const [membersCount, setMembersCount] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [scheduledMeetings, setScheduledMeetings] = useState([]);

    const handleSchedule = (e) => {
        e.preventDefault();

        if (!meetingTitle || !meetingDateTime || !teamLeader || !membersCount) {
            setErrorMessage('Please fill in all fields.');
            setSuccessMessage('');
            return;
        }

        const newMeeting = {
            id: Date.now(),
            title: meetingTitle,
            time: meetingDateTime,
            description,
            teamLeader,
            membersCount: parseInt(membersCount, 10) || 0,
        };

        // Add meeting to the scheduled list and shared state
        setScheduledMeetings([...scheduledMeetings, newMeeting]);
        addMeeting(newMeeting);

        // Show success message
        setSuccessMessage('Meeting scheduled successfully!');
        setErrorMessage('');

        // Clear form fields
        setMeetingTitle('');
        setMeetingDateTime('');
        setDescription('');
        setTeamLeader('');
        setMembersCount('');

        // Clear the success message after a few seconds
        setTimeout(() => {
            setSuccessMessage('');
        }, 5000);
    };

    const handleCancelMeeting = (meetingId) => {
        const updatedMeetings = scheduledMeetings.filter(meeting => meeting.id !== meetingId);
        setScheduledMeetings(updatedMeetings);
        setSuccessMessage('Meeting canceled successfully!');

        setTimeout(() => {
            setSuccessMessage('');
        }, 5000);
    };

    return (
        <div className="schedule">
            <h1>Schedule a Meeting</h1>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSchedule}>
                <input
                    type="text"
                    placeholder="Meeting Title"
                    value={meetingTitle}
                    onChange={(e) => setMeetingTitle(e.target.value)}
                    required
                />
                <input
                    type="datetime-local"
                    value={meetingDateTime}
                    onChange={(e) => setMeetingDateTime(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <input
                    type="text"
                    placeholder="Team Leader Name"
                    value={teamLeader}
                    onChange={(e) => setTeamLeader(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Members Count"
                    value={membersCount}
                    onChange={(e) => setMembersCount(e.target.value)}
                    required
                />
                <button type="submit">Schedule</button>
            </form>

            {scheduledMeetings.length > 0 && (
                <div className="scheduled-meetings">
                    <h2>Scheduled Meetings</h2>
                    <ul>
                        {scheduledMeetings.map((meeting) => (
                            <li key={meeting.id}>
                                <strong>{meeting.title}</strong> on {meeting.time}
                                <button onClick={() => handleCancelMeeting(meeting.id)}>
                                    Cancel
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="navigation-buttons">
                <button onClick={() => changeView('meetings')}>View Meetings</button>
                <button onClick={() => changeView('home')}>Go back to Home</button>
            </div>
        </div>
    );
};

export default Schedule;
