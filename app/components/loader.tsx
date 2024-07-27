import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const SkeletonLoader = () => {
  return (
    <Grid container spacing={4}>
      {[...Array(8)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <Skeleton variant="rectangular" height={140} />
            <CardContent>
              <Typography variant="h5">
                <Skeleton />
              </Typography>
              <Typography variant="subtitle1">
                <Skeleton width="60%" />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonLoader;
