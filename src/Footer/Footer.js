
import React from 'react';
import { animateScroll as scroll } from 'react-scroll'
import './Footer.css';

export default class Footer extends React.Component {
 
  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <footer className="footer" id='contact'>
        <div className='scroll-to-top'>
          <button className='anim' onClick={this.scrollToTop}>
          <i className="fas fa-chevron-circle-up" style={{ color: '#008000', padding: '5px' , fontSize: '5em'}}></i>
          </button>
        </div>
        <div className='footer-text'>
        <h4>Thank you for taking the time to be a part of this project! 
          <br />
          Each of our reviews can eventually build a wave of change... </h4>
        </div>
      </footer>
    );
  }
}

