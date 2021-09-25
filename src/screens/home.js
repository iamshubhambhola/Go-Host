import React from 'react'
import Header from '../components/header'

export default function Home() {
    return (
        <div>
            <Header />{/* ayush captain try to keep the class names descriptive and distinct so that css files dont conflict*/}
            <div className="home-section-1">
                <div>Different Use Cases, Same Awesome Benefits.</div>
                <p>All Fleek products are built on the underlying protocols that power the new Open Web (Internet Computer, IPFS, Textile, Filecoin. Ethereum). This allows you to enjoy the same awesome performance, resilience, trustlessness, and censorship-resistance benefits across all products and use cases. It’s easy to use, and low-code.</p>
                <div>
                    <div>
                        <div><img src="" alt=""></img></div>
                        <div>IPFS Hosting</div>
                        <div>Learn More</div>
                    </div>
                </div>
            </div>
            <div className="home-section-2">
                {/* tanis idhr tu krio and try to keep the class names descriptive and distinct so that css files dont conflict */}
            </div>
        </div>
    )
}
