import React from 'react';
import PropTypes from 'prop-types';

const Header = () =>(
   <div className="header-content">
     <div className="header-title-text"> Mis videos </div>
     <input type="button" value="Añadir video" className"header-button-add"/>
   </div>
   );

export default Header;