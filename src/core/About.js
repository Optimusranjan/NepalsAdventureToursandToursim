import React from 'react';
import Layout from './Layout';
import aboutimg from './../image/about.png';
import { Link, } from "react-router-dom";

export default function about() {
    return (
    <Layout>
        <div className="container-fluid">
            <div className="row mt-4 mb-2">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="border rounded shadow">
                        <div className="card m-2 ">
                            <h5 className="m-0 text-white font-weight-bold card-header bg-success"><i class="fa fa-tree" aria-hidden="true"></i>  WHO ARE WE</h5>
                            <img src={aboutimg} class="img-thumbnail" alt="" />
                            <div class="card-body m-0 p-0">
                                <p className="text-justify p-3">Nepal Adventure Tours & Tourism  is an Nepalese Tourism website
                                created by Softwarica Student Ranjan Rimal. It is the design to get place in the top 
                                tourism website in 
                                Nepal. Nepal Adventure Tours & Travel started as a thought in my mind, but intended to become
                                 a major project.
                                 Nepal Adventure Tours & Tourism will provide many tourism packages in upcoming years.
                                 Nepal Adventure Tours & Tourism aim to have
                                a website with different places and destination of Nepal.
                                Most travel websites charges international charges for certain booking when opting 
                                internationally, but we aim to provide booking free of any international charges across
                                the globe without a single penny. We also aim to
                                have branches in many countries and we shall provide facility of user interest
                                as per their needs. We aim to deal with the best hotels , motels and lodge, so we
                                provide quality services to our costumers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="border rounded shadow">
                        <div className="card m-2 ">
                            <h5 className="m-0 text-white font-weight-bold card-header bg-success text-uppercase"><i class="fa fa-history" aria-hidden="true"></i>  Our History</h5>
                            <div class="card-body m-0 p-0 mt-2">
                            <a href="#" className='p-3 font-weight-bold text-warning'><i class="fa fa-clock-o" aria-hidden="true"></i> ---2021---</a>
                                <p className="text-justify p-3">The motivation behind Nepal Adventure Tours & Tourism website is to help 
                                to explore the beautiful places and hiking trails in Nepal for tourists.
                                 To enhance economic development of tourism in Nepal and boost the revenue of the country by promoting
                                  tourism destination.
                                 My research will convey Nepal in another financial dimension. It will provide the relevant information
                                  and have the online booking feature which helps in generating economic advantages. Tourism today, 
                                  is changing significantly with the application of information technology. I will be implementing
                                   proper user-friendly website in its essential to make activities, trip and experience easy for
                                    the people. To coordinate with the competitive environment and to get the evolving interruption, 
                                    utilization of data innovation and information technology is inevitable in today’s time. IT in the 
                                    travel industry very important.
                        

                        
                                <br />
                                <a href="#" className='font-weight-bold text-info'><i class="fa fa-clock-o" aria-hidden="true"></i> --- June 2021---</a><br />
                                In the June 2021, Research on Nepal's Adventure Tours and Tourism has started.
                               <br />
                              
                                <a href="#" className='font-weight-bold text-success'><i class="fa fa-clock-o" aria-hidden="true"></i> --- August 2021---</a><br />
                                In August website development was started by using various tools and technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="border rounded shadow">
                        <div className="card m-2 ">
                            <h5 className="m-0 text-white font-weight-bold card-header bg-success text-uppercase">
                                <i class="fa fa-graduation-cap" aria-hidden="true"></i> Developer</h5>
                            <div class="card-body m-0 p-0">
                                <ul className="list-group">
                                    <li className="list-group-item text-info h6 font-weight-bold">Ranjan Rimal</li>
                        
                                    <li className="list-group-item text-danger h6 font-weight-bold text-center"><Link to="./team" className="text-danger">
                                    <i class="fa fa-link" aria-hidden="true"></i> 
                                     &nbsp;&nbsp; View</Link></li>    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    )
}
