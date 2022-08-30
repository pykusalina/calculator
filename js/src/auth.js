export function getAuthFormHTML() {
    return `
    <form class="mui-form" id="auth-form">
                <legend>Title</legend>
                <div class="mui-textfield mui-textfield--float-label">
                  <input type="email" id="email" required>
                  <label for="password">password</label>
                </div>

                <div class="mui-textfield mui-textfield--float-label">
                  <input type="email" id="email" required>
                  <label for="password">password</label>
                </div>


                <button type="submit" class="mui-btn mui-btn--raised">enter</button>
              </form>
    `
}

export function authEmailAndPasswjrd(email, password) {
    const apiKey = 'AIzaSyDtdU6I8WrIxKYPwMvre9SwCB-atOrXsM4'
return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    method: 'POST',
        body: JSON.stringify( {
            email: email, password: password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
})
.then(response => response.json())
.then(data => data.idToken)
}