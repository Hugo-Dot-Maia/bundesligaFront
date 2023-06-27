import React from 'react';
import './LeagueTable.css'; 

const LeagueTable = ({ data }) => {
    const getClassNames = (index, totalTeams) => {

        const classNames = {
            '0': 'green-row',
            '1': 'green-row',
            '2': 'green-row',
            '3': 'green-row',
            '4': 'blue-row',
            [`${totalTeams - 1}`]: 'red-row',
            [`${totalTeams - 2}`]: 'red-row',
            [`${totalTeams - 3}`]: 'red-row',
        };
        
        return classNames[index] || '';
    };
  return (
    <div>
        <table className="league-table">
            <thead>
                <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Matches Played</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
                <th>Goals For</th>
                <th>Goals Against</th>
                <th>Goal Difference</th>
                <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {data.teamResults.map((team, index) => (
                <tr key={team.teamId}
                    className={getClassNames(index, data.teamResults.length)}
                >
                    <td>{team.position}</td>
                    <td>{team.teamName}</td>
                    <td>{team.matchesPlayed}</td>
                    <td>{team.wins}</td>
                    <td>{team.draws}</td>
                    <td>{team.losses}</td>
                    <td>{team.goalsFor}</td>
                    <td>{team.goalsAgainst}</td>
                    <td>{team.goalsDifference}</td>
                    <td>{team.points}</td>
                </tr>
            ))}
        </tbody>
    </table>
    <div className="subtitle">
        <span className="green-color-info">Green:</span> UEFA Champions League Group Stage
        <span className="blue-color-info">Blue:</span> UEFA Europa League Group Stage
        <span className="red-color-info">Red:</span> Relegated
      </div>
    </div>
  );
};

export default LeagueTable;
