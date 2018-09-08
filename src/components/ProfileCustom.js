import React from 'react';

class ProfileCustom extends React.Component {

  render() {
    return(
      <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
        <div className="profile-pic">
        </div>
        <p style={{textAlign: 'center', borderBottom: "4px solid #282830"}}>
          Who Am I?
        </p>
        <p style={{textAlign: 'center'}}>
          {this.props.bio}
        </p>
      </div>
    );
  }
};

export default ProfileCustom;
