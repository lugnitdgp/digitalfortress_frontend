import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

export default () => {
    return <DashboardLayout>
        <div className="container">
            <h1 className="text-white">Privacy Policy</h1>
            <hr/>
            <p className="text-white">GLUG built the Screencast app as a Free app. This SERVICE is provided by GLUG at no cost and is intended for use as is.
    This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
    If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Screencast unless otherwise defined in this Privacy Policy.</p>
            <h2 className="text-white">Information Collection and Use</h2>
            <p className="text-white">For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Email, Name. The information that we request will be retained by us and used as described in this privacy policy.
            The app does use third party services that may collect information used to identify you.
        Link to privacy policy of third party service providers used by the app</p>
            <a className="text-white" href="https://www.google.com/policies/privacy/">Google Play Services</a><br />
            <a className="text-white" href="https://www.facebook.com/about/privacy">Facebook</a>
            <h2 className="text-white">Log Data</h2>
            <p className="text-white">We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</p>
            <h2 className="text-white">Contact Us</h2>
            <p className="text-white">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at romitkarmakar@gmail.com.</p>

        </div>
        <hr/>
    </DashboardLayout>
}