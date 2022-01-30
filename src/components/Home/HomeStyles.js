import { makeStyles } from '@material-ui/core/styles';
import background from '../../Assets/background3.jpg'


export default makeStyles((theme) => ({
    root: {
        minHeight : '100vh',
        backgroundImage : `url(${process.env.PUBLIC_URL + background})`,
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover'
        },
    roots2: {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        height : '100vh'
    }
    }
    ));