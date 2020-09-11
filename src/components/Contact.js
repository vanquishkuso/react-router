import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Contact = (props) => {

    return (
        <div>
            <Modal />
            <div className='ui raised very padded text container segment' style={{ marginTop: '80px' }}>
                <Link to='/alex' className='ui header'>Alex</Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quis, fugit voluptas dolores qui iusto omnis magnam aliquid quam, natus sequi accusamus doloremque quia eius ipsa? Similique molestiae est rem?</p>
            </div>
            <div className='ui raised very padded text container segment' style={{ marginTop: '80px' }}>
                <Link to='/annie' className='ui header'>Annie</Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quis, fugit voluptas dolores qui iusto omnis magnam aliquid quam, natus sequi accusamus doloremque quia eius ipsa? Similique molestiae est rem?</p>
            </div>
        </div>
    )
}

export default Contact;