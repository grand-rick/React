import React, {Component} from 'react';
import { Link, Outlet } from 'react-router-dom';

class Root extends Component {
    render () {
        return (
        <div>
            <Link className='btn btn-light' to='/home'>Home</Link> {"  "}
            <Link className='btn btn-light' to='/about'>About</Link> {"  "}
            <Link className='btn btn-light' to='/services'>Services</Link> {"  "}
            <Link className='btn btn-light' to='/work'>Work</Link> {"  "}
            <Link className='btn btn-light' to='/testimonials'>Testimonials</Link> {"  "}
            <Link className='btn btn-light' to='/contact'>Contact</Link> {"  "}
            <Outlet />
        </div>
        )
    }
}

export default Root;