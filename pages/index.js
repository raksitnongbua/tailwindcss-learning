import { Box, Button, Switch, TextField } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
const useStyles = makeStyles({
  button: {
    backgroundColor: 'red',
  },
});
export default function Home() {
  const { button } = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkModeChange = (event) => {
    console.log(event.target.checked);
    setDarkMode(event.target.checked);
  };
  return (
    <div className='container mx-auto p-4'>
      <Switch checked={darkMode} onChange={handleDarkModeChange}></Switch>
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
      <Button
        // class='bg-blue-50'
        // className='btn-blue'
        className={button}
        variant='contained'
      >
        Click me! 2
      </Button>
      <Box component={Button} sx='bg-red-400' variant='contained'>
        Click me!
      </Box>

      <button className='bg-red-400'>btn</button>
      <TextField variant='outlined' className='text-white' />
      <h1 className='text-gray-900 dark:text-white'>Dark mode is here!</h1>
      <p className='text-gray-600 dark:text-gray-300'>Lorem ipsum...</p>
    </div>
  );
}
