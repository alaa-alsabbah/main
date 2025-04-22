import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Card, CardContent, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css';

const newsArticles = [
  {
    title: 'Global Market Update',
    description: 'Stock markets around the world are reacting to recent policy shifts.',
  },
  {
    title: 'New Discoveries in Medicine',
    description: 'Scientists have made a breakthrough in treatment methods.',
  },
  {
    title: 'AI is Reshaping the Future',
    description: 'From automation to creativity, AI is taking center stage.',
  }
];

const News = () => {
  return (
    <>
      {/* Top Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Roya News
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Banner */}
      <div className="banner" style={{  padding: '60px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Latest News
          </Typography>
          <Typography variant="h6" paragraph>
            Stay up-to-date with the most recent news and top stories from around the world.
          </Typography>
        </Container>
      </div>

      {/* News Articles Section */}
      <Container style={{ marginTop: '40px' }}>
        <Grid container spacing={4}>
          {newsArticles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="outlined" style={{ padding: '16px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', color: '#2c3e50' }}>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ fontSize: '1rem' }}>
                    {article.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ backgroundColor: '#2c3e50', color: '#fff', padding: '20px 0', textAlign: 'center', marginTop: '40px' }}>
        <Typography variant="body2">© {new Date().getFullYear()} Roya News. All rights reserved.</Typography>
      </Box>
    </>
  );
};

export default News;
