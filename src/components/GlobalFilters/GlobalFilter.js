import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createMuiTheme, Drawer } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { Component, Fragment } from "react";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});
const drawerWidth = 600;
const styles = theme => ({
  FilterIcons: {
    display: "flex",
    JustifyContent: "flex-end",
    cursor: "pointer",
    margin: "25px",
    float: "right"
  },
  FilterDrawer: {
    flexShrink: "0"
  },
  FilerHeader: {
    display: "flex",
    JustifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "20px"
  },
  FilterCloseIcon: {
    marginLeft: "10px",
    fontSize: "20px",
    cursor: "pointer",
    float: "right"
  },
  FilterBody: {
    height: "100%",
    overflow: "auto"
  },
  globalFilterContainer: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid tomato",
    padding: "5px",
    margin: "50px"
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "15px",
    padding: "10px",
    border: "1px solid lightgreen"
  },
  leftContainer: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc"
  },
  leftContainerItem: {
    minHeight: "40px",
    lineHeight: "40px",
    border: "1px solid #ccc",
    padding: "0 10px",
    cursor: "pointer",
    "&:hover": {
      color: "red"
    }
  },
  selectedCategory: {
    backgroundColor: "#ccc",
    color: "red"
  },
  rightContainer: {
    width: "70%",
    margin: "0 5px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc"
  },
  rightContainerItem: {
    minHeight: "40px",
    lineHeight: "40px",
    border: "1px solid #ccc",
    padding: "0 15px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  categoryItemDisabled: {
    color: "rgba(0, 0, 0, 0.6)",
    backgroundColor: "rgba(256, 256, 256, 0.5)"
  },
  bottomContainer: {
    border: "1px solid dodgerblue",
    margin: "15px",
    padding: "10px"
  },
  selectedFilterChip: {
    border: "1px solid red",
    borderRadius: "3px",
    padding: "5px",
    margin: "5px",
    display: "inline-block"
  }
});

class GlobalFilter extends Component {
  constructor(props) {
    super(props);

    this.testData = [
      {
        organization: "UnitedHealthcare",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Dewan County",
        region: "region-1"
      },
      {
        organization: "UnitedHealthcare",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Alachua County",
        region: "region-1"
      },
      {
        organization: "UnitedHealthcare",
        product_type: "SNP",
        plan_type: "PPO",
        county: "Charlotte County",
        region: "region-1"
      },
      {
        organization: "UnitedHealthcare",
        product_type: "SNP",
        plan_type: "PPO",
        county: "Citrus County",
        region: "region-2"
      },
      {
        organization: "UnitedHealthcare",
        product_type: "MA",
        plan_type: "PPO",
        county: "Levy County",
        region: "region-3"
      },
      {
        organization: "Aetna Medicare",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Orange County",
        region: "region-1"
      },
      {
        organization: "Aetna Medicare",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Sarasota County",
        region: "region-1"
      },
      {
        organization: "Aetna Medicare",
        product_type: "SNP",
        plan_type: "PPO",
        county: "Osceola County",
        region: "region-1"
      },
      {
        organization: "Aetna Medicare",
        product_type: "SNP",
        plan_type: "PPO",
        county: "Lee County",
        region: "region-2"
      },
      {
        organization: "Aetna Medicare",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Lake County",
        region: "region-2"
      },
      {
        organization: "Allwell",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Osceola County",
        region: "region-1"
      },
      {
        organization: "Allwell",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Orange County",
        region: "region-1"
      },
      {
        organization: "Allwell",
        product_type: "SNP",
        plan_type: "PPO",
        county: "Boward County",
        region: "region-2"
      },
      {
        organization: "BayCare Health Plans",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Polk County",
        region: "region-1"
      },
      {
        organization: "BayCare Health Plans",
        product_type: "SNP",
        plan_type: "PPO",
        county: "Pasco County",
        region: "region-1"
      },
      {
        organization: "BayCare Health Plans",
        product_type: "SNP",
        plan_type: "PPO",
        county: "Pinellas County",
        region: "region-2"
      },
      {
        organization: "Florida Blue",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Pasco County",
        region: "region-1"
      },
      {
        organization: "Florida Blue",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Osceola County",
        region: "region-1"
      },
      {
        organization: "Florida Blue",
        product_type: "SNP",
        plan_type: "PPO",
        county: "Lee County",
        region: "region-2"
      },
      {
        organization: "Florida Blue",
        product_type: "SNP",
        plan_type: "PPO",
        county: "Lake County",
        region: "region-2"
      }
    ];

    this.state = {
      selectedList: [],
      globalFilterOpen: false,
      data: this.testData,
      filteredData: JSON.parse(JSON.stringify(this.testData)),
      organization: [],
      county: [],
      region: [],
      product_type: [],
      plan_type: [],
      categories: [
        "organization",
        "county",
        "region",
        "product_type",
        "plan_type"
      ],
      selectedCategory: "organization",
      selectedFilter: []
    };
  }

  componentDidMount() {
    this.generateUniqueCategory();
  }

  generateUniqueCategory = () => {
    let organizationSet = new Set();
    let planTypeSet = new Set();
    let productTypeSet = new Set();
    let regionSet = new Set();
    let countySet = new Set();

    for (let d of this.state.filteredData) {
      organizationSet.add(d["organization"]);
      planTypeSet.add(d["plan_type"]);
      productTypeSet.add(d["product_type"]);
      regionSet.add(d["region"]);
      countySet.add(d["county"]);
    }

    let organization = [...organizationSet].map(item => ({
      value: item,
      isSelected: false,
      isDisabled: false
    }));

    let plan_type = [...planTypeSet].map(item => ({
      value: item,
      isSelected: false,
      isDisabled: false
    }));

    let product_type = [...productTypeSet].map(item => ({
      value: item,
      isSelected: false,
      isDisabled: false
    }));

    let region = [...regionSet].map(item => ({
      value: item,
      isSelected: false,
      isDisabled: false
    }));

    let county = [...countySet].map(item => ({
      value: item,
      isSelected: false,
      isDisabled: false
    }));

    this.setState({
      organization,
      plan_type,
      product_type,
      region,
      county
    });
  };

  categoryClickHandler = category => {
    this.setState({ selectedCategory: category });
  };

  categoryItemSelectionChangeHandler = (category, categoryItem) => {
    const isSelected = !categoryItem.isSelected;
    const tmpCategory = this.state[category];
    const foundCategory = tmpCategory.find(
      item => item.value === categoryItem.value
    );
    foundCategory.isSelected = isSelected;
    this.setState({ [category]: tmpCategory });

    if (isSelected) {
      this.state.selectedFilter.push({
        category,
        categoryVal: categoryItem.value
      });
    } else {
      const foundIndex = this.state.selectedFilter.findIndex(
        f => f.category === category && f.categoryVal === categoryItem.value
      );
      this.state.selectedFilter.splice(foundIndex, 1);
    }

    let tmpData = JSON.parse(JSON.stringify(this.state.data));
    if (this.state.selectedFilter.length > 0) {
      this.state.selectedFilter.forEach((sf, i) => {
        if (i > 0 && this.state.selectedFilter[0].category !== sf.category) {
          tmpData = tmpData.filter(d => d[sf.category] === sf.categoryVal);
        }
      });
    }

    this.setState({ filteredData: tmpData }, () => {
      this.generateUniqueCategory();
    });

    this.state.selectedFilter.forEach(sf => {});

    if (this.state.selectedFilter.length > 0) {
      const organization = this.state.organization;
      const county = this.state.county;
      const region = this.state.region;
      const product_type = this.state.product_type;
      const plan_type = this.state.plan_type;

      this.setState({ organization, county, region, product_type, plan_type });
    }
  };

  handleDrawer = () => {
    this.setState({ globalFilterOpen: !this.state.globalFilterOpen });
  };

  render() {
    const { globalFilterOpen } = this.state;
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.Filtericon} onClick={() => this.handleDrawer()}>
          Filters&nbsp;
          <FontAwesomeIcon
            icon={faTimes}
            style={{ margin: 3 }}
            aria-hidden="true"
          />
        </div>

        <Drawer
          className={classes.FilterDrawer}
          anchor="right"
          open={globalFilterOpen}
          PaperProps={{
            style: {
              width: drawerWidth,
              padding: "15px",
              overflow: "auto"
            }
          }}
        >
          <div className={classes.FilterHeader}>
            <FontAwesomeIcon
              className={classes.FilterCloseIcon}
              icon={faTimes}
              aria-hidden="true"
              onClick={() => this.handleDrawer()}
            />
          </div>

          <div className={classes.FilterBody}>
            {this.props.enableMemberSearch ? <div> member search</div> : ""}
            {this.props.enableDateSearch ? <div> Date search</div> : ""}
            {this.props.enableMonthRangeSearch ? (
              <div> Month range search</div>
            ) : (
              ""
            )}

            <div className={classes.globalFilterContainer}>
              <div className={classes.topContainer}>
                <div className={classes.leftContainer}>
                  {this.state.categories.map(category => (
                    <div
                      key={category}
                      className={
                        classes.leftContainerItem +
                        " " +
                        (this.state.selectedCategory === category
                          ? classes.selectedCategory
                          : "")
                      }
                      onClick={this.categoryClickHandler.bind(this, category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
                <div className={classes.rightContainer}>
                  {this.state[this.state.selectedCategory].map(categoryItem => {
                    return (
                      <div
                        key={categoryItem.value}
                        className={
                          classes.rightContainerItem +
                          "" +
                          (categoryItem.isDisabled
                            ? classes.categoryItemDisabled
                            : "")
                        }
                        onClick={this.categoryItemSelectionChangeHandler.bind(
                          this,
                          this.state.selectedCategory,
                          categoryItem
                        )}
                      >
                        <span>{categoryItem.value}</span>
                        {categoryItem.isSelected ? (
                          <FontAwesomeIcon icon={faCheck} aria-hidden="true" />
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={classes.bottomContainer}>
                {this.state.selectedFilter.map(sf => {
                  return (
                    <div
                      className={classes.selectedFilterChip}
                      key={sf.categoryVal + sf.category}
                    >
                      {sf.categoryVal}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

const GlobalFilterWrapped = withStyles(styles, { withTheme: true })(
  GlobalFilter
);

export default GlobalFilterWrapped;
