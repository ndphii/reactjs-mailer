import React from 'react';
import slide4 from "../assets/slide4.svg"
import "../style/homepage.css"
class Home extends React.Component {

    render() {
        return (
            <>
                <div className="home-page">
                    <div className="container text-light p-5">
                        <div class="row d-flex align-items-center justify-content-center pb-5 pt-5">
                            <div class="col-lg-8 ">
                                <div class="card-body">
                                    <h5 class="card-title">Welcome to VOCA website</h5>
                                    <p class="card-text">"Unlocking Boundless Horizons through the Power of Words: Your Journey to Vocabulary Mastery Begins Here!".</p>
                                    <button class="btn_contact">Contact us <span class="material-icons-outlined">
                                        arrow_circle_right
                                    </span></button>
                                </div>
                            </div>
                            <div class="col-lg-4 image-container">
                                <img src={slide4} class="img-fluid sliding-image" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="container forms-contact p-5">
                        <form class="row g-2">
                            <div class="col-md-6">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Name</label>
                                <input type="text" class="form-control" id="inputPassword4" placeholder="Your name" />
                            </div>
                            <div class="col-12">
                                <label for="exampleFormControlInput1" class="form-label">Subtitle</label>
                                <input class="form-control" type="text" aria-label="default input example"></input>
                            </div>
                            <div class="col-12">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div >
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>

        );
    }
}

export default Home;