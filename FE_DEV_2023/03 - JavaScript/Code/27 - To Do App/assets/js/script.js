// API Endpoint
const api_url = 'https://api.learn.skuflic.com/tasks';

// Global Variables
const date = new Date();
const audio = new Audio('assets/audio/ping.mp3');
const options = { month: 'long', day: 'numeric', year: 'numeric' };

// Service Worker
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js', { scope: '/' });
// }

/*
document.cookie is a property that represents all the cookies associated with the current document. 
It's a string that looks something like this: "name=value; name2=value2; name3=value3". 
It contains all the cookies as key-value pairs separated by semicolons.

new RegExp('(^| )' + name + '=([^;]+)') is a regular expression created using the RegExp constructor. 
It's used to search for the cookie with the specified name. 

The regular expression is composed of the following components:

(^| ): This part matches the start of the cookie or a space before the cookie name. 
It uses ^ to match the start of the string and | to indicate an OR operation, allowing for a space character.

name: This part matches the specific cookie name passed as the name parameter to the function.

=([^;]+) - this part matches the equals sign (=) that separates the cookie name and value, and then captures the value into a group. 

([^;]+) - matches one or more characters that are not semicolons, capturing the cookie's value.
*/
function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

// This line is a return statement. It checks if the match variable is truthy, which means that a match was found in the document.cookie string. If a match was found, it returns match[2], which corresponds to the captured value of the cookie. If no match was found (i.e., the cookie with the specified name doesn't exist), it returns null.

// 24 * 60 * 60 * 1000: This part calculates the number of milliseconds in a single day. 
// Here's the breakdown:
// 24 hours in a day
// 60 minutes in an hour
// 60 seconds in a minute
// 1000 milliseconds in a second
// So, days * 24 * 60 * 60 * 1000 calculates the total number of milliseconds in the specified number of days.
// The result of this calculation is then added to the current timestamp obtained in step 1 using date.getTime(). This combination sets the expiration time for the cookie by adding the specified number of milliseconds to the current time. In essence, it calculates the future date and time when the cookie will expire.
function setCookie(name, value, days) {
    let localDateObject = new Date();
    localDateObject.setTime(localDateObject.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + localDateObject.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
}

// Date
document.getElementById('due-date').valueAsDate = date;
document.getElementById('date').innerHTML = date.toLocaleDateString('en-US', options);

// Dark Mode
if (localStorage.getItem('preferDark') == '1') {
    enableDarkMode()
}

function enableDarkMode() {
    document.body.classList.toggle('dark');
    const darkMode = document.getElementById('dark-mode');
    document.getElementById('loading').style.backgroundColor = '#121212';
    document.querySelector('.percentage').style.color = '#FFF';
    darkMode.innerHTML === 'Enable Dark Mode' ? darkMode.innerHTML = 'Disable Dark Mode' : darkMode.innerHTML = 'Enable Dark Mode';
}

document.getElementById('dark-mode').addEventListener('click', function () {
    enableDarkMode()
    localStorage.getItem('preferDark') == '1' ? localStorage.setItem('preferDark', '0') : localStorage.setItem('preferDark', '1');
});

// Top Bar - Cookie Notice
const topbar = document.getElementById('top-bar-hide');
topbar.addEventListener('click', function () {
    document.querySelector('.top-bar').style.display = 'none';
    setCookie('skuflic-todo-cookie-notice', 'closed', 7)
})

if (getCookie('skuflic-todo-cookie-notice') == 'closed') {
    document.querySelector('.top-bar').style.display = 'none';
}

// Logo Animation
const progressLogEl = document.querySelector('.percentage');
anime({
    targets: '.loading .el',
    direction: 'alternate',
    loop: false,
    duration: 1000,
    easing: 'easeInOutCirc',
    update: function (anim) {
        progressLogEl.innerHTML = Math.round(anim.progress) + '%';
    },
});

setTimeout(() => {
    document.getElementsByClassName('loading')[0].style.display = 'none';
}, 1000)

// Modal
// References to DOM elements
const modal = document.getElementById('modal');
const button = document.getElementById('button');
const span = document.querySelector('.close-modal');

// Show Modal
function showModal() {
    modal.style.display = 'block';
}

// Hide Modal
function hideModal() {
    modal.style.display = 'none';
}

// Event listener for the button click
button.addEventListener('click', showModal);

// Event listener for the close button click
span.addEventListener('click', hideModal);

// Event listener for clicks outside the modal
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        console.log(event.target); // Object reference
        hideModal();
    }
});

// Footer
document.getElementById('year').innerText = date.getFullYear();

// Greeting & Date
(function () {
    const hour = date.getHours()
    const icon = document.getElementById('icon');
    let text = null;

    if (hour < 12) {
        icon.innerText = 'routine';
        text = 'Good Morning';
    } else if (hour < 18) {
        icon.innerText = 'clear_day';
        text = 'Good Afternoon';
    } else {
        icon.innerText = 'dark_mode';
        text = 'Good Evening';
    }

    document.getElementById('greeting').innerHTML = `${text}`;
})()

// User Data
function setUser() {
    localStorage.setItem('user', document.getElementById('name').value);
    document.getElementById('modal').style.display = 'none';
    window.location.reload();
}

(function showUser() {
    const user = localStorage.getItem('user');
    document.getElementById('user').innerText = `${!user ? 'Hey there stranger' : user}`;
})();

// Delete task
function handleResourceDeletion(element) {
    fetch(`${api_url}/${element.dataset.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
            } else {
                element.remove();
                checkEmpty();
                console.log('Resource deleted successfully');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Core Functionalities of To Do App
document.getElementById('list').addEventListener('click', (event) => {
    if (event.target.classList.contains('close')) {
        handleResourceDeletion(event.target.parentElement)
    } else {
        const clickedElement = event.target;

        // Use the closest method to find the nearest ancestor with a specific class
        const listItem = clickedElement.closest('li');
        listItem.classList.toggle('checked');
        listItem.classList.remove('overdue');

        if (listItem.dataset.completed !== 'false') {
            Date.parse(listItem.dataset.due) < date && listItem.classList.add('overdue');
        } else {
            audio.play();
        }

        const taskCompletionStatus = listItem.dataset.completed == 'true' ? listItem.dataset.completed = 'false' : listItem.dataset.completed = 'true'

        fetch(`${api_url}/${listItem.dataset.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: taskCompletionStatus }),
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
            } else {
                console.log('Resource updated successfully');
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    }
});

// Event delegation for input field keypress
document.getElementById('inputField').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('add').click();
    }
});

// Function to Create Tasks
function createTaskListItem(task) {
    const li = document.createElement('li');
    const formattedDate = new Date(task.due);

    li.innerHTML = `
    <span class='task' data-id='${task.id}'>${task.task}</span>
    <span class='date' data-id='${task.id}'>Added ${task.date}${task.due && ` — Due ${formattedDate.toLocaleDateString('en-US', options)}`}</span>
    <span class='category ${task.category.toLowerCase().split(' ').join('-')}' data-id='${task.id}'>${task.category}</span>
    <span class='close material-symbols-outlined'>delete</span>
    `;

    li.dataset.id = task.id;
    li.dataset.due = task.due;
    li.dataset.completed = task.completed;

    ((formattedDate < date && task.completed !== 'true')) && li.classList.add('overdue')
    task.completed === 'true' && li.classList.add('checked');

    list.appendChild(li);
    checkEmpty();
    return li;
}

// Fetch Data When Page Loads
fetch(api_url)
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('list');
        data.forEach(task => {
            const li = createTaskListItem(task);
            list.appendChild(li);
        });
    }).catch(error => {
        console.error('Error:', error);
    });

function newTask() {
    const input = document.getElementById('inputField').value;
    const due = document.getElementById('due-date').value;

    if (!input) {
        showError();
        return;
    }
    let newId = 1;
    const list = document.getElementById('list');
    const lastChild = list.lastChild;

    if (lastChild && lastChild.dataset && lastChild.dataset.id) {
        newId = parseInt(lastChild.dataset.id) + 1;
    }

    const category = document.getElementById('category').value;
    const formattedDate = date.toLocaleDateString('en-US', options);
    const task = { task: input, completed: 'false', date: formattedDate, category: category, id: newId, due: due };

    // POST Task to Server
    fetch(api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    }).then(response => {
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
        } else {
            createTaskListItem(task);
            document.getElementById('inputField').value = null;
            console.log('Resource posted successfully');
        }
    }).catch(error => {
        console.error('Error:', error);
    });
}

function showError() {
    const error = document.getElementById('inputField');
    error.placeholder = 'Task cannot be empty.';

    setTimeout(function () {
        error.placeholder = 'Add a task...';
    }, 2000);
}

function checkEmpty() {
    if (document.getElementById('list').childNodes.length > 0 == true) {
        document.getElementById('empty').style.display = 'none';
    } else {
        document.getElementById('empty').style.display = 'initial';
    }
}