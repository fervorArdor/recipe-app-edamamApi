import { makeStyles } from '@material-ui/styles'

export default makeStyles({
    displayFlex: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    container: {
        width: '350px',
        height: '350px',
        position: 'relative',
        marginBottom: '20px',
    },
    images: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    button: {
        position: 'absolute',
        left: '10px',
        bottom: '10px',
    },
    view: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100px',
        padding: '5px',
        borderTopLeftRadius: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        position: 'absolute',
        right: '0',
        bottom: '0',
    }
})