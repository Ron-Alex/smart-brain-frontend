import React, { useState, useNavigate, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import SignIn from './components/SignIn/SignIn.js'
import Register from './components/Register/Register.js'

function App() {

  const [input, setInput] = useState('');
  const [URL, setURL] = useState('');
  const [box, setBox] = useState([]);
  const [router, setRouter] = useState('signIn');
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  })

  const resetState = () => {
    setInput('');
    setURL('');
    setBox([]);
    setRouter('signIn');
    setSignedIn(false);
    setUser({
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    })
  }

  const loadUser = (data)  => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    })
  }

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const calculateFaceLocation = ({topRow, leftCol, bottomRow, rightCol}) => {

    const image = document.getElementById('inputImage');

    const width = Number(image.width);
    const height = Number(image.height);
    return {
        topRowpx: topRow * height,
        leftColpx: leftCol * width,
        bottomRowpx: height - (bottomRow * height),
        rightColpx: width - (rightCol * width)
    }
  }

  const onBtnSubmit = () => {
    setURL(input); // Set the image URL

    fetch("https://quiet-shelf-08190-ced9ba4506b3.herokuapp.com/clarifai"), {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        imageURL: URL
      })
    }
    
    fetch("https://quiet-shelf-08190-ced9ba4506b3.herokuapp.com/image", {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: user.id
      })
    })
    .then(response => response.json())
    .then(count => {
      setUser(prevUser => ({...prevUser, entries: count}))
    })
  };

  const onRouteChange = (route) => {
    if(route === 'signOut')
    {
      resetState();
    }
    else if(route === 'Home')
    {
      setSignedIn(true);
    }
    setRouter(route);
  }
  

  return (
    <div className='App'>

        <Navigation signedIn={signedIn} onRouteChange={onRouteChange}/>

        {router === 'Home' ? 
        <div>
        <Logo />
        <Rank name = {user.name} entries = {user.entries}/>
        <ImageLinkForm onInputChange={onInputChange} onBtnSubmit={onBtnSubmit}/>
        <FaceRecognition URL = {URL} box = {box}/>
        </div> : 
        (router === 'signIn' ? 
          <SignIn  onRouteChange={onRouteChange} loadUser={loadUser}/> : 
          <Register loadUser={loadUser} onRouteChange={onRouteChange}/>)
        }
    </div>
  );
}

export default App;