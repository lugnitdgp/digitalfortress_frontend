import React, { useState, useEffect } from "react"

import DashboardLayout from '../layouts/DashboardLayout'
import SEO from "../components/seo"
import "../custom.css"
import Axios from "axios";
import { navigate } from "gatsby";
import data from '../env.json';


export default function Completed() {

    return <DashboardLayout>
        <SEO title="Finished" />
        <div className="container">
            <div className="row">
                <div className="d-none d-md-block col-2"></div>
                <div className="col-sm-6 col-lg-8 mt-4">
                    <div className="card border-0 bg-transparent">
                        <div className="card-header d-block mx-auto bg-transparent">
                            <h1 className="text-center">Congratulations</h1>
                        </div>
                        <div className="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg" x="1px" y="1px" width={196} height={196} className="d-block mx-auto" viewBox="0 0 172 172" style={{ fill: '#000000' }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray="true" strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none" /><g><path d="M157.66667,86c0,39.57792 -32.08875,71.66667 -71.66667,71.66667c-39.57792,0 -71.66667,-32.08875 -71.66667,-71.66667c0,-39.57792 32.08875,-71.66667 71.66667,-71.66667c39.57792,0 71.66667,32.08875 71.66667,71.66667z" fill="#ffffff" /><path d="M123.93317,52.2665l-48.62583,48.68317l-20.07383,-20.0165l-10.13367,10.13367l30.22183,30.15017l58.74875,-58.81683z" fill="#2ecc71" /></g><path d="M0,172v-172h172v172z" fill="none" /><path d="M3.44,168.56v-165.12h165.12v165.12z" fill="none" /></g></svg>

                        </div>
                        <div className="card-footer d-block mx-auto bg-transparent">
                            <h1 className="mt-5 text-center">You have successfully completed the contest !!! Check the leaderboard to know your current ranking.</h1>
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-block col-2"></div>
            </div>
        </div>
    </DashboardLayout>
}

