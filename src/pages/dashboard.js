import React from "react"
import { Link } from "gatsby"

import DashboardLayout from '../layouts/DashboardLayout'
import Problem from '../layouts/Problem'
import SEO from "../components/seo"
import Footer from "../components/Footer"

export default function Dashboard() {
    return (
    <DashboardLayout>
        <SEO title="Dashboard" />
        <Problem/>
        <Footer />
    </DashboardLayout>
    )
}

