import React, { Component } from 'react';

 class User  extends Component {
    // eslint-disable-next-line
    constructor (props) {
        super(props);
    }

    render () {
        const {
            user: {
                firstName,
                lastName,
                image
            }
        } = this.props;
        return (
            <div className='user-card'>
                <img src={image} alt={firstName}/>
                <p>{firstName} {lastName}</p>
            </div>
        )
    }
 }

 export default User;