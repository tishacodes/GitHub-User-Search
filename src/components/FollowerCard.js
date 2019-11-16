import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

function FollowerCard (props) {

    return(
        
      <Card >
        <Image src = {props.follower.avatar_url} wrapped ui={false}/>
        <Card.Content>
          <Card.Header>{props.follower.login}</Card.Header> 
        </Card.Content>       

      </Card>
  
    );
      


}

export default FollowerCard;