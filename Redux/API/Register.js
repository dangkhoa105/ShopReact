const URL = "http://localhost:5000/app/register.php";
const Register = (email, name, password) => {
    return fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body:  JSON.stringify({email, name, password}),
    })
    .then(res => res.text())
}
export default Register;