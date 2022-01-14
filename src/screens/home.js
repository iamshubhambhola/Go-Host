import React from 'react'
import Header from '../components/header'
import "./home.css"
import ipfs from "../images/ipfs.png"
import storage from "../images/storage.png"

export default function Home() {
    return (
        <div>
            <Header />{/* ayush captain try to keep the class names descriptive and distinct so that css files dont conflict*/}
            <div className="home-section-1">
                <div className="home-section-1-heading">Different Use Cases, <br/> Awesome Benefits.</div>
                <p>All Fleek products are built on the underlying protocols that power the new Open Web (Internet Computer, IPFS, Textile, Filecoin. Ethereum). This allows you to enjoy the same awesome performance, resilience, trustlessness, and censorship-resistance benefits across all products and use cases. It’s easy to use, and low-code.
                </p>
                <div>
                    <div className="card-0">
                        <div><img src={ipfs} alt="ipfs"></img></div>
                        <div className="card-heading">IPFS Hosting</div>
                        <div className="btn">Learn More</div>
                    </div>
                    <div className="card-0">
                        <div><img src={storage} alt="ipfs"></img></div>
                        <div className="card-heading">Storage</div>
                        <div className="btn">Learn More</div>
                    </div>
                </div>
            </div>

            <div className="home-section-2">
                {//TANISH SHARMA
                    //<Storefile />
                    <div>
                        <h2 className="ready">Ready to Try Go Host?</h2>
                        <h2 className="deploy">Deploy your site in 30 seconds</h2>
                        <div className="getText">
                            <h2>Get Started</h2>
                        </div>
                        <div className="viewText">
                            <h2>View Docs</h2>
                        </div>
                    </div>

                }
            </div>
        </div>
        )
                
        
    
}
