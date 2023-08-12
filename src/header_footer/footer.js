import React from "react";
import zalo from "../assets/zalo.jpg"
import "../style/footer.css"
class Footer extends React.Component {

    render() {
        return (
            <>
                <footer>
                    <div className="container-fluid">
                        <footer className="text-center text-lg-start text-white" >
                            <div className="container p-4 pb-0">
                                <section className="">
                                    <div className="row">
                                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                            <h6 className="text-uppercase mb-4  font-weight-bold">
                                                VOCA VOCA
                                            </h6>
                                            <p>
                                                Here you can use rows and columns to organize your footer
                                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit.
                                            </p>
                                        </div>

                                        <hr className="w-100 clearfix d-md-none" />

                                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                            <h6 className="text-uppercase mb-4 font-weight-bold">Material</h6>
                                            <p>
                                                <a className="text-white" href="https://react.dev/" target="_blank">ReactJs</a>
                                            </p>
                                            <p>
                                                <a className="text-white" href="https://firebase.google.com/" target="_blank">Firebase</a>
                                            </p>
                                            <p>
                                                <a className="text-white" href="https://fontawesome.com/" target="_blank">Font awesome</a>
                                            </p>
                                            <p>
                                                <a className="text-white" href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" target="_blank">Bootstrap Angular</a>
                                            </p>

                                        </div>

                                        <hr className="w-100 clearfix d-md-none" />
                                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                                Document
                                            </h6>
                                            <p>
                                                <a href="https://learn.mochidemy.com/" target="_blank" className="text-white">Mochi Mochi</a>
                                            </p>
                                            <p>
                                                <a href="https://www.duolingo.com/learn" target="_blank" className="text-white">DuoLingo</a>
                                            </p>
                                        </div>

                                        <hr className="w-100 clearfix d-md-none" />

                                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                            <p><i className="fas fa-home mr-3"></i> Hòa Vang, Đà Nẵng ,Việt Nam</p>
                                            <p><i className="fas fa-envelope mr-3"></i> phind76.spam@gmail.com</p>
                                            <p><i className="fas fa-phone mr-3"></i> <a className="text-white" href="" data-bs-toggle="modal" data-bs-target="#zaloimg">ZALO</a></p>
                                        </div>

                                        <div className="modal fade" id="zaloimg" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-body">
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        <div className="image-container">
                                                            <img src={zalo} className="img-fluid" alt="Zalo" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <hr className="my-3" />

                                <section className="p-3 pt-0">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-md-7 col-lg-8 text-center text-md-start">
                                            <div className="p-3">
                                                © 2023 Copyright: NDPHI
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                            <a href="https://www.facebook.com/ndphii.2002/" target="_blank" className="btn text-white btn-outline-light btn-floating m-1" role="button">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="https://www.pinterest.com/ndphii/" target="_blank" className="btn text-white btn-outline-light btn-floating m-1" role="button">
                                                <i class="fa-brands fa-pinterest"></i>
                                            </a>
                                            <a href="https://github.com/ndphii" target="_blank" className="btn text-white btn-outline-light btn-floating m-1" role="button">
                                                <i class="fa-brands fa-github"></i>
                                            </a>
                                            <a href="" target="_blank" className="btn text-white btn-outline-light btn-floating m-1" role="button">
                                                <i className="fab fa-google"></i>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </footer>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;