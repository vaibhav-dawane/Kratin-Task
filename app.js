let exerciseInterval;
let restInterval;

function showReminderNotification(message) {
    if ('Notification' in window) {
        const notification = new Notification('Wellness Reminder', {
            body: message,
        });

        notification.onclick = function() {
            window.focus();
            notification.close();
        };
    }
}

function startReminders(type) {
    const timeInputId = type === 'exercise' ? 'exerciseTime' : 'restTime';
    const timeInput = document.getElementById(timeInputId);

    const reminderTime = parseInt(timeInput.value, 10);

    if (isNaN(reminderTime) || reminderTime <= 0) {
        alert('Please enter a valid positive number for reminder time.');
        return;
    }

    const intervalFunction = function() {
        const message = type === 'exercise' ? 'It\'s time to take a short walk or do some exercises!' : 'It\'s time to take a break and rest!';
        showReminderNotification(message);
    };

    if (type === 'exercise') {
        exerciseInterval = setInterval(intervalFunction, reminderTime * 60 * 1000); // Exercise reminder
    } else if (type === 'rest') {
        restInterval = setInterval(intervalFunction, reminderTime * 60 * 1000); // Rest reminder
    }

    alert(type.charAt(0).toUpperCase() + type.slice(1) + ' reminders started for ' + reminderTime + ' minutes!');
}


function stopReminders(type) {
    const intervalToClear = type === 'exercise' ? exerciseInterval : restInterval;
    clearInterval(intervalToClear);

    alert(type.charAt(0).toUpperCase() + type.slice(1) + ' reminders stopped!');
}
