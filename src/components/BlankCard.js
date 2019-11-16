import React from "react";
import { Tab, Menu, Icon, Card, List, Image } from "semantic-ui-react";
import githubicon from '../githubicon.png';
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 

function BlankCard (props) {  

        return(
          
          <Card >
            <Image floated = "left" size = "mini" src = {githubicon} wrapped ui={false}/>
            <Card.Content>
              <Card.Header>Your search results will appear here...<Icon name='search' />  </Card.Header>             
            </Card.Content>            

          </Card>
    
        );
        
      

}

export default BlankCard;