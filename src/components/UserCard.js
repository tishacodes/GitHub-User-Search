import React from "react";
import { Tab, Menu, Icon, Card, List, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 

function UserCard (props) {  

        return(
          
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
                <a href = {props.user.blog} target = "blank">{props.user.blog}</a>
              </Card.Description>

            </Card.Content>
            <Card.Content extra>      
                    
                <Icon name='user' />
                {props.user.followers} Followers  
                         
            </Card.Content>

          </Card>
    
        );
        
      

}

export default UserCard;