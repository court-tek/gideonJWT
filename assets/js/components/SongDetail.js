import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetail extends Component {
  display() {
    const { song } = this.props;
    if (!song) {
      return <div style={{}}>Select A Song</div>;
    } else {
      return (
        <div>
          <h3>Details for:</h3>
          <p>
            Title: {song.title}
            <br />
            Duration: {song.duration}
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "24px" }}>Song Detail</div>
        </div>
        {this.display()}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
