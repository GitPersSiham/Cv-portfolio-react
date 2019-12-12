import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Mon profile</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true" style={{color:"rgb(158, 56, 199)" }}/>
                    06 59 19 69 21
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true" style={{color:"rgb(158, 56, 199)" }}/>
                    lahoualisiham91@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-commenting" aria-hidden="true" style={{color:"rgb(158, 56, 199)" }}/>
                    Français | Anglais | Espagnol | Arabe
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
          <Cell col={6}>
            <h2>Lahouali Siham</h2>
            <img
              src="http://www.web-soluces.net/webmaster/avatar/Mangatar-Femme.png"
              alt="avatar"
              style={{height: '260px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Passionnée par l'univers du web et dotée d'une grande curiosité,je suis développeuse web orienté frontend et backend </p>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
