import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabGeneral = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  border: none;
  &:hover {
    text-decoration: underline;
  }
`;

////////////////////////////////////////////////////////////
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <TabGeneral
    style={props.tab === props.selectedTab ? {border: '2px solid #333', backgroundColor: '#fff', color: '#333'} : null}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </TabGeneral>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
};


export default Tab;
