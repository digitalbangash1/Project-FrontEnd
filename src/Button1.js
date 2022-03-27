import React, {Component} from "react";
import {Button} from '@material-ui/core'

import {Link} from 'react-router-dom';



class Button1 extends Component {




    render() {
        return (
            <div>
                <Button align
                        color={"primary"}
                        variant={"outlined"}
                        component={Link} to = "/coursesTemplate"



                >
                    Create courses
                </Button>

            </div>
        )
    }
}

export default Button1