import React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia, Grid } from "@mui/material";

const StatisticsCard = ( {team, dataStatus} ) => {
    const { teamName, teamIcon, wins, draws, losses, goalsFor, goalsAgainst, position } = team;

    return (
        <div>
            {dataStatus > 0 ?
                <Card sx={{ maxWidth: 355 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={teamIcon}
                        title={teamName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {teamName}
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
                            <Grid item xs={6}>
                                <Typography variant="body2" color="text.secondary">
                                    Goals For: {goalsFor}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Goals Against: {goalsAgainst}
                                </Typography>
                                {/* You can add more statistics here */}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                : null
            }
        </div>
    );
};

export default StatisticsCard;
