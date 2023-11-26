import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const StatisticsCard = ({ team, dataStatus, title }) => {
  const {
    teamName,
    teamIcon,
    wins,
    draws,
    losses,
    goalsFor,
    goalsAgainst,
    position,
  } = team;

  const isBest = (inputString) => inputString.toLowerCase().includes('best');

  return (
    <div>
      {dataStatus > 0 ? (
        <Card sx={{ maxWidth: 355 }}>
          <CardMedia sx={{ height: 140 }} image={teamIcon} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {teamName}
            </Typography>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              color={isBest(title) ? 'green' : 'red'}
            >
              {title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Position: {position}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Wins: {wins}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Draws: {draws}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Losses: {losses}
                </Typography>
              </Grid>
              <Grid item xs={'auto'}>
                <Typography variant="body2" color="text.secondary">
                  Goals For: {goalsFor}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Goals Against: {goalsAgainst}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};

StatisticsCard.propTypes = {
  team: PropTypes.object,
  dataStatus: PropTypes.number,
  title: PropTypes.string,
};

export default StatisticsCard;
