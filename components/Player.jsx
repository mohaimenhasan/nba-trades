import React, { PropTypes } from 'react';
const teamStyle = require('./teamStyles');

export default class Player extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.formatTeamName = this.formatTeamName.bind(this);
  }

  handleClick(player) {
    this.props.onPlayerClicked(player);
  }

  formatTeamName() {
    return this.props.teamName.toLowerCase().replace(/\ /, '').replace('76', 'six');
  }

  render() {
    let className = this.formatTeamName();
    let teamColors = teamStyle[className];

    let style = {
      flexShrink: 0,
      height: '50px',
      width: '160px',
      margin: '3px',
      display: 'inline-block',
      position: 'relative',
      background: teamColors.background,
      color: teamColors.color,
      border: teamColors.border
    };

    let imgStyle = {
      position: 'absolute',
      left: '2px',
      top: '3px'
    };

    let nameStyle = {
      position: 'absolute',
      right: '5px'
    };

    let salaryStyle = {
      position: 'absolute',
      right: '5px',
      bottom: '5px'
    };

    return (
      <div style={style} ref="player" onClick={this.handleClick.bind(this, this.props.player)}>
        <img style={imgStyle} src={this.props.imageUrl} height='45px' width='32px' />
        <span style={nameStyle} className="playerName">{this.props.name}</span>
        <span style={salaryStyle} className="playerSalary">{this.props.salary}</span>
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};
