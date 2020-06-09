import React, { Component } from 'react'
import NavbarPage from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";
import { Container } from 'reactstrap';
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"

export class SampleProjects extends Component {

    componentDidMount() {
        Aos.init({ duration: 2000 })
    }

    render() {
        return (
            <>
                <NavbarPage />
                <OuterContainer>
                    <FirstProjectInfo>
                        <Div data-aos="fade-right"><Heading>Glacier Farm Media</Heading></Div>
                        <Paragraph data-aos="fade-left">
                        GFM has partnered with Saskatchewan Polytechnic (SaskPoly) to developa scalable
                        mobile application that employsunique and innovative ways to: 1) enhance, 
                        encourage, and promote attendee participation and knowledge transfer in the 
                        short-lived cluster and 2) address connectivity issues. 
                        {/* This project builds  
                        on earlier research into a progressive mobile web application prototype
                        (supported by NSERC Engage and Engage Plus grants).  */}
                        {/* The application focused initially on providing event notification, 
                        way finding, and location-relevant information. This  prototype  
                        employed  unique  and  engaging  visualizations  of  information,  
                        including Augmented or Mixed Reality (the overlay of media on the mobile 
                        device’s camera view). Research will continue to expand on innovative and 
                        engaging visualization while providing a framework for the  integration  
                        of the current, locally-processed and clouddata including real time data 
                        from Internet of Things (IOT) devices using LoRa(Long Range) technologies. 
                        Strategies to mitigate the connectivity and bandwidth limitations on 
                        site will be evaluated for potential to address rural bandwidth issues, 
                        a key barrier to technology adoption in rural area. The open framework 
                        for integration, processing, analysis, and visualization ofdatawill be 
                        used as a basis for future research into an agriculture knowledge corridor. 
                        Anonymous usage data will be analyzed to determine participation levels and 
                        attendee focus, to evaluate and inform best practices. Field trial data will
                        be analyzed for effect and long-term identifiable patterns and trends to be
                        presented at the Farm Forum Event over the three-year study. */}
                    </Paragraph>
                    </FirstProjectInfo>
                    <SecondProjectInfo>
                        <Paragraph data-aos="fade-right">
                            KL and Saskatchewan Polytechnic (SP) are investigating how to 
                            take advantage of machine learning, NoSQL and the Industrial 
                            Internet of Things (IIoT) to modernize and optimize KL's ingredient 
                            {/* extraction process. The Engage phase of the project will 
                            commence in tandem with a MITACS grant of the same scope, 
                            involving building the database (DB) and user interface, 
                            determining how to best structure the data for analysis, 
                            designing the analytic algorithms, then testing the system 
                            and prepping for the next phase. */}
                            </Paragraph> 
                            <Div data-aos="fade-left"><Heading>Keyleaf</Heading></Div>
                    </SecondProjectInfo>
                    <ThirdProjectInfo><Div data-aos="fade-right"><Heading>Nutrein/BHP Bulliten</Heading></Div>
                        <Paragraph data-aos="fade-left">
                            The development of an accurate positioning system for use in underground 
                            mining is a difficult problem that has not yet been realized. 
                            There are a number of significant problems such as the harsh 
                            mining environment, multi-path problems, non-line of sight, etc. 
                            that make developing an accurate positioning systems difficult. 
                            {/* Technological advances in the areas of ultra-wideband technologies 
                            show promise in being able to overcome some of these difficulties. 
                            This project will work to develop a real-time location system (RTLS) 
                            that is able to accurately position workers and equipment within an 
                            underground environment. This technology will lead to enhanced worker 
                            safety and equipment positioning within the mine. */}
                            </Paragraph></ThirdProjectInfo>
                    <FourthProjectInfo><Paragraph data-aos="fade-right">
                        Quantification of a worker’s time spent correlated directly to program outcomes, 
                        such as a student’s recognition of harm, is a difficult problem. This project 
                        seeks to incorporate Artificial Intelligence (AI) within a graph based context 
                        to be able to solve problems similar to the one previously mentioned.  
                        {/* In particular, this project will develop the underlying framework necessary for this work.  
                        This will involve the creation of a graph based data storage element along with some 
                        introductory analytics that will be used to inform the path and direction of the AI components.  
                        Research into how the relationships between various data elements is captured will be key to being 
                        able to develop the necessary AI algorithms to solve these hard problems.  
                        This project, if successful, has the potential to impact a large number of organizations
                         within the social sciences. */}
                </Paragraph><Div data-aos="fade-left"><Heading>Restorative Action Program</Heading></Div>
                    </FourthProjectInfo>
                    <FifthProjectInfo><Div data-aos="fade-right"><Heading>Mercedes Benz Fuel Cell Division</Heading></Div>
                        <Paragraph data-aos="fade-left">
                            MBFCplans to apply machine learning and data analytics techniques 
                            to their hydrogen fuel cell manufacturing data.  
                            The purpose is to improve their quality control processes through  automated  
                            analysis of data created in the manufacturing process.    
                            {/* This  will  decrease  the continuance  of  flawed  components  
                            through  the  assembly  process  by  catching  errors  earlier,  
                            thereby increasing profitability.   */}
                            </Paragraph>  </FifthProjectInfo>
                    <SixthProjectInfo ><Paragraph data-aos="fade-right">
                        Saskatchewan Polytechnic (SP) will collaborate with Veterinary Simulator Industries (VSI) 
                        to develop a mid-fidelity interactive veterinary canine simulator through the integration 
                        of sensors as a prototype platform from which to build a high-fidelity simulator. 
                        {/* This will involve signal processing from a mesh of sensors to provide accurate 
                        measurement of compression pressure and position along with breath volume for CPR training.  */}
                        {/* The Canine simulator will allow students to participate in safe, patient-centered care and 
                        to develop their critical thinking; clinical decision-making; and leadership skills in a 
                        low-risk environment. The measurement provides data useable by students and instructional 
                        staff to evaluate progress. Student data compared to recorded professional data forms a 
                        basis for corrective recommendations and real-time feedback support for independent study. */}
                </Paragraph><Div data-aos="fade-left"><Heading>Veterinary Simulator Industries Lts.</Heading></Div>
                    </SixthProjectInfo>
                    <Div>
                        <SeventhProjectInfo >
                            <Div data-aos="fade-right"><Heading>Black Sun</Heading></Div>
                            <Paragraph data-aos="fade-left">
                                (BlkS) is a web hosting company that offers a variety of hosting 
                                services to its customers. Currently BlkS offers a website security 
                                service called BlackShield. BlkS would like to further enhance its 
                                cyber security product and develop a more robust open source solution. 
                                {/* Saskatchewan Polytechnic (SP) will collaborate with Black Sun to develop 
                                an open source set of tools to augment the current toolset that BlkS is currently using. */}
                </Paragraph> </SeventhProjectInfo>
                    </Div>
                </OuterContainer>
                <Footer />
            </>

        )
    }
}

export default SampleProjects

const Div = styled.div``;
const OuterContainer = styled.div`
display:grid;
grid-template-columns: 90%;
justify-content:center;
grid-row-gap:50px;
padding-top: 67px;
text-align:center;
color:#743c97;
overflow:hidden;
margin-bottom: 17vh;
@media (min-width:740px){
    margin-bottom:21vh;
}
h1{
    color:black;

}
`;
const Paragraph = styled.p`font-size:20px; `;
const Heading = styled.h1`font-size:40px;`;
const FirstProjectInfo = styled.div`
display:grid; grid-template-columns: 100%; text-align:center;

@media (min-width:740px){
    text-align:left;
    justif-content: space-around;
    display:grid;
    grid-template-columns: 50% 50%;
    align-items:center;
    h1{
        order:1;
     }
     p{
        order:2;
     }
     
}  
`;
const SecondProjectInfo = styled.div`display:grid; grid-template-columns: 100%; 

h1{
    order:0;
 }
 p{
    order:1;
 }
@media (min-width:740px){
    text-align:left;
    grid-template-columns: 40% 40%;
    justify-content: space-around;
    align-items:center;
    h1{
        order:1;
     }
     p{
        order:0;
     }
     
}    

`;
const ThirdProjectInfo = styled.div`display:grid; grid-template-columns: 100%;text-align:center;

@media (min-width:740px){
    display:grid;
    text-align:left;
    grid-template-columns: 40% 40%;
    justify-content:space-around;
    align-items:center;
    h1{
        order:1;
     }
     p{
        order:2;
     }
     
}  
`;
const FourthProjectInfo = styled.div`display:grid; grid-template-columns: 100%;text-align:center;

h1{
    order:0;
 }
 p{
    order:1;
 }
@media (min-width:740px){
    text-align:left;
    display:grid;
    grid-template-columns: 40% 40%;
    justify-content:space-around;
    align-items:center;
    h1{
        order:1;
     }
     p{
        order:0;
     }
     
}  
`;
const FifthProjectInfo = styled.div`display:grid; grid-template-columns: 100%;text-align:center;

@media (min-width:740px){
    text-align:left;
    display:grid;
    grid-template-columns: 40% 40%;
    justify-content:space-around;
    align-items:center;
    h1{
        order:1;
     }
     p{
        order:2;
     }
     
}  
`;
const SixthProjectInfo = styled.div`display:grid; grid-template-columns: 100%;text-align:center;

h1{
    order:0;
 }
 p{
    order:1;
 }
@media (min-width:740px){
    text-align:left;
    display:grid;
    grid-template-columns: 40% 40%;
    justify-content:space-around;
    align-items:center;
    h1{
        order:1;
     }
     p{
        order:0;
     }
     
}  

`;
const SeventhProjectInfo = styled.div`display:grid; grid-template-columns: 100%;text-align:center;

@media (min-width:740px){
    text-align:left;
    display:grid;
    grid-template-columns: 40% 40%;
    justify-content:space-around;
    align-items:center;
    h1{
        order:2;
     }
     p{
        order:1;
     }
     
}  
`;