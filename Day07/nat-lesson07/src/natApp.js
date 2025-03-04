import React, { Component } from 'react';
import natLoginControl from './components/natLoginControl';
import natRenderList from './components/natRenderList';
import natRenderListStudent from './components/natRenderListStudent';

class natApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
          <h1 className='text-center'>Nguyen Anh Tuan - Render condition, List key</h1>
          <hr/>
          <natLoginControl />

          <natRenderList />

          <natRenderListStudent />
      </div>
    );
  }
}

export default natApp;