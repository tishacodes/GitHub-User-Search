import React from 'react';
import UserCard from "./components/UserCard.js";
import FollowersList from "./components/FollowersList.js";
import SearchForm from "./components/SearchForm.js";
import BlankCard from "./components/BlankCard.js";
import Heatmap from "./components/Heatmap.js";
import NotFoundCard from "./components/NotFoundCard.js";
import { CircleSpinner } from "react-spinners-kit";

import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      userName: "",
      userData: {},
      followersData: [{}]
    };
  } 
 

  fetchUser = () => {

    fetch(`https://api.github.com/users/${this.state.userName}`)

    //if you are using axios .json is not necessary - tells response object to return data with response (parses json in the request)    
    .then(res => res.json())
    .then(data => {  
      
      if(data.message){        
        this.setState({ userName: ""})   
        console.log("state user name in fetchUser if", this.state.userName);            
      }else {
        this.setState({ userData: data}) 
      }
      console.log("fetch data message in fetchUser", data.message);
      console.log("username at end of fetch users", this.state.userName);
    })
    .catch(err => console.log("there was an error in fetchUser", err)); 

    

  }

   

  fetchFollowers = () => {

    console.log("username at the start of fetch followers", this.state.userName);

    if(this.state.userName === "") {
      console.log("this.state.username in followers", this.state.userName);
      window.alert("That user could not be found in IF FETCHFOLLOWERS.");
      
    }
    else {
      fetch(`https://api.github.com/users/${this.state.userName}/followers`)

      //if you are using axios .json is not necessary - tells response object to return data with response (parses json in the request)    
      .then(res => res.json())
      .then(data => {      
        if(data.message){        
          this.setState({ userName: ""})           
          window.alert("That user could not be found.\nPlease try your search again.");          
        }else {
          this.setState({ followersData: data})
        }
        console.log("fetch data in followers", data.message);
      })
      .catch(err => console.log("there was an error in fetchFollowers", err)); 
  
      console.log("username at the end of fetch followers", this.state.userName);
      
    }

  }

  searchedUserName = (userName) => {

    if(userName !== ""){
      this.setState ({userName});
    
    } else {
      window.alert("Please enter a GitHub username.")
    }

  }

  //run when the component is mounted and is first created - if you want to do something once at the start of a 
  //component's life you put it inside this method 
  componentDidMount(){  
    
    if(this.state.userName !== ""){
      this.fetchUser();
      this.fetchFollowers();   
    }  

  }

  //runs every time our component state is updated and we re-render it
  //this will not run on the first render of our component only on re-renders
  //make subsequent API request based on things that have changed
  componentDidUpdate(prevProps, prevState) {

    console.log(this.state);
    
    if ((this.state.userName !== prevState.userName) && (this.state.userName !== "")) {
      this.fetchUser();
      this.fetchFollowers();
    }

  } 

  render() {     
    console.log("username at the start of render", this.state.userName);
     
      return (
        
        <div className = "main-container-div">    

          <div className = "main-search-div">      

              <SearchForm searchedUserName = {this.searchedUserName}/>    

          </div>        

          <div className = "search-results-div">

            {this.state.userName !== "" ? 
            <div>
              <div className = "users-content">              
                <UserCard user = {this.state.userData}/>                         
              </div>             

              <div>
                <FollowersList followers = {this.state.followersData} />
              </div>
            
            </div>

            :

            <div className = "users-content"> 
              <BlankCard />
            </div>}

          </div>

        </div>

      );//end return      
    

  }//end render

}//end class

export default App;
