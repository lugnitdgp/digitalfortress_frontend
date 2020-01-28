import React, { useState, useEffect } from "react"

import DashboardLayout from '../layouts/DashboardLayout'
import CompletedSvg from "../styles/completedsvg"


export default function Completed() {

    return <DashboardLayout>
        <div className="container">
            <div className="row">
                <div className="d-none d-md-block col-2"></div>
                <div className="col-sm-6 col-lg-8 mt-4">
                <CompletedSvg />
                        <div className="card border-0 bg-transparent">
                        <div className="card-header d-block mx-auto bg-transparent">
                            <h1 className="text-center">Congratulations</h1>
                        </div>
                        
                        <div className="card-footer d-block mx-auto bg-transparent">
                            <h1 className="mt-5 text-center">Congratulations, you have successfully completed the event. Please check the leaderboard for your current rank.</h1>
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-block col-2"></div>
            </div>
        </div>
    </DashboardLayout>
}

