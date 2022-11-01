import React, { Component } from 'react';


 class Header  extends Component {
    // eslint-disable-next-line
    constructor (props) {
        super(props);
    }

    render () {
        const {
            data: {
                welcome,
                title,
                subtitle,
                author: {firstName, lastName},
                date
            },
            showDate
        } = this.props;
        return (
            <header>
                <div className='header-wrapper'>
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>{firstName} {lastName}</p>
                    <small>{showDate(date)}</small>
                </div>
            </header>
        )
    }
 }

 export default Header;