import React, { Component } from 'react';

 class Footer  extends Component {
    // eslint-disable-next-line
    constructor (props) {
        super(props);
    }

    render () {
        const {date} = this.props;
        return (
            <footer>
                <div className='footer-wrapper'>
                    <p>Copyright {date} &copy;</p>
                </div>
            </footer>
        )
    }
 }

 export default Footer;