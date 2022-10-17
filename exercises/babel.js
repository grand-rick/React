// Getting the root element
const rootElement = document.querySelector('.root');

const fullName = <h1>Patrick Kabuga Murimi</h1>
const country = <p>Kenya</p>
const title = <p>Frontend Web Developer</p>
const gender = <p>Male</p>
const email = <p>kabugap02@gmail.com</p>
const phoneNumber = <p>+254797-162-754</p>
const techs = ['HTML', 'CSS', 'JavaScript'];
const techsFormatted = techs.map(tech => <li key={tech}>{tech}</li>);

// Creating style objects
const headerStyles = {
    backgroundColor: '#A45A63',
}
const mainStyles = {
    backgroundColor: '#FF0E00',
}
const footerStyles = {
    backgroundColor: '#6D6E23'
}
const appStyles = {
    backgroundColor: '#61DBFB',
    padding: '20px'
}

// header JsX element
const header = (
    <header style={headerStyles}>
        {fullName} is my full name. <br/>
        I am a {title} residing in {country}
    </header>
)
// main JsX element
const main = (
    <main style={mainStyles}>
        <p>This is the main area</p>
        <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg" alt="software-developer" height="300px"/>
        <div>
            <ul>{techsFormatted}</ul>
        </div>
    </main>
)
// footer JSX element
const footer = (
    <footer className="footerStyles">
        <p>All right reserved</p>
        <p>Grandrick Productions</p>
        <p>Reach out at :</p>
        <p>Email address: {email}</p>
        <p>Phone number: {phoneNumber}</p>
    </footer>
)

// Combined elements
const app = (
    <div className="appStyles">
    {header}
    {main}
    {footer}
    </div>
)


// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);