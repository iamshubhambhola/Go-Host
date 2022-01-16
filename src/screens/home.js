import React from 'react'
import Header from '../components/header'
import "./home.css"
import ipfs from "../images/ipfs.png"
import sec3img from "../images/sec3img.png"
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

            <div className="home-section-3">
                <div className="left3">
                <div className="left3text">
                    <h1>Store & Fetch Files</h1>
                    <br></br>
                    <h1>on IPFS.</h1>
                    <br></br>
                    <h1>Fast as Fleek.</h1>
                </div>
                <br></br>
                
                <h2 className="text">Use Fleek to upload, store & fetch files from IPFS in an easy to use, performant, and familiar way including UI, API and CLI interfaces. With S3 & Minio co has everything you need built into one seamless product.</h2>

                </div>

                <img className="sec3img" src={sec3img}></img>

            </div>

        </div>
        )
                
        
    
}
