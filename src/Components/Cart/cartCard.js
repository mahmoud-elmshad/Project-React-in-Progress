import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
export default function CartCard(props) {
  return (
    <>
      <div className="d-flex my-3 gap-3" style={{ backgroundColor: "white" }}>
        <div>
          <img src={props.imgurl} alt="" />
        </div>
        <div>
          <div className="d-flex flex-column">
            <div className="fs-4">{props.brand}</div>
            <div className="fw-bold fs-4">{props.title}</div>
            <div className="my-3">
              <div className="fs-5">Order in</div>
              <div className="fs-5 fw-bold">
                Free delivery <span className="fw-normal">by</span>
              </div>
            </div>

            <div className="fs-5 mb-3">
              Sold by <span className="fs-4 fw-bold">{props.trader}</span>
            </div>
            <div
              className="fs-5 d-flex align-items-center mb-3"
              style={{ backgroundColor: "#FFF8EC" }}
            >
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/same_day_delivery.svg"
                alt=""
              />
              Select Get it tomorrow on checkout to get it tomorrow
            </div>
            <div
              className="fs-5 d-flex align-items-center w-75 mb-3"
              style={{ backgroundColor: "#FFF8EC" }}
            >
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/warranty.svg"
                alt=""
              />
              2 year warranty
            </div>
            <div className="pb-3  d-flex align-items-center">
              <img
                className=""
                src="https://z.nooncdn.com/s/app/com/noon/icons/trash.svg"
                alt=""
              />
              <button
                className="btn btn-light fs-5"
                style={{ backgroundColor: "white", border: "none" }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
