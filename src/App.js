import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route,Redirect} from 'react-router-dom';
import './App.css';
import About from "./components/About";
import contact from "./components/contact";
import signout from "./components/signout";
import 


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/'/> 
          <Route path="/about" component={About} />
          <Route path="/contact" component={contact} />
          <Route path="/signout" component={signout} />
        </Routes>
      </Router>
      <Router>
      <View styles={{ flex:1 }}>
    <Search
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle = {{ alignItems:'center', justifyContent:'center' }}
    />
    </View>
      </Router>
    </>
  );
}

export default App;