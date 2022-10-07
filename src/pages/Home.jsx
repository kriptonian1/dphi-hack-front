import React from 'react'
import { Helmet } from 'react-helmet'
import { ExploreChallenge, Hero, Navbar } from '../components'
import SectionInfo from '../components/home/SectionInfo'

const Home = () => {
    return (
        <div>
            <Helmet>
                {/* <!-- Google link preview --> */}
                <meta property="og:site_name" content="DPhi" />
                <meta property="og:locale" content="en-US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Global AI Challenges | DPhi" />
                <meta property="og:description"
                    content="AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions." />
                <meta property="og:image" content="https://i.postimg.cc/XqgsCMDN/DPhi-link-prev.png" />
                {/* <!-- <meta property="og:url" content="" /> --> */}
                <meta property="og:keywords" content="Hackathon, AI/Data Science, " />

                {/* <!-- Twitter link preview --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@DPhi" />
                {/* <!-- <meta property="twitter:url" content=""> --> */}
                {/* <!-- <meta property="twitter:domain" content=""> --> */}
                <meta name="twitter:creator" content="@kriptonian8" />
                <meta name="twitter:title" content="Global AI Challenges | DPhi" />
                <meta name="twitter:description"
                    content="AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions." />
                <meta name="twitter:image" content="https://i.postimg.cc/XqgsCMDN/DPhi-link-prev.png" />

                <title> Global AI Challenges | DPhi</title>
            </Helmet>
            
            <Navbar />
            <Hero />
            <SectionInfo />
            <ExploreChallenge />
        </div>
    )
}

export default Home