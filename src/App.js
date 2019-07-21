import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        title:"Custom Element" ,
        name:"Donna Marshall",
        caption:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        avtar:"https://uinames.com/api/photos/female/15.jpg",
        image:"https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"    
    };
  }
  
  componentDidMount(){
    this.nv.addEventListener('likeNotify', e => {
      console.log('Like Cliked');
    });
    this.nv.addEventListener('shareNotify', e => {
        console.log('Share Cliked');
    });
    this.nv.addEventListener('commentNotify', e => {
        console.log('Comment Cliked');
    });
  }

  handleRef = elem => {
    this.nv = elem;
  }

  render() {
    

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <facebook-card ref={this.handleRef} 
          title={this.state.title} 
          name={this.state.name} 
          caption={this.state.caption} 
          avtar={this.state.avtar}
          image={this.state.image}>
       
            <i icon-like="true" className="fa fa-thumbs-o-up like-icon"></i>
            <i icon-comment="true" className="fa fa-comment-o"></i>
            <i icon-share="true" className="fa fa-share"></i>
        </facebook-card>
      </div>
    );
  }
}

export default App;
