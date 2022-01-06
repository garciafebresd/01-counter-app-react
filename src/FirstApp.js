import React from 'react';
import PropTypes from 'prop-types'; 

// const FirstApp = ({ sayHello, subTitle = 'Este es un subtitulo' }) => {
const FirstApp = ({ sayHello, subTitle = 'Este es un subtitulo' }) => {

  return (
    <>
      <h1>{ sayHello }!!</h1>
      <p>{ subTitle }</p>
    </>
  );  
}

FirstApp.propTypes = {
  sayHello: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  subTitle: 'Este es un subtitulo'
}

export default FirstApp;