let reminderInterval;

function showExerciseNotification() {
    if ('Notification' in window) {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                const notification = new Notification('Exercise Reminder', {
                    body: 'It\'s time to take a short walk or do some exercises!',
                });

                notification.onclick = function() {
                    window.focus();
                    notification.close();
                };
            }
        });
    }
}

function startReminders() {
    // Set a reminder every 30 minutes (adjust as needed)
    reminderInterval = setInterval(showExerciseNotification, 1 * 60 * 1000);
    alert('Reminders started!');
}

function stopReminders() {
    clearInterval(reminderInterval);
    alert('Reminders stopped!');
}
