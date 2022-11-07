import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const Input = ({ type, name, id, placeholder, style }) => {
  return (
    <div>
      <label htmlFor={id}>{placeholder}: </label>
      <input type={type} name={name} id={id} placeholder={placeholder} style={style}/>
    </div>
  )
}


/**
 * "It takes a component and a type, and returns a component that renders the original component with a
 * style object based on the type."
 * 
 * The function is a higher order component. It takes a component as a parameter, and returns a
 * component
 * @param CompParam - The component that will be wrapped by the HOC.
 * @param [type=text] - The type of input you want to create.
 * @returns A function that returns a component
 */
const CustomInputType = (CompParam, type = 'text') => {
  const colors = [
    {
      type: 'text',
      backgroundColor: '#EB5757',
      color: '#000000'
    },
    {
      type: 'email',
      backgroundColor: '#0ff',
      color: '#000'
    },
    {
      type: 'number',
      backgroundColor: '#4AC29A',
      color: '#000'
    },
    {
      type: 'date',
      backgroundColor: '#D66D75',
      color: '#000'
    }
  ]

  const {backgroundColor, color} = colors.find(t => t.type === type);

  const inputStyles = {
    border: 'none',
    borderRadius: 3,
    margin: 3,
    cursor: 'pointer',
    fontSize: '1.25rem',
    color,
    backgroundColor
  }

  return (props) => {
    return <CompParam {...props} type={type} style={inputStyles} />
  }
}


const TextInput = CustomInputType(Input);
const EmailInput = CustomInputType(Input, 'email');
const PhoneInput = CustomInputType(Input, 'number');
const DateInput = CustomInputType(Input, 'date');

// Parent Component, App
class App extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
  }

  // handleChange = (e) => {
  //   const {name, type, value} = e.target;
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  render () {
    return (
      <div className='app'>
        <form onSubmit={this.handleSubmit}>
          <TextInput name='firstName' id='firstName' placeholder='First Name'/>
          <TextInput name='lastName' id='lastName' placeholder='Last Name'/>
          <EmailInput name='email' id='email' placeholder='Email'/>
          <PhoneInput name='telephone' id='telephone' placeholder='Telephone'/>
          <DateInput name='birthDate' id='birthDate' placeholder='Date Of Birth'/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement)