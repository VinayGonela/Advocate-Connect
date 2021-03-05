
import React, { Component } from 'react';
import { render } from 'react-dom';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Specifications  extends Component {
        constructor() {
          super();
      
          this.state = {
            selection : 1
          };
          this.handleChange = this.handleChange.bind(this); 
        }
      
        handleChange(event, index, value) {
          //set selection to the value selected
          this.setState({ selection : value });
      
        }
      
        pageControl(){
          if( this.state.selection == 1){
            return (
              <div>     <br />
                        Adoption
                      <br /><br />
                       Property Distribution
                      <br /><br />
                      Divorce/Sepeation
                      <br /><br />
                      Domestic Voilance
              </div>
              
            );
          } else if( this.state.selection == 2) {
            return (
              <div>  <br />
                        Motor Accident
                      <br /><br />
                       Physical Attack
                      <br /><br />
                      Juvenile
                      <br /><br />
                      Criminal
                </div>
            );
          } else if( this.state.selection == 3) {
            return (
              <div> <br />
                        Registration
                      <br /><br />
                       LandLord & Tenant
                      <br /><br />
                      RealEstate
                      <br /><br />
                      Power of Attorney
                </div>
            );
          }else if( this.state.selection == 4) {
                return (
                  <div> <br />
                        Cyber Information Technology, Internet
                      <br /><br />
                       Mail Fraud
                      <br /><br />
                      Software License
                </div>
                );
          }else if( this.state.selection == 5) {
                return (
                  <div> <br />
                        Administrative Law
                      <br /><br />
                      Maternity & Paternaty
                      <br /><br />
                      Sexual Harrasment at work Place
                </div>
                );
          }else if( this.state.selection == 6) {
                return (
                  <div><br />
                        Insurance
                      <br /><br />
                       Check Bounce
                      <br /><br />
                      Financial Markets & Services
                      <br /><br />
                      Bankruptcy & Debt
                </div>
                );
          }else if( this.state.selection == 7) {
                return (
                  <div><br />
                        Licensing
                      <br /><br />
                       Merges & Acquisition
                      <br /><br />
                      Contracts & Agreements
                      <br /><br />
                      Business Loan
                      <br /><br />
                      Tax Realated
                      <br /><br />
                      Commercial
                </div>
                );
          }else if( this.state.selection == 8) {
                return (
                  <div><br />
                        IP, CopyRight, Paytent,TradeMark
                      <br /><br />
                       International Laws
                      <br /><br />
                      Personal Loan
                      <br /><br />
                      Human Rights
                      <br /><br />
                      Immigration
                      <br /><br />
                      RTI
                      <br /><br />
                      Tax
                      <br /><br />
                      GST
                </div>
                );
          }
        }
      
        render() {
          return (
            <div>
              <MuiThemeProvider>
              <AppBar
                  title="Categories"
                  style={
                    { 
                      background:"#ffb370" //hex color values (yellow)
                    }
                  }
                  titleStyle = {
                    {
                      color:"#FFFFF" //color of text (black)
                    }
                  }
                  showMenuIconButton={false}
               />
               <DropDownMenu 
                value={this.state.selection} 
                onChange={this.handleChange}   
               >
                <MenuItem value={1} primaryText="Family"  />
                <MenuItem value={2} primaryText="Crime" />
                <MenuItem value={3} primaryText="Property" />
                <MenuItem value={4} primaryText="Cyber" />
                <MenuItem value={5} primaryText="Employement"  />
                <MenuItem value={6} primaryText="Banking" />
                <MenuItem value={7} primaryText="Business" />
                <MenuItem value={8} primaryText="Others" />
      
              </DropDownMenu>
              <br/><br/><br/>
              <center>
              {this.pageControl()}
              </center>
              </MuiThemeProvider>
            </div>
          );
        }
      }
      
      render(<Specifications />, document.getElementById('root'));
      export default Specifications
