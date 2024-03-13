
import {Link, useNavigate} from "react-router-dom";
import {AppBar, Button, Container, Toolbar, Typography} from "@mui/material";

const Header = () => {

    // const dispatch = useAppDispatch();
    const navigate = useNavigate();


    return (
        <AppBar position="static" color={'warning'}>
            <Container maxWidth="xl" sx={
                {
                    'display':'flex',
                    'justifyContent':'space-between'

                }
            }>
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'grey',
                        }}
                    >
                        Movie
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <Button
                        color={"inherit"}
                        onClick={()=>navigate('/movies')}

                    >
                        Movies
                    </Button>
                    <Button
                        color={"inherit"}
                        onClick={()=>navigate('/genres')}
                    >
                        Genres
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>

    );
};

export {Header};