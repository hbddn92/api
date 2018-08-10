import React, { Component } from "react";

class PageBodyGetData extends React.Component {  
  render() {
    return (
      <div className='pageBodyGetData'>
      	{this.props.children}
      </div>
    );
  }
}

export default PageBodyGetData