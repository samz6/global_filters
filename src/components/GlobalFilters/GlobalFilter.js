import {
  faCheck,
  faTimes,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createMuiTheme, Drawer } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { Component, Fragment } from "react";
const taffy = require("./taffy");

console.log({ taffy });

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
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: "rgba(256, 256, 256, 0.5)"
  },
  bottomContainer: {
    border: "1px solid dodgerblue",
    margin: "15px",
    padding: "10px"
  },
  selectedFilterChipContainer: {
    border: "1px solid red",
    borderRadius: "3px",
    padding: "5px",
    margin: "5px",
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  selectedFilterChipLabel: {
    padding: "5px",
    margin: "5px",
    display: "inline-block"
  },
  selectedFilterChipIcon: {
    padding: "5px",
    color: "red",
    cursor: "pointer"
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
        organization: "Allwell",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Duval County",
        region: "region-1"
      },
      {
        organization: "Allwell",
        product_type: "SNP",
        plan_type: "HMO (SNP)",
        county: "Duval County",
        region: "region-1"
      },
      {
        organization: "Aetna Medicare",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Duval County",
        region: "region-1"
      },
      {
        organization: "Aetna Medicare",
        product_type: "SNP",
        plan_type: "HMO (SNP)",
        county: "Duval County",
        region: "region-1"
      },
      {
        organization: "Aetna Medicare",
        product_type: "MAPD",
        plan_type: "Local Preferred Provider Organization",
        county: "Duval County",
        region: "region-1"
      },
      {
        organization: "BayCare Health Plans",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Polk County",
        region: "region-1"
      },
      {
        organization: "Florida Blue HMO",
        product_type: "MAPD",
        plan_type: "HMO",
        county: "Bay County",
        region: "region-1"
      },
      {
        organization: "UnitedHealthcare",
        product_type: "MAPD",
        plan_type: "Local Preferred Provider Organization",
        county: "Bay County",
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
      },
      {
        organization: "UnitedHealthcare",
        product_type: "MA",
        plan_type: "PPO",
        county: "Charlotte County",
        region: "region-1"
      },
      {
        organization: "Aetna Medicare",
        product_type: "MAPD",
        plan_type: "Local Preferred Provider Organization",
        county: "Duval County",
        region: "region-1"
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
      unSelectedFiltersObj: {},
      selectedFilter: []
    };
  }

  componentDidMount() {
    this.generateDistinctCategories();
  }

  generateDistinctCategories = () => {
    const distinctCategories = {};

    this.state.categories.forEach(categoryField => {
      distinctCategories[categoryField] = new Set();
    });

    this.state.filteredData.forEach(item => {
      this.state.categories.forEach(categoryField => {
        distinctCategories[categoryField].add(item[categoryField]);
      });
    });

    this.state.categories.forEach(categoryField => {
      distinctCategories[categoryField] = [...distinctCategories[categoryField]]
        .sort((a, b) => a.localeCompare(b))
        .map(item => ({
          value: item,
          isSelected: false,
          isDisabled: false
        }));
    });

    this.setState(distinctCategories);
  };

  categoryClickHandler = category => {
    this.setState({ selectedCategory: category });
  };

  categoryItemSelectionChangeHandler = (
    category,
    categoryValue,
    isItemSelected
  ) => {
    const isSelected = !isItemSelected;
    const tmpCategory = this.state[category];
    // finding the categoryValue selected in the unique category set for checking or unchecking
    const foundCategory = tmpCategory.find(
      item => item.value === categoryValue
    );
    foundCategory.isSelected = isSelected;
    this.setState({ [category]: tmpCategory });

    if (isSelected) {
      let lastFoundIndex = -1;
      for (let i = this.state.selectedFilter.length - 1; i >= 0; i--) {
        if (this.state.selectedFilter[i].category === category) {
          lastFoundIndex = i;
          break;
        }
      }
      const newFilterItem = {
        category,
        categoryVal: categoryValue
      };
      if (lastFoundIndex === -1) {
        this.state.selectedFilter.push(newFilterItem);
      } else {
        this.state.selectedFilter.splice(lastFoundIndex + 1, 0, newFilterItem);
      }
    } else {
      const foundIndex = this.state.selectedFilter.findIndex(
        f => f.category === category && f.categoryVal === categoryValue
      );
      this.state.selectedFilter.splice(foundIndex, 1); //need to change as we directly changing the state
    }

    let tmpFilteredData = JSON.parse(JSON.stringify(this.state.data));
    const groupedSelectedFilter = [];
    this.state.selectedFilter.forEach(sf => {
      const found = groupedSelectedFilter.find(
        item => item.category === sf.category
      );
      if (found) {
        found.categoryValues[sf.categoryVal] = 1;
      } else {
        groupedSelectedFilter.push({
          category: sf.category,
          categoryValues: { [sf.categoryVal]: 1 }
        });
      }
    });

    const q = {};
    groupedSelectedFilter.forEach(gsf => {
      q[gsf.category] = Object.keys(gsf.categoryValues);
    });

    const db = taffy.taffy(tmpFilteredData);
    const f = db(q);
    const ff = f.get();
    console.table(ff);
    tmpFilteredData = ff;

    let availableOrganization = {};
    let availablePlanType = {};
    let availableProductType = {};
    let availableRegion = {};
    let availableCounty = {};

    for (let d of tmpFilteredData) {
      availableOrganization[d["organization"]] = true;
      availablePlanType[d["plan_type"]] = true;
      availableProductType[d["product_type"]] = true;
      availableRegion[d["region"]] = true;
      availableCounty[d["county"]] = true;
    }

    let unSelectedFiltersObj = {};
    if (this.state.selectedFilter.length > 0) {
      const organization = this.state.organization;
      if (category !== "organization") {
        for (let o of organization) {
          if (availableOrganization.hasOwnProperty(o.value)) {
            o.isDisabled = false;
          } else {
            o.isDisabled = true;
            unSelectedFiltersObj[`organization###${o.value}`] = true;
          }
        }
      }

      const county = this.state.county;
      if (category !== "county") {
        for (let c of county) {
          if (availableCounty.hasOwnProperty(c.value)) {
            c.isDisabled = false;
          } else {
            c.isDisabled = true;
            unSelectedFiltersObj[`county###${c.value}`] = true;
          }
        }
      }

      const region = this.state.region;
      if (category !== "region") {
        for (let r of region) {
          if (availableRegion.hasOwnProperty(r.value)) {
            r.isDisabled = false;
          } else {
            r.isDisabled = true;
            unSelectedFiltersObj[`region###${r.value}`] = true;
          }
        }
      }

      const product_type = this.state.product_type;
      if (category !== "product_type") {
        for (let prodT of product_type) {
          if (availableProductType.hasOwnProperty(prodT.value)) {
            prodT.isDisabled = false;
          } else {
            prodT.isDisabled = true;
            unSelectedFiltersObj[`product_type###${prodT.value}`] = true;
          }
        }
      }

      const plan_type = this.state.plan_type;
      if (category !== "plan_type") {
        for (let planT of plan_type) {
          if (availablePlanType.hasOwnProperty(planT.value)) {
            planT.isDisabled = false;
          } else {
            planT.isDisabled = true;
            unSelectedFiltersObj[`plan_type###${planT.value}`] = true;
          }
        }
      }

      this.setState({
        organization,
        county,
        region,
        product_type,
        plan_type,
        unSelectedFiltersObj
      });
    }

    if (this.state.selectedFilter.length === 0) {
      const uniqueCategoriesItems = {};
      this.state.categories.forEach(categoryField => {
        uniqueCategoriesItems[categoryField] = this.state[categoryField];
        uniqueCategoriesItems[categoryField].forEach(curCatoryItem => {
          curCatoryItem.isDisabled = false;
        });
      });

      this.setState(uniqueCategoriesItems);
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
                          " " +
                          (categoryItem.isDisabled
                            ? classes.categoryItemDisabled
                            : " ")
                        }
                        onClick={this.categoryItemSelectionChangeHandler.bind(
                          this,
                          this.state.selectedCategory,
                          categoryItem.value,
                          categoryItem.isSelected
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
                  return !this.state.unSelectedFiltersObj[
                    `${sf.category}###${sf.categoryVal}`
                  ] ? (
                    <div
                      className={classes.selectedFilterChipContainer}
                      key={sf.categoryVal + sf.category}
                    >
                      <div className={classes.selectedFilterChipLabel}>
                        {sf.categoryVal}
                      </div>
                      <FontAwesomeIcon
                        className={classes.selectedFilterChipIcon}
                        onClick={this.categoryItemSelectionChangeHandler.bind(
                          this,
                          sf.category,
                          sf.categoryVal,
                          true
                        )}
                        icon={faTimesCircle}
                        aria-hidden="true"
                      />
                    </div>
                  ) : (
                    ""
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
