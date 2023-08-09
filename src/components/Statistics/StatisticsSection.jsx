import React from 'react';
import { useSelector } from 'react-redux';
import StatisticsCard from './StatisticsCard'; // Import your StatisticsCard component

const StatisticsSection = () => {
    const { seasonResult } = useSelector((state) => state.seasonResult);
    const dataOk = seasonResult.length > 0;


    const calculateStatistics = (teams) => {
        if (!dataOk) {
            return {
                bestAttack: null,
                bestDefense: null,
                worstAttack: null,
                worstDefense: null,
            };
        }

        const bestAttack = teams.reduce((prev, current) => (
            (prev.goalsFor > current.goalsFor) ? prev : current
        ), teams[0]); // Provide initial value as the first team

        const bestDefense = teams.reduce((prev, current) => (
            (prev.goalsAgainst < current.goalsAgainst) ? prev : current
        ), teams[0]); // Provide initial value as the first team

        const worstAttack = teams.reduce((prev, current) => (
            (prev.goalsFor < current.goalsFor) ? prev : current
        ), teams[0]); // Provide initial value as the first team

        const worstDefense = teams.reduce((prev, current) => (
            (prev.goalsAgainst > current.goalsAgainst) ? prev : current
        ), teams[0]); // Provide initial value as the first team

        return { bestAttack, bestDefense, worstAttack, worstDefense };
    };

    const { bestAttack, bestDefense, worstAttack, worstDefense } = calculateStatistics(seasonResult);

    return (
        <div>
            {bestAttack && bestDefense && worstAttack && worstDefense && (
                <div className="statistics-section" style={{ display: 'flex' }}>
                    <StatisticsCard team={bestAttack} dataStatus={dataOk} title="Best Attack" />
                    <StatisticsCard team={bestDefense} dataStatus={dataOk} title="Best Defense" />
                    <StatisticsCard team={worstAttack} dataStatus={dataOk} title="Worst Attack" />
                    <StatisticsCard team={worstDefense} dataStatus={dataOk} title="Worst Defense" />
                </div>
            )}
        </div>
    );
};

export default StatisticsSection;
