import React, { Component, Fragment } from 'react';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {Drawer, ListItem, Chip, Button } from '@material-ui/core';
import { fontAwesomeIcon, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createMuiTheme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import CategorySearch from './CategorySearch';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});
const drawerWidth = 600;
const styles = theme => ({
    FilterIcons: {
        display: 'flex',
        JustifyContent: 'flex-end',
        cursor: 'pointer',
        margin: '25px',
        float: 'right'
    },
    FilterDrawer: {
        flexShrink: '0'
    },
    FilerHeader: {
        display: 'flex',
        JustifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: '20px'
    },
    FilterCloseIcon: {
        marginLeft: '10px',
        fontSize: '20px',
        cursor: 'pointer',
        float: 'right'
    },
    FilterBody: {
        height: '100%',
        overflow: 'auto'
    }
})

class GlobalFilter extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedList : [],
            globalFilterOpen: false
        };
    }
    handleDrawer = () => {
        this.setState({globalFilterOpen: !this.state.globalFilterOpen});
    };

    render() {
        const { globalFilterOpen }= this.state;
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.Filtericon} onClick={() => this.handleDrawer()}>
                    Filters&nbsp;
                    <FontAwesomeIcon icon={faTimes} style={{margin:3}} aria-hidden='true'/>
                </div>
                <Drawer className={classes.FilterDrawer} anchor='right' open={globalFilterOpen}
                    PaperProps={{
                        style: {
                            width: drawerWidth,
                            padding: "15px",
                            overflow: "auto"
                        }
                    }}
                >
                    <div className={classes.FilterHeader}>
                        <FontAwesomeIcon className={classes.FilterCloseIcon} icon={faTimes} aria-hidden='true' onClick={() => this.handleDrawer()}/>  
                    </div>
                    <div className={classes.FilterBody}>
                        {this.props.enableMemberSearch ? (<div> member search</div>) : ''}
                        {this.props.enableDateSearch ? (<div> Date search</div>) : ''}
                        {this.props.enableMonthRangeSearch ? (<div> Month range search</div>) : ''}
                        <CategorySearch/>
                    </div>
                </Drawer>
            </Fragment>
        );
    }
}

const GlobalFilterWrapped = withStyles(styles, {withTheme: true})(GlobalFilter);

export default GlobalFilterWrapped;