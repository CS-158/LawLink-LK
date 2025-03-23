import React from "react";
import { useState } from "react";
import Nav from "./Nav.jsx";
import "./Home.css";
import { SlArrowDown } from "react-icons/sl";
import { IoClose } from "react-icons/io5";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <Nav></Nav>
      <div className="dash">
        <div className="dash-1">
          <ul>
            <li>
              <i class="ri-calendar-2-line"></i>
            </li>
            <li>
              <i class="ri-question-line"></i>
            </li>
            <li>
              <i class="ri-notification-4-line"></i>
            </li>
          </ul>
        </div>
        <div className="dash-2">
          <div className="dash-2-name">
            <div className="dash-2-name-box">
              <h2>Michael thompsen</h2>
            </div>
          </div>
          <div className="dash-2-logo">
            <div className="logo-radius">
              <i class="ri-user-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box-1">
          <div className="box-1-1">
            <h3>Property Boundary Dispute</h3>
            <div className="button-open-close">
              {!isOpen && (
                <button className="open-btn" onClick={() => setIsOpen(true)}>
                  <SlArrowDown size={18} />
                </button>
              )}
            </div>

            {/* Popup Box - Appears Above Button */}
            {isOpen && (
              <>
                <div
                  className="popup-overlay"
                  onClick={() => setIsOpen(false)}
                ></div>

                <div className="popupbox">
                  {/* Close Button (Arrow Up) */}
                  <button
                    className="close-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    <IoClose size={18} />
                  </button>

                  <div className="mbox">
                    <div className="pricebox">
                      <input type="text" placeholder="PRICE" />
                    </div>
                    <div className="desbox">
                      Here's how I can assist you: <br />
                      <br />
                     
                    </div>
                    <div className="offerbox">
                      <input type="text" placeholder="Write an offer" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <hr />
          <p style={{ marginTop: "5px" }}>
            A homeowner disputes the boundary lines with a neighbor after a
            fence is built that may be encroaching onto their property. The
            lawyer is tasked with resolving the issue, including reviewing
            property deeds and survey reports, and potentially filing a case to
            enforce property rights.
          </p>
        </div>
        <div className="box-2">
          <div className="box-2-1">
            <h3>Real Estate Contract Breach</h3>
            <div className="button-open-close">
              {!isOpen && (
                <button className="open-btn" onClick={() => setIsOpen(true)}>
                  <SlArrowDown size={18} />
                </button>
              )}
            </div>

            {/* Popup Box - Appears Above Button */}
            {isOpen && (
              <>
                <div
                  className="popup-overlay"
                  onClick={() => setIsOpen(false)}
                ></div>

                <div className="popupbox">
                  {/* Close Button (Arrow Up) */}
                  <button
                    className="close-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    <IoClose size={18} />
                  </button>

                  <div className="mbox">
                    <div className="pricebox">
                      <input type="text" placeholder="PRICE" />
                    </div>
                    <div className="desbox">
                      Here's how I can assist you: <br />
                      <br />
                      Review Documents: <br />I will review your property deed,
                      survey reports, and any other related documents to assess
                      the boundary dispute. Negotiation: I will contact your
                      neighbor to attempt an amicable resolution and clarity the
                      boundary lines.
                    </div>
                    <div className="offerbox">
                      <input type="text" placeholder="Write an offer" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <hr />
          <p style={{ marginTop: "5px" }}>
            A client claims that the seller of a property has failed to honor
            the terms of a sale agreement, such as misrepresenting the condition
            of the property or not providing agreed-upon repairs. The lawyer
            helps the client pursue compensation or enforces the
            contract's terms.
          </p>
        </div>
        <div className="box-3">
          <div className="box-3-1">
            <h3>Zoning and Land Use Issues</h3>
            <div className="button-open-close">
              {!isOpen && (
                <button className="open-btn" onClick={() => setIsOpen(true)}>
                  <SlArrowDown size={18} />
                </button>
              )}
            </div>

            {/* Popup Box - Appears Above Button */}
            {isOpen && (
              <>
                <div
                  className="popup-overlay"
                  onClick={() => setIsOpen(false)}
                ></div>

                <div className="popupbox">
                  {/* Close Button (Arrow Up) */}
                  <button
                    className="close-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    <IoClose size={18} />
                  </button>

                  <div className="mbox">
                    <div className="pricebox">
                      <input type="text" placeholder="PRICE" />
                    </div>
                    <div className="desbox">
                      Here's how I can assist you: <br />
                      <br />
                      Review Documents: <br />I will review your property deed,
                      survey reports, and any other related documents to assess
                      the boundary dispute. Negotiation: I will contact your
                      neighbor to attempt an amicable resolution and clarity the
                      boundary lines.
                    </div>
                    <div className="offerbox">
                      <input type="text" placeholder="Write an offer" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <hr />
          <p style={{ marginTop: "5px" }}>
            A property owner wants to change the use of their land (e.g., from
            residential to commercial). The lawyer helps navigate local zoning
            laws, obtain necessary permits, and challenge zoning restrictions if
            the client's goals are hindered by current land-use regulations.
          </p>
        </div>

        <div className="box-4">
          <div className="box-4-1">
            <h3>Property Boundary Dispute</h3>
            <div className="button-open-close">
              {!isOpen && (
                <button className="open-btn" onClick={() => setIsOpen(true)}>
                  <SlArrowDown size={18} />
                </button>
              )}
            </div>

            {/* Popup Box - Appears Above Button */}
            {isOpen && (
              <>
                <div
                  className="popup-overlay"
                  onClick={() => setIsOpen(false)}
                ></div>

                <div className="popupbox">
                  {/* Close Button (Arrow Up) */}
                  <button
                    className="close-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    <IoClose size={18} />
                  </button>

                  <div className="mbox">
                    <div className="pricebox">
                      <input type="text" placeholder="PRICE" />
                    </div>
                    <div className="desbox">
                      Here's how I can assist you: <br />
                      <br />
                      Review Documents: <br />I will review your property deed,
                      survey reports, and any other related documents to assess
                      the boundary dispute. Negotiation: I will contact your
                      neighbor to attempt an amicable resolution and clarity the
                      boundary lines.
                    </div>
                    <div className="offerbox">
                      <input type="text" placeholder="Write an offer" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <hr />
          <p style={{ marginTop: "5px" }}>
            A homeowner disputes the boundary lines with a neighbor after a
            fence is built that may be encroaching onto their property. The
            lawyer is tasked with resolving the issue, including reviewing
            property deeds and survey reports, and potentially filing a case to
            enforce property rights.
          </p>
        </div>
      </div>
    </div>
  );
}
