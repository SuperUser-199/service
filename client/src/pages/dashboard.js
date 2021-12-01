import React from 'react'
import './dashboard.css'
import Header from "../components/header"
function Dashboard() {
    return (
        <>
        <Header/>
        <div class="dashboard-main">
            <div class="service-cont">
                <div class="service">
                    <a href="/service-menu">
                        <img alt="..." class="service-icon" src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/50/000000/external-ac-domotics-home-inipagistudio-mixed-inipagistudio.png"/>
                        <h4> AC Service & Repair</h4>
                    </a>
                </div>
                <div class="service">
                    <a href="/">
                    <img alt="..." class="service-icon" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-paint-roller-creative-kiranshastry-lineal-color-kiranshastry.png"/>
                    <h4>    Painters </h4>
                    </a>
                </div>
                <div class="service"><a href="/">
                <img  alt="..." class="service-icon" src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-electrician-male-occupation-avatar-itim2101-lineal-color-itim2101.png"/>
                  <h4>  Electricians </h4>
                    </a></div>
                <div class="service"><a href="/">
                <img alt="..." class="service-icon"  src="https://img.icons8.com/external-ddara-lineal-color-ddara/64/000000/external-plumber-professions-ddara-lineal-color-ddara.png"/>
                    <h4>Plumber</h4></a></div>
                
                <div class="service"><a href="/">
                <img alt="..." class="service-icon" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-carpenter-labour-day-wanicon-lineal-color-wanicon.png"/>
                    <h4>Carpenter</h4></a></div>
                <div class="service"><a href="/">
                <img alt="..." class="service-icon" src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/64/000000/external-bug-spray-agricultural-pest-control-inipagistudio-lineal-color-inipagistudio.png"/>
                    <h4>Pest Control</h4></a></div>
                <div class="service"><a href="/">
                <img alt="..." class="service-icon" src="https://img.icons8.com/material-outlined/24/000000/domain.png"/>
                    <h4>Website Developer</h4></a></div>
                <div class="service"><a href="/">
                <img alt="..."  class="service-icon" src="https://img.icons8.com/ios-filled/50/000000/developer-mode.png"/>
                    <h4>App Developer</h4></a></div>

            </div>
        </div>
        </>
    )
}

export default Dashboard
