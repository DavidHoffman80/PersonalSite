import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';
import { hamburgerClicked } from '../../../store/actions/NavActions';
import Brand from './infinity-symbol-white-transparent-background.png';
//CSS
import './NavBar.css';

class NavBar extends Component {

  state = {
    windowWidth: 0
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth = () => {
    this.setState({ windowWidth: window.innerWidth });
  }

  hamburgerClicked = () => {
    this.props.hamburgerClicked();
  }

  render() {
    const { hamburgerActive } = this.props;
    console.log(hamburgerActive);
    let mobileMenuOpen = hamburgerActive ?
      <div className='mobileMenu active'>
        <ul className='mobileNavItems'>
          <li>
            <Link
              activeClass='active'
              to='Hero'
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
              className='mobileNavItem'
              onClick={this.hamburgerClicked}
            >Home</Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='About'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='mobileNavItem'
              onClick={this.hamburgerClicked}
            >About</Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='Contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className='mobileNavItem'
              onClick={this.hamburgerClicked}
            >Contact</Link>
          </li>
        </ul>
      </div>
    :
      <div className='mobileMenu'>

      </div>
    let hamburgerClassName = hamburgerActive ? 'hamburger active' : 'hamburger'
    const linksOrHamburger = this.state.windowWidth < 575 ?
      <div className={hamburgerClassName} onClick={this.hamburgerClicked}>
        <span></span>
      </div>
    :
      <ul className='NavLinks'>
        <li>
          <Link
            activeClass='active'
            to='Hero'
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
            className='NavItem'
          >Home</Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='About'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='NavItem'
          >About</Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='Contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className='NavItem'
          >Contact</Link>
        </li>
      </ul>;
    return (
      <div className='NavBar' id='NavBar'>
        <img src={Brand} alt='Infinity symbol - Brand Logo' className='BrandLogo' />
        <h1 className='BrandName'>Dave Hoffman</h1>
        { linksOrHamburger }
        { mobileMenuOpen }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hamburgerActive: state.nav.hamburger.iconActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hamburgerClicked: () => dispatch(hamburgerClicked())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);