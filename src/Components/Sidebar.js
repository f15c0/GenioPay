import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button, Nav, NavItem } from "react-bootstrap";


const Sidebar = () => {

    return ( 
        <div className="side-menu">
            <div className="logoframe">
                <div className="logo">
                  <img src="logowhite.png" alt="Genio Logo"/>
                  
                </div>
                <div className="toggle-menu-btn">
                     <i class="bi bi-arrow-left-circle"></i>
                    </div>
            </div>
            <div className="wallet-box">
                        <Container>
                            <Row>
                            <div className="wallet-items">
                                <div className="wallet-box-iconbox">
                                    <div className="wallet-box-icon">
                                    <i class="bi bi-wallet-fill"></i>
                                    </div>
                                    
                                </div>
                                
                                <div className="wallet-view">
                                    <i class="bi bi-eye-fill"></i>
                                </div>
                                <div className="wallet-balance-text">
                                    Wallet Balance
                                </div>
                                <div className="wallet-balance-subtext">
                                    $150,001.00
                                </div>
                               
                                <div className="wallet-text-divider"></div>
                                
                            </div>
                            </Row>
                            <Row>
                            <div className="wallet-items">
                                <div className="wallet-box-iconbox">
                                    <div className="wallet-box-icon2">
                                    <i class="bi bi-star-fill"></i>
                                    </div>
                                </div>
                                
                                
                                <div className="wallet-balance-text">
                                    Awarded Points
                                </div>
                                <div className="wallet-balance-subtext">
                                    35
                                </div>
                                <div className="wallet-text-divider"></div>
                                
                            </div>
                            <div className="wallet-footer">
                                <Button variant="warning" className="wallet-btn">Pay in</Button>
                                <Button variant="success" className="wallet-btn2">Pay Out</Button>
                            </div>
                            </Row>

                            <Row className="sidebar-menu">

                            <Nav defaultActiveKey="/home" className="flex-column">
                                <NavItem href="/home" className="sidebar-menuItem ">
                                <Link to={'./'} className="no-Link">
                                    <div className="sidebar-menuItemIcon">
                                        <i class="bi bi-microsoft"></i>
                                    </div>
                                         Dashboard
                                   </Link>      
                                </NavItem>

                                <NavItem className="sidebar-menuItem" eventKey="link-1">
                                    <Link to={'./wallet'} className="no-Link">
                                        <div className="sidebar-menuItemIcon">
                                            <i class="bi bi-wallet2"></i>
                                        </div>
                                         Wallet  
                                    </Link>
                                    
                               </NavItem>

                                <NavItem >
                                    <div className="sidebar-menuItem">
                                    <Link to={'./cards'} className="no-Link">
                                        <div className="sidebar-menuItemIcon">
                                        <i class="bi bi-credit-card-2-front"></i>
                                        </div>
                                         Cards
                                   </Link>
                                    </div>
                                       
                                </NavItem>

                                <NavItem className="sidebar-menuItem" eventKey="link-1">
                                <Link to={'./'} className="no-Link">
                                    <div className="sidebar-menuItemIcon">
                                        <i class="bi bi-cash-coin"></i>
                                    </div>
                                    Fx Center
                                </Link>  
                                </NavItem>

                                <NavItem className="sidebar-menuItem" eventKey="link-1">
                                <Link to={'./'} className="no-Link">
                                        <div className="sidebar-menuItemIcon">
                                            <i class="bi bi-people"></i>
                                         </div>
                                    Beneficiaries
                                  </Link>  
                                </NavItem>

                                <NavItem className="sidebar-menuItem" eventKey="link-1">
                                <Link to={'./perks'} className="no-Link">
                                    <div className="sidebar-menuItemIcon">
                                         <i class="bi bi-tag"></i>
                                    </div>
                                    Perks
                                </Link>
                                </NavItem>
                             
                            
                            </Nav>
                            </Row>
                            <Row>
                                <div className="invite-box">
                                    <div className="invite-icon">
                                         <img width={80} src="./megaphone.png" alt="megaphone"/>
                                    </div>
                                    <div className="invite-body">
                                         <h6 className="invite-title">Refer a friend</h6>
                                        <p className="invite-body-text">
                                            Use the below link to 
                                            <br></br>
                                            invite friends</p>
                                         </div>
                                        
                                        <Button variant="secondary" className="invite-box-btn">Invite Friends</Button>
                                </div>
                            </Row>
                            
                            
                        </Container>
                        
            </div>
            
        </div>
     );
}
 
export default Sidebar;