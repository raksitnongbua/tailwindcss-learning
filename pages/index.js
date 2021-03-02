import { Box, Button, Switch, TextField } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import { useState } from 'react';
import { connect } from 'react-redux';
import { setDarkMode as setDarkModeAction } from '../stores/theme/action';
const Home = (props) => {
  console.log(props);
  const { changeDarkMode, darkMode } = props;
  const handleDarkModeChange = (event) => {
    changeDarkMode(event.target.checked);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log(darkMode);
  };
  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-row-reverse'>
        <Switch checked={darkMode} onChange={handleDarkModeChange}></Switch>
      </div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          bgcolor: 'background.paper',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: 1,
          fontWeight: 'bold',
        }}
      >
        <Box
          component='img'
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt='The house from the offer.'
          src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2'
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            m: 3,
            minWidth: { md: 350 },
          }}
        >
          <Box component='span' sx={{ fontSize: 16, mt: 1 }}>
            123 Main St, Phoenix AZ
          </Box>
          <Box component='span' sx={{ color: 'primary.main', fontSize: 22 }}>
            $280,000 — $310,000
          </Box>
          <Box
            sx={{
              mt: 1.5,
              p: 0.5,
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.main, 0.1),
              borderRadius: '5px',
              color: 'primary.main',
              fontWeight: 'medium',
              display: 'flex',
              fontSize: 12,
              alignItems: 'center',
              '& svg': {
                fontSize: 21,
                mr: 0.5,
              },
            }}
          >
            CONFIDENCE SCORE 85%
          </Box>
        </Box>
      </Box>
      <Button variant='contained' className='btn-blue m-1'>
        Click me! 2
      </Button>
      <Button color='primary' variant='outlined'>
        Material BTN
      </Button>
      <TextField
        variant='outlined'
        className='border-white m-2'
        inputProps={{ className: 'text-gray-900 dark:text-white' }}
      />
      <h1 className='text-gray-900 dark:text-white'>Dark mode is here!</h1>
      <p className='text-gray-600 dark:text-gray-300'>Lorem ipsum...</p>
    </div>
  );
};
const mapStateToProps = ({ darkMode }) => {
  return {
    darkMode,
  };
};
const mapDispatchToProps = (dispatch) => ({
  changeDarkMode: (darkMode) => dispatch(setDarkModeAction(darkMode)),
});
const HomeWithConnect = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeWithConnect;
