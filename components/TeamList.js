var React = require('react');
var Player = require('./Player.js');
var _ = require('lodash');

var TeamList = React.createClass({
  render() {
    var roster = _.cloneDeep(this.props.team.players);
    
    return (
      <div>
        { 
          roster.map((player, index) => {
            return <Player key={index} data={player} onPlayerClicked={this.props.onPlayerClicked} />;
          })
        }
        <br />
        <br />
        <div>Team Salary: { this.props.team.totalSalary }</div>
      </div>
    );
  }
});

module.exports = TeamList;