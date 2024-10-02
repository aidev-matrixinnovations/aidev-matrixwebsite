import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCards from './ServiceCards';
import SelectedWorks from './SelectedWorks';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate('/services');
  };

  return (
    <div>
      <div className="svg-backgroundnew">
             <svg className="appnew" width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="17%" y1="12%" x2="83%" y2="88%"><stop offset="5%" stop-color="#f78da7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,60 C 49.920655375552286,64.40390279823269 99.84131075110457,68.80780559646539 164,75 C 228.15868924889543,81.19219440353461 306.5554123711341,89.17268041237114 377,79 C 447.4445876288659,68.82731958762886 509.9370397643594,40.50147275405006 568,39 C 626.0629602356406,37.49852724594994 679.6964285714287,62.821428571428584 729,66 C 778.3035714285713,69.17857142857142 823.2772459499263,50.21281296023565 875,52 C 926.7227540500737,53.78718703976435 985.194587628866,76.32731958762885 1056,80 C 1126.805412371134,83.67268041237115 1209.9444035346098,68.4779086892489 1276,62 C 1342.0555964653902,55.522091310751094 1391.0277982326952,57.76104565537555 1440,60 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="17%" y1="12%" x2="83%" y2="88%"><stop offset="5%" stop-color="#f78da7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,140 C 52.7901325478645,153.5671944035346 105.580265095729,167.1343888070692 174,158 C 242.419734904271,148.8656111929308 326.46907216494844,117.02963917525776 381,118 C 435.53092783505156,118.97036082474224 460.5434462444771,152.74705449189983 516,152 C 571.4565537555229,151.25294550810017 657.3571428571429,115.98214285714285 718,111 C 778.6428571428571,106.01785714285715 814.0279823269515,131.32437407952872 879,140 C 943.9720176730485,148.67562592047128 1038.5309278350517,140.72036082474227 1099,138 C 1159.4690721649483,135.27963917525773 1185.8483063328424,137.79418262150222 1237,139 C 1288.1516936671576,140.20581737849778 1364.075846833579,140.1029086892489 1440,140 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><defs><linearGradient id="gradient" x1="17%" y1="12%" x2="83%" y2="88%"><stop offset="5%" stop-color="#f78da7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,220 C 54.38751840942564,239.56461708394698 108.77503681885128,259.12923416789397 174,248 C 239.22496318114872,236.87076583210606 315.2873711340206,195.04768041237114 380,196 C 444.7126288659794,196.95231958762886 498.07547864506637,240.6800441826215 551,246 C 603.9245213549336,251.3199558173785 656.4107142857143,218.23214285714286 712,208 C 767.5892857142857,197.76785714285714 826.2816642120766,210.39138438880707 885,215 C 943.7183357879234,219.60861561119293 1002.4626288659792,216.20231958762886 1069,210 C 1135.5373711340208,203.79768041237114 1209.867820324006,194.79933726067745 1273,196 C 1336.132179675994,197.20066273932255 1388.066089837997,208.60033136966126 1440,220 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2"></path><defs><linearGradient id="gradient" x1="17%" y1="12%" x2="83%" y2="88%"><stop offset="5%" stop-color="#f78da7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,300 C 78.37941826215024,306.2146539027982 156.75883652430048,312.42930780559647 207,309 C 257.2411634756995,305.57069219440353 279.3440721649484,292.4974226804124 339,287 C 398.6559278350516,281.5025773195876 495.86487481590575,283.58100147275405 556,293 C 616.1351251840942,302.41899852724595 639.1964285714286,319.1785714285714 687,316 C 734.8035714285714,312.8214285714286 807.34941089838,289.70471281296017 878,289 C 948.65058910162,288.29528718703983 1017.4059278350517,310.0025773195877 1079,307 C 1140.5940721649483,303.9974226804123 1195.026877761414,276.28497790868926 1254,271 C 1312.973122238586,265.71502209131074 1376.4865611192931,282.8575110456554 1440,300 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3"></path></svg>
      </div>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1>AI DEV MATRIX</h1>
            <h3>Innovating Today, Tomorrow : Where Ideas Become Reality</h3>
            <div className="search-bar">
              <input type="text" placeholder="Website development..." />
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ai-dev-matrix-479393310/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={35} /></a>
              <a href="https://www.instagram.com/aidevmatrix/" target="_blank" rel="noopener noreferrer"><FaInstagram size={35} /></a>
              <a href="https://x.com/matrix_devai" target="_blank" rel="noopener noreferrer"><FaTwitter size={35} /></a>
              <a href="https://www.facebook.com/profile.php?id=61566433406253" target="_blank" rel="noopener noreferrer"><FaFacebook size={35} /></a>
            </div>

            
          </div>
        </div>
      </header>
      <ServiceCards />
      <SelectedWorks />
      <Testimonials />
      <Pricing />
      <div className="view-more-container">
        <button className="view-more-button" onClick={handleViewMoreClick}>View More</button>
      </div>
    </div>
  );
};

export default HomePage;