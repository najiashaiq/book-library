
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user" && password === "pass") {
        
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('libraryPage').style.display = 'block';
    } else {
        alert('Invalid credentials! Please try again.');
    }
});
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const status = document.getElementById('status').value;

    if (title === '' || author === '' || status === '') {
        alert('Please fill in all fields!');
        return;
    }

    const bookList = document.getElementById('bookList');
    const listItem = document.createElement('li');
    listItem.textContent = `${title} by ${author} - ${status}`;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        bookList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    bookList.appendChild(listItem);

    
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('status').value = '';
});