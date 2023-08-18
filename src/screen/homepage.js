import React from 'react';
import slide4 from "../assets/slide4.svg"
import "../style/homepage.css"
import Contact from '../componets/contact';
class Home extends React.Component {

    render() {
        return (
            <>
                <div className="home-page">
                    <div className="container text-light p-5">
                        <div className="row d-flex align-items-center justify-content-center pb-5 pt-5">
                            <div className="col-lg-8 ">
                                <div className="card-body">
                                    <h5 className="card-title">Welcome to VOCA website</h5>
                                    <p className="card-text">"Unlocking Boundless Horizons through the Power of Words: Your Journey to Vocabulary Mastery Begins Here!".</p>
                                    <button className="btn_contact">Contact us <i className="fa-regular fa-circle-right"></i></button>
                                </div>
                            </div>
                            <div className="col-lg-4 image-container">
                                <img src={slide4} className="img-fluid sliding-image" alt="..." />
                            </div>
                        </div>
                    </div>
                    <Contact />
                </div>
            </>

        );
    }
}

export default Home;