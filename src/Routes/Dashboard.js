import { Container, Row } from "react-bootstrap";

const Dashboard = () => {

    return ( 
        <div>
            <Container className="">
                {/* page title */}
            <Row>
                    <div className="content-title">
                        Wallet (5)
                        <div className="content-title2">
                           View all wallets
                        </div>
                    </div> 

            </Row>
            
            <Row>
            <div className="card cream">
                    
                        <div className="cardheader">
                             Personal account
                            <h4>USD</h4>
                            <div className="cardicon">
                                    <img width={75} src="./usa.png" alt="icon"/>
                            </div>
                        </div>
                        <div className="cardfooter">
                           $10,250.00
                            </div>
                    </div>
                    <div className="card creamy">
                        <div className="cardheader">
                             EUR Wallet
                            <h6>EUR</h6>
                            <div className="cardicon">
                                    <img width={75} src="./eur.png" alt="icon"/>
                            </div>
                        </div>
                        
                        
                        <div className="cardfooter">
                        €4000.53
                            </div>
                    </div>
                    <div className="card lime">
                        <div className="cardheader">
                             School fees
                            <h4>GBP</h4>
                            <div className="cardicon">
                                    <img width={75} src="./uk.png" alt="icon"/>
                            </div>
                        </div>
                        
                        
                        <div className="cardfooter">
                            £50.00
                            </div>
                    </div>
            </Row>

            {/* Quick Links header */}
            <Row>
                <div className="headers">
                        Quick Links
                        <h6 className="subheaders">
                            Your frequently used actions for easy access.
                        </h6>
                </div>
            </Row>

            {/* quick links icons */}
                <Row>
                    
                    <div className="quick-actions">
                        <div className="quick-action-icon">
                            <i class="bi bi-wallet-fill"></i>
                        </div>
                        <div className="quick-actions-text">
                                Add new Wallet
                        </div>
                    </div>
                
                    <div className="quick-actions">
                        <div className="quick-action-icon" style={{background: "#005061"}}>
                            <i class="bi bi-wallet-fill"></i>
                        </div>
                    <div className="quick-actions-text" >
                                Add new Card
                        </div>
                    </div>
                    <div className="quick-actions">
                        <div className="quick-action-icon" style={{background: "#F59E0B"}} >
                            <i class="bi bi-wallet-fill"></i>
                        </div>
                        <div className="quick-actions-text">
                                Balance Exchange
                        </div>
                    </div>
                    <div className="quick-actions">
                        <div className="quick-action-icon" style={{background: "#5EEAD4"}}>
                            <i class="bi bi-wallet-fill"></i>
                        </div>
                        <div className="quick-actions-text">
                                Transfer to Account
                        </div>
                    </div>
                    <div className="quick-actions">
                        <div className="quick-action-icon" style={{background: "#9333EA"}}>
                            <i class="bi bi-wallet-fill"></i>
                        </div>
                        <div className="quick-actions-text">
                                Generate Voucher
                        </div>
                    </div>
                    <div className="quick-actions">
                        <div className="quick-action-icon" style={{background: "#FFCB00"}}>
                            <i class="bi bi-wallet-fill"></i>
                        </div>
                        <div className="quick-actions-text">
                                Mobile Money
                        </div>
                    </div>
                    <div className="quick-actions">
                        <div className="quick-action-icon" style={{background: "#F43F5E"}}>
                            <i class="bi bi-wallet-fill"></i>
                        </div>
                        <div className="quick-actions-text">
                                Payment Link
                        </div>
                    </div>
              </Row>
            </Container>
            
               
        </div>
     );
}
 
export default Dashboard;