import React, { Component } from 'react';
import './Team.css';
import $img from './worker.png';
export default class Team extends Component {
  render() {
    return (
      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">Nuestro equipo</h5>
          <div className="row">
            {/* <!-- Team member --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img className=" img-fluid" src={$img} alt="card image" />
                        </p>
                        <h4 className="card-title">MGA</h4>
                        <p className="card-text">
                          This is basic card with image on top, title, description and button.
                        </p>
                        <a href="#" className="btn btn-primary btn-sm">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">MGA</h4>
                        <p className="card-text">
                          This is basic card with image on top, title, description and button.This
                          is basic card with image on top, title, description and button.This is
                          basic card with image on top, title, description and button.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ./Team member -->
            <!-- Team member --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img className=" img-fluid" src={$img} alt="card image" />
                        </p>
                        <h4 className="card-title">MGA</h4>
                        <p className="card-text">
                          This is basic card with image on top, title, description and button.
                        </p>
                        <a href="#" className="btn btn-primary btn-sm">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">MGA</h4>
                        <p className="card-text">
                          This is basic card with image on top, title, description and button.This
                          is basic card with image on top, title, description and button.This is
                          basic card with image on top, title, description and button.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ./Team member -->
            <!-- Team member --> */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img className=" img-fluid" src={$img} alt="card image" />
                        </p>
                        <h4 className="card-title">MGA</h4>
                        <p className="card-text">
                          This is basic card with image on top, title, description and button.
                        </p>
                        <a href="#" className="btn btn-primary btn-sm">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">MGA</h4>
                        <p className="card-text">
                          This is basic card with image on top, title, description and button.This
                          is basic card with image on top, title, description and button.This is
                          basic card with image on top, title, description and button.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img className=" img-fluid" src={$img} alt="card image" />
                        </p>
                        <h4 className="card-title">MGA</h4>
                        <p className="card-text">
                          This is basic card with image on top, title, description and button.
                        </p>
                        <a href="#" className="btn btn-primary btn-sm">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">MGA</h4>
                        <p className="card-text">
                          This is basic card with image on top, title, description and button.This
                          is basic card with image on top, title, description and button.This is
                          basic card with image on top, title, description and button.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img className=" img-fluid" src={$img} alt="card image" />
                        </p>
                        <h4 className="card-title">MGA</h4>
                        <p className="card-text">
                          This is basic card with image on top, title, description and button.
                        </p>
                        <a href="#" className="btn btn-primary btn-sm">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">MGA</h4>
                        <p className="card-text">
                          This is basic card with image on top, title, description and button.This
                          is basic card with image on top, title, description and button.This is
                          basic card with image on top, title, description and button.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img className=" img-fluid" src={$img} alt="card image" />
                        </p>
                        <h4 className="card-title">MGA</h4>
                        <p className="card-text">
                          This is basic card with image on top, title, description and button.
                        </p>
                        <a href="#" className="btn btn-primary btn-sm">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">MGA</h4>
                        <p className="card-text">
                          This is basic card with image on top, title, description and button.This
                          is basic card with image on top, title, description and button.This is
                          basic card with image on top, title, description and button.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-skype" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="#">
                              <i className="fa fa-google" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
