import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Cv extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="http://www.web-soluces.net/webmaster/avatar/Mangatar-Femme.png"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>
            </Cell>
            <Cell col={4}>
            <h2 style={{}}>Lahouali Siham</h2>
            <h4 style={{color: 'grey'}}>Développeuse Web</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '40%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '40%'}}/>
          
        
          </Cell>
          <Cell col={4}>
          <h5>Address</h5>
            <p>50 avenue de Brétigny, 91240</p>
            <h5>Phone</h5>
            <p>0659196921</p>
            <h5>Email</h5>
            <p>lahoualisiham91@gmail.com</p>
           

           
          </Cell> 
          <Cell className="resume-right-col" col={12}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="Ecole"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="Ecole"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid rgb(158, 56, 199)'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="premier travail"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="deuxième travail"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid rgb(158, 56, 199)'}} />
              <h2>Compétences</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Cv;
