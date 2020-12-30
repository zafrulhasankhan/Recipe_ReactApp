import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  logoContainer: {
    padding: '0 4%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    overflow:'hidden',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
    
  },
  
  alanLogo: {
    height: '35vmin',
    width:'80vmin',
    borderRadius: '15%',
    padding: '0 1%',
    margin: '.1% 0',
    '&:hover':{
      transform: 'scale(1.04)',
      boxShadow: '0 0 -4px -10px rgba(0, 0, 0, 0.25)'
      
  },
    [theme.breakpoints.down('sm')]: {
      height: '55vmin',
      //width:'100vmin'
    },
  },

}))