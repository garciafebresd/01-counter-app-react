import React from 'react';
import PropTypes from 'prop-types'; 

// const FirstApp = ({ sayHello, subTitle = 'Este es un subtitulo' }) => {
const FirstApp = ({ greeting, subTitle}) => {

  return (
    <>
      <h1>{ greeting }!!</h1>
      <p>{ subTitle }</p>
    </>
  );  
}

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  subTitle: 'Este es un subtitulo'
}

export default FirstApp;