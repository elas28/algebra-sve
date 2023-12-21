## Differences between localStorage, sessionStorage and cookies ✨

The main difference between localStorage, sessionStorage, and cookie storage is size. 

There’s:

- 10MB available for localStorage
- 5MB for sessionStorage 
- 4KB for Cookies

Of these three types of storage, localStorage is the newest kind of in-browser storage. 

### Session Storage
SessionStorage is useful when you need browser storage that does not impact web application performance. Login credentials are held in sessionStorage as they are cleared once the open tab closes. 

### Cookies
Cookies are the oldest kind of in-browser storage. With their small capacity, they can hold small amounts of data, and are not designed to hold sensitive data such as login credentials.

### Session Storage vs Local Storage
Together, these two kinds of storage are the main data storage objects available that the browser can access easily for storing and retrieving information for customers. The main difference between Session and Local kinds of storage is the lifespan of the stored data. 

SessionStorage is tied to a specific tab the browser may have open, whereas localStorage is accessible across any tab the browser has open. Once the tab closes, the sessionStorage is deleted, but localStorage persists.