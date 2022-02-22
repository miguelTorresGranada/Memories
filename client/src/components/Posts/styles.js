import { makeStyles } from '@mui/styles';



export default makeStyles((theme) => {
  console.log(theme);
  return {
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: '8px',
  },
  actionDiv: {
    textAlign: 'center',
  },
}});