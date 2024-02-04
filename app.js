let exerciseInterval;
let restInterval;

function showReminderNotification(message) {
    if ('Notification' in window) {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                const notification = new Notification('Wellness Reminder', {
                    body: message,
                });

                notification.onclick = function() {
                    window.focus();
                    notification.close();
                };
            }
        });
    }
}

function startReminders(type) {
    if (type === 'exercise') {
        exerciseInterval = setInterval(function() {
            showReminderNotification('It\'s time to take a short walk or do some exercises!');
        }, 30 * 60 * 1000); // Exercise reminder every 30 minutes
    } else if (type === 'rest') {
        restInterval = setInterval(function() {
            showReminderNotification('It\'s time to take a break and rest!');
        }, 1 * 60 * 1000); // Rest reminder every 60 minutes
    }

    alert(type.charAt(0).toUpperCase() + type.slice(1) + ' reminders started!');
}

function stopReminders(type) {
    if (type === 'exercise') {
        clearInterval(exerciseInterval);
    } else if (type === 'rest') {
        clearInterval(restInterval);
    }

    alert(type.charAt(0).toUpperCase() + type.slice(1) + ' reminders stopped!');
}
