import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems, toggleTurn } from '../../../actions/turnActions';
import './Navbar.css';
import SearchBar from '../searchbar/SearchBar';
export class Navbar extends Component {
 
  state = {
    navitems: '-translate-x-64'
  }

  componentDidMount() {
    this.props.getItems();
  }

  onClickToggleTurn = () => {
    this.props.toggleTurn();
    if (!this.props.turn) {this.setState({navitems: ''});}
    else {this.setState({navitems: '-translate-x-64'});}
  }

  render() {
    
    return (
      <React.Fragment>
          
        <span onClick={this.onClickToggleTurn} className={`z-50 block cursor-pointer top-0 left-0 fixed duration-150 bg-gray-700 hover:bg-gray-900 hover:text-gray-200 hover:font-black pr-5 pb-5 pl-2 pt-2 rounded-br-full text-gray-400 text-2xl`}>
          <i className="nav-open fa fa-bars lg"></i>
          <i className="hidden nav-open fa fa-times lg"></i>
        </span>

       <ul style={{left: '5 em', bottom: '0'}} className={`transform ${this.state.navitems} py-3 fixed text-white duration-500 m-0 p-0 list-none`}>
         <li className='pb-5 pl-4'><a href="#"><i className='fa fa-home fa-2x'></i> Home</a></li>
         <li className='pb-5 pl-4'><a href="#"><i className='fa fa-sign-in fa-2x'></i> Login</a></li>
         <li className='pb-5 pl-4'><a href="#"><i className='fa fa-user-plus fa-2x'></i> Register</a></li>
         <li className='pb-5 pl-4 hidden'><a href="#"><i className='fa fa-user fa-2x'></i> Profile</a></li>
         <li className='pb-5 pl-4 hidden'><a href="#"><i className='fa fa-money fa-2x'></i> Assets</a></li>
         <li className='pb-5 pl-4'><a href="#"><i className='fa fa-envelope-open fa-2x'></i> Contact Us</a></li>
         <li className='mb-20 pb-5 pl-5'><a href="#"><SearchBar></SearchBar></a></li>
       </ul>
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  getItems: PropTypes.func.isRequired,
  toggleTurn: PropTypes.func.isRequired,
  turn: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  turn: state.navTwist.turn
})

export default connect(mapStateToProps, {getItems, toggleTurn})(Navbar);