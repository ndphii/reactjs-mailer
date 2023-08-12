import React from 'react';
import slide4 from "../assets/slide4.svg"
import "../style/homepage.css"
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
                    <div className="container forms-contact p-5">
                        <form className="row g-2">
                            <div className="col-md-6">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" id="inputPassword4" placeholder="Your name" />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Subtitle</label>
                                <input className="form-control" type="text" aria-label="default input example"></input>
                            </div>
                            <div className="col-12">
                                <label className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div >
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" >
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>

        );
    }
}

export default Home;