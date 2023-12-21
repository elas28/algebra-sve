// PATH
// In the context of HTTP cookies, the 'path' attribute specifies the path within a domain for which the cookie is valid.It restricts the cookie's scope to a specific directory or URL path on the server. The path attribute helps ensure that a cookie is only sent to the server when the browser requests a resource within that specified path or its subdirectories. For example, if a cookie is set with a path attribute of '/myapp,' it will be sent to the server with every request made to URLs that start with '/myapp' or include subdirectories of '/myapp.' However, it will not be sent for requests to URLs outside this path.

// SECURE
// The 'secure' flag is an attribute that can be set for an HTTP cookie.When a cookie has the 'secure' flag set, it indicates that the cookie should only be transmitted over secure, encrypted connections, such as those using HTTPS (HTTP Secure). This is an important security feature that helps protect sensitive information in cookies from eavesdropping and interception by unauthorized parties.


(function cookies() {
    document.cookie = 'username=Nino Škuflić; expires=Thu, 31 Dec 2023 12:00:00 UTC; path=/; Secure;'
    console.log('Cookie is ' + document.cookie);
})();

(function storage() {
    localStorage.setItem('user', 'Nino Škuflić');
    let user = localStorage.getItem('user');
    document.getElementById('user').innerHTML = user;
    localStorage.setItem('age', '26 years');
    localStorage.clear();
})();