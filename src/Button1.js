import React, {Component} from "react";
import {Button} from '@material-ui/core'
import Grid from "@material-ui/core/Grid";

import {Link} from 'react-router-dom';



class Button1 extends Component {
    




    render() {
        return (
            <div className="btn">
                <Grid container justify="center">
                <Button classname = "sasa"
                        color={"primary"}
                        variant={"outlined"}
                        component={Link} to = "/coursesTemplate"
                >
                    Create Courses
                   
                </Button>
                <br/>

                <Button classname = "updateCourses"
                        color={"primary"}
                        variant={"outlined"}
                        component={Link} to = "/coursesTemplate"
                >
                    Update Courses
                   
                </Button>
                </Grid>
            </div>
        )
    }
}

export default Button1