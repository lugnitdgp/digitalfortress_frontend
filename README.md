<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="src/images/favicon.png" width="50" />
  </a>
</p>
<h1 align="center">
  Digital Fortress
</h1>

[![Build Status](https://travis-ci.com/romitkarmakar/digitalfortress_frontend.svg?branch=master)](https://travis-ci.com/romitkarmakar/digitalfortress_frontend)

[![Netlify Status](https://api.netlify.com/api/v1/badges/d8194fb5-bc0e-4495-8f3c-6b9da16995ae/deploy-status)](https://app.netlify.com/sites/reverent-lovelace-205163/deploys)

This is a quiz competition developed by GLUG for testing the students skills in Linux Terminal Commands and common computer science related questions.

## Installation
- Clone this repository
- Install all the dependencies by running this command
```
npm install
```
- Run the development Server
```
gatsby develop -p 5000
```
or, 
```
npm run develop
```
- Compile the production build
```
gatsby build
```
- Compile and deploy the production build to AWS S3
```
npm run deploy
```
## Infrastructure
- Static files hosted on AWS S3(Simple Storage Service)
- CDN runned on AWS Cloudfront.