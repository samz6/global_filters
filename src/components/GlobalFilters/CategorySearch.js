import React, { Component, Fragment } from "react";
import { List, ListItemText, Chip, Button, ListItem } from "@material-ui/core";
import {
  fontAwesomeIcon,
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import { createMuiTheme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const styles = theme => ({
  SearchContainer: {
    border: "1px solid #a8a9a9",
    borderTop: "5px solid #009fae",
    borderRadius: "5px",
    marginBottom: "15px",
    boxShadow: "0px 3px 4px 0px #c0c0c0",
    padding: "12px",
    backgroundColor: "#fafafa"
  },
  CategoryContainer: {
    display: "flex",
    marginTop: "25px"
  },
  CategoryListContainer: {
    width: "50%",
    backgroundColor: "#009fae",
    color: "#fff",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    boxShadow: "0px 3px 4px 0px #c0c0c0"
  },
  CategoryFilteredListContainer: {
    width: "calc(100%)",
    marginLeft: "6px",
    border: "1px solid #a8a9a9",
    boxShadow: "0px 3px 4px 0px #c0c0c0",
    height: "300px",
    overflow: "auto",
    "& input": {
      marginBottom: "5px",
      width: "calc(100%-3px)"
    }
  },
  SelectedCategoryContainer: {
    minHeight: "80px",
    maxHeight: "80px",
    overflow: "auto",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginTop: "5px"
  },
  CategoryListItem: {
    "& ::after": {
      content: "",
      position: "absolute",
      right: "0%",
      top: "25%",
      width: "0",
      height: "0",
      borderRight: "12px solid #FFF",
      borderBottom: "12px solid transparent",
      borderTop: "12px solid transparent",
      clear: "both"
    }
  }
});

class CategorySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryItems: [
        { label: "Organization", value: "OrganizationName" },
        { label: "Product Type", value: "Product" },
        { label: "Plan Type", value: "PlanCode" },
        { label: "County", value: "County" }
      ]
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.SearchContainer}>
        <div className={classes.CategoryContainer}>
          <div className={classes.CategoryListContainer}>
            <List>
              {this.state.categoryItems.map(item => {
                return (
                  <ListItem
                    key={item.label}
                    className={classes.CategoryListItem}
                    button
                    onClick={() => console.log("list item selected")}
                  >
                    <ListItemText
                      styles={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        margin: "0"
                      }}
                      disableTypography
                    >
                      {item.label}
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </div>
          <div className={classes.CategoryFilteredListContainer}>
            category filtered list container
          </div>
        </div>
        <div className={classes.SelectedCategoryContainer}>
          here goes the tags
        </div>
      </div>
    );
  }
}

const CategorySearchWrapped = withStyles(styles, { withTheme: true })(
  CategorySearch
);

export default CategorySearchWrapped;
