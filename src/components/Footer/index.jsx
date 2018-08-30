import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div
        className="bg-light"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <div className="container">
          <div className="d-inline" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
            Gallereasy POC web app
          </div>
          <div className="d-inline float-right" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
            2359 Media
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;