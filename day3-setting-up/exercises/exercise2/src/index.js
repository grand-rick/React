import React from 'react'
import ReactDOM from 'react-dom'
import person from './img/rendering_image2.png'
import verifiedTick from './img/verified.png'


const rootElement = document.getElementById('root');

// JsX element, user
const user = (
        <img src={person} alt="profile" className='round' width='200rem'/>
)

// Jsx Element, verified
const verified = (
    <img src={verifiedTick} alt="verified tick" width="30rem"></img>
)


// User data
const userData = {
    firstName: 'ASABENEH',
    secondName: 'YETAYEH'
}

// User's tech stack
const userTech = ['HTML', 'CSS', 'Sass', 'Js', 'React', 'React', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'Numpy', 'Pandas', 'Data Analysis', 'MySQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']

const userTechFormatted = userTech.map(tech => <button>{tech}</button>)

// User styles
const userStyles = {
    color: '#000',
    marginTop: '2.5rem',
    fontWeight: '700'
}

// JsX element, header
const header = (
    <header className='text-center'>
    </header>
)

// JsX element, main
const main = (
    <main className='mb3'>
        <div className='profile'>
            {user}
        </div>
        <p style={userStyles} className='mb3'>{userData.firstName}{' '}{userData.secondName}{'  '}{verified}</p>
        <p className='mb3'>Senior developer Finland</p>
        <div>
            <h5>SKILLS</h5>
            <div>
                {userTechFormatted}
            </div>
        </div>
    </main>
)

// JsX element, footer
const footer = (
    <footer>
        <p>&copy; Joined on August 30 2020</p>
    </footer>
)

// JsX element, app
const app = (
    <div>
        {header}
        {main}
        {footer}
    </div>
)

ReactDOM.render(app, rootElement)