import React from "react";
import "./otherservices.css";
import carRenew from "../../assets/img/carRenew.jpg";
import movingTruck2 from "../../assets/img/movingTruck2.jpg";

function OtherServices() {
  return (
    <div className="container">
      <div className="service-gallery">
        <div className="service">
          <div className="service-image">
            <img src={carRenew} alt="Car Renew" />
            <span className="service-tag">AVAILABLE</span>
          </div>

          <div className="service-detail">
            <h3>Car Document Renewal Service</h3>
            <p className="service-description">
              Premium Car Document Renewal Service in Nigeria. Get your papers
              renewed without visiting government offices.
            </p>
            <h3 className="serive-sub-header">Services Include:</h3>
            <ul>
              <li>Vehicle License</li>
              <li>Insurance</li>
              <li>Roadworthiness Certificate</li>
              <li>VIO Papers</li>
            </ul>
            <button className="service-btn">View Document Renewal</button>
          </div>
        </div>

        <div className="service">
          <div className="service-image">
            <img src={movingTruck2} alt="moving truck" />
            <span className="service-tag">AVAILABLE</span>
          </div>
          <div className="service-detail">
            <h3>Moving Truck Service</h3>
            <p className="service-description">
              Professional moving and relocation services. Local moves,
              interstate relocations, office moving, and furniture transport.
            </p>
            <h3 className="serive-sub-header">Services Include:</h3>
            <ul>
              <li>Local & Interstate Moving</li>
              <li>Office Relocation</li>
              <li>Furniture Transport</li>
              <li>Packing & Unpacking</li>
            </ul>
            <button className="service-btn">View Moving Service</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherServices;
