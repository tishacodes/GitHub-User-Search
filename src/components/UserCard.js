import React from "react";
import { Tab, Menu, Icon, Card, List, Image } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 

function UserCard (props) {  

  console.log("props", props.user.login);

      /*if(!props.user.login){
        return (
         
          null
        )
      }else{*/

        return(
          <div className = "user-card-chart-div">
          
            <Card >

              <Image src = {props.user.avatar_url} wrapped ui={false}/>
              <Card.Content>
                <Card.Header>{props.user.name}</Card.Header>

                <Card.Description>
                  {props.user.location}
                </Card.Description>

                <Card.Description>
                  {props.user.bio}
                </Card.Description>

                <Card.Description>
                  <a>{props.user.blog}</a>
                </Card.Description>

              </Card.Content>
              <Card.Content extra>      
                      
                  <Icon name='user' />
                  {props.user.followers} Follower(s)  
                          
              </Card.Content>

            </Card>

            <div>

              <Segment className = "github-chart-segment">

                <img className = "github-chart-img" src = {`https://ghchart.rshah.org/${props.user.login}`} />

              </Segment>

            </div>

          </div>       
    
        );

      //}             

}

export default UserCard;