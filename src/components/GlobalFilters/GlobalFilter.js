import {
  faCheck,
  faEdit,
  faTimes,
  faTimesCircle,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createMuiTheme, Drawer } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/styles';
import React, { Component, Fragment } from 'react';
import FormDialog from './FormDialog';
import AlertDialog from './AlertDialog';

const taffy = require('./taffy');

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
  },
  globalFilterContainer: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid tomato',
    padding: '5px',
    margin: '50px'
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: '15px',
    padding: '10px',
    border: '1px solid lightgreen'
  },
  leftContainer: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ccc'
  },
  leftContainerItem: {
    minHeight: '40px',
    lineHeight: '40px',
    border: '1px solid #ccc',
    padding: '0 10px',
    cursor: 'pointer',
    '&:hover': {
      color: 'red'
    }
  },
  selectedCategory: {
    backgroundColor: '#ccc',
    color: 'red'
  },
  rightContainer: {
    maxHeight: 'calc(100vh - 550px)',
    overflowY: 'auto',
    width: '70%',
    margin: '0 5px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ccc'
  },
  rightContainerItem: {
    minHeight: '40px',
    lineHeight: '40px',
    // border: '1px solid #ccc',
    padding: '0 15px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  categoryItemDisabled: {
    color: 'rgba(0, 0, 0, 0.2)',
    display: 'none',
    backgroundColor: 'rgba(256, 256, 256, 0.5)'
  },
  presetListItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px'
  },
  searchField: {
    outline: 'none',
    cursor: 'pointer',
    display: 'block',
    padding: '0 15px',
    lineHeight: '40px',
    width: '100%',
    fontSize: '1rem',
    boxSizing: 'border-box',
    border: '0',
    '-webkit-box-shadow': '0px 1px 4px 0px rgba(0,0,0,0.38)',
    '-moz-box-shadow': '0px 1px 4px 0px rgba(0,0,0,0.38)',
    'box-shadow': '0px 1px 4px 0px rgba(0,0,0,0.38)'
  },
  selectAll: {
    cursor: 'pointer',
    display: 'block',
    padding: '0 15px',
    lineHeight: '40px',
    width: '100%',
    fontSize: '1rem',
    boxSizing: 'border-box',
    border: '0'
  },
  presetListItemIConContainer: {},
  presetItemLabel: {
    flex: '1'
  },
  presetDeleteIcon: {
    cursor: 'pointer'
  },
  presetEditIcon: {
    marginRight: '16px',
    cursor: 'pointer'
  },
  presetListItemCreateNewPreset: {
    padding: '1px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '16px'
  },
  presetListItemCreateNewPresetButton: {},
  bottomContainer: {
    border: '1px solid dodgerblue',
    margin: '15px',
    padding: '10px'
  },
  selectedFilterChipContainer: {
    border: '1px solid red',
    borderRadius: '3px',
    padding: '5px',
    margin: '5px',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  selectedFilterChipLabel: {
    padding: '5px',
    margin: '5px',
    display: 'inline-block'
  },
  selectedFilterChipIcon: {
    padding: '5px',
    color: 'red',
    cursor: 'pointer'
  }
});

class GlobalFilter extends Component {
  constructor(props) {
    super(props);

    this.testData = [
      {
        organization: 'UnitedHealthcare',
        product_type: 'MAPD',
        plan_type: 'HMO',
        county: 'Dewan County',
        region: 'region-1'
      },
      {
        organization: 'UnitedHealthcare',
        product_type: 'MAPD',
        plan_type: 'HMO',
        county: 'Alachua County',
        region: 'region-1'
      },
      {
        organization: 'UnitedHealthcare',
        product_type: 'SNP',
        plan_type: 'PPO',
        county: 'Charlotte County',
        region: 'region-1'
      },
      {
        organization: 'UnitedHealthcare',
        product_type: 'SNP',
        plan_type: 'PPO',
        county: 'Citrus County',
        region: 'region-2'
      },
      {
        organization: 'Aetna Medicare',
        product_type: 'MAPD',
        plan_type: 'HMO',
        county: 'Orange County',
        region: 'region-1'
      },
      {
        organization: 'Aetna Medicare',
        product_type: 'MAPD',
        plan_type: 'HMO',
        county: 'Sarasota County',
        region: 'region-1'
      },
      {
        organization: 'Aetna Medicare',
        product_type: 'SNP',
        plan_type: 'PPO',
        county: 'Osceola County',
        region: 'region-1'
      },
      {
        organization: 'Aetna Medicare',
        product_type: 'SNP',
        plan_type: 'PPO',
        county: 'Lee County',
        region: 'region-2'
      },
      {
        organization: 'Aetna Medicare',
        product_type: 'MAPD',
        plan_type: 'HMO',
        county: 'Lake County',
        region: 'region-2'
      },
      {
        organization: 'Allwell',
        product_type: 'MAPD',
        plan_type: 'HMO',
        county: 'Osceola County',
        region: 'region-1'
      },
      {
        organization: 'Allwell',
        product_type: 'MAPD',
        plan_type: 'HMO',
        county: 'Orange County',
        region: 'region-1'
      },
      {
        organization: 'Allwell',
        product_type: 'SNP',
        plan_type: 'PPO',
        county: 'Boward County',
        region: 'region-2'
      },
      {
        organization: 'Allwell',
        product_type: 'MAPD',
        plan_type: 'HMO',
        county: 'Duval County',
        region: 'region-1'
      },
      {
        organization: 'Allwell',
        product_type: 'SNP',
        plan_type: 'HMO (SNP)',
        county: 'Duval County',
        region: 'region-1'
      },
      {
        organization: 'Aetna Medicare',
        product_type: 'MAPD',
        plan_type: 'HMO',
        county: 'Duval County',
        region: 'region-1'
      },
      {
        organization: 'Aetna Medicare',
        product_type: 'SNP',
        plan_type: 'HMO (SNP)',
        county: 'Duval County',
        region: 'region-1'
      },
      {
        organization: 'Aetna Medicare',
        product_type: 'MAPD',
        plan_type: 'Local Preferred Provider Organization',
        county: 'Duval County',
        region: 'region-1'
      },
      {
        organization: 'BayCare Health Plans',
        product_type: 'MAPD',
        plan_type: 'HMO',
        county: 'Polk County',
        region: 'region-1'
      },
      {
        organization: 'Florida Blue HMO',
        product_type: 'MAPD',
        plan_type: 'HMO',
        county: 'Bay County',
        region: 'region-1'
      },
      {
        organization: 'UnitedHealthcare',
        product_type: 'MAPD',
        plan_type: 'Local Preferred Provider Organization',
        county: 'Bay County',
        region: 'region-1'
      },
      {
        organization: 'BayCare Health Plans',
        product_type: 'SNP',
        plan_type: 'PPO',
        county: 'Pasco County',
        region: 'region-1'
      },
      {
        organization: 'BayCare Health Plans',
        product_type: 'SNP',
        plan_type: 'PPO',
        county: 'Pinellas County',
        region: 'region-2'
      },
      {
        organization: 'Florida Blue',
        product_type: 'MAPD',
        plan_type: 'HMO',
        county: 'Pasco County',
        region: 'region-1'
      },
      {
        organization: 'Florida Blue',
        product_type: 'MAPD',
        plan_type: 'HMO',
        county: 'Osceola County',
        region: 'region-1'
      },
      {
        organization: 'Florida Blue',
        product_type: 'SNP',
        plan_type: 'PPO',
        county: 'Lee County',
        region: 'region-2'
      },
      {
        organization: 'Florida Blue',
        product_type: 'SNP',
        plan_type: 'PPO',
        county: 'Lake County',
        region: 'region-2'
      },
      {
        organization: 'UnitedHealthcare',
        product_type: 'MA',
        plan_type: 'PPO',
        county: 'Charlotte County',
        region: 'region-1'
      },
      {
        organization: 'Aetna Medicare',
        product_type: 'MAPD',
        plan_type: 'Local Preferred Provider Organization',
        county: 'Duval County',
        region: 'region-1'
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
      categories: ['organization', 'county', 'region', 'product_type', 'plan_type'],
      presets: [{ name: 'Preset One', id: '1' }, { name: 'Preset One', id: '2' }],
      selectedCategory: 'organization',
      unSelectedFiltersObj: {},
      selectedFilter: [],
      currentPresetName: '',
      curPresetId: '',
      formDialogMode: false,
      openAlertDialog: false,
      categoryItemSearchToken: ''
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
          isDisabled: false,
          isIncludedInSearched: true
        }));
    });

    this.setState(distinctCategories);
  };

  categoryClickHandler = category => {
    this.setState(
      {
        categoryItemSearchToken: ''
      },
      () => {
        this.handleSearch();
        this.setState({ selectedCategory: category });
      }
    );
  };

  categoryItemSelectionChangeHandler = (category, categoryValue, isItemSelected) => {
    const isSelected = !isItemSelected;
    const tmpCategory = this.state[category];
    // finding the categoryValue selected in the unique category set for checking or unchecking
    const foundCategory = tmpCategory.find(item => item.value === categoryValue);
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
        this.state.selectedFilter.push(newFilterItem); // TODO
      } else {
        this.state.selectedFilter.splice(lastFoundIndex + 1, 0, newFilterItem);
      }
    } else {
      const foundIndex = this.state.selectedFilter.findIndex(
        f => f.category === category && f.categoryVal === categoryValue
      );
      this.state.selectedFilter.splice(foundIndex, 1); //need to change as we directly changing the state
    }

    this.filterData(category);
  };

  filterData(category) {
    const whereClause = {};
    this.state.selectedFilter.forEach(sf => {
      if (whereClause.hasOwnProperty(sf.category) === true) {
        whereClause[sf.category] = [...whereClause[sf.category], sf.categoryVal];
      } else {
        whereClause[sf.category] = [sf.categoryVal];
      }
    });
    let tmpFilteredData = JSON.parse(JSON.stringify(this.state.data));
    tmpFilteredData = taffy
      .taffy(tmpFilteredData)(whereClause)
      .get();
    const distinctAvailableCategories = {};
    this.state.categories.forEach(categoryField => {
      distinctAvailableCategories[categoryField] = {};
    });
    tmpFilteredData.forEach(item => {
      this.state.categories.forEach(categoryField => {
        distinctAvailableCategories[categoryField][item[categoryField]] = true;
      });
    });
    let unSelectedFiltersObj = {};
    const updatedCategories = {};
    if (this.state.selectedFilter.length > 0) {
      this.state.categories.forEach(categoryField => {
        updatedCategories[categoryField] = this.state[categoryField];
        if (category !== categoryField) {
          for (let ci of updatedCategories[categoryField]) {
            if (distinctAvailableCategories[categoryField].hasOwnProperty(ci.value)) {
              ci.isDisabled = false;
            } else {
              ci.isDisabled = true;
              unSelectedFiltersObj[`${categoryField}###${ci.value}`] = true;
            }
          }
        }
      });
      this.setState({ ...updatedCategories, unSelectedFiltersObj });
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
  }

  searchTextChangeHandler = event => {
    event.persist();
    this.setState(
      {
        categoryItemSearchToken: event.target.value
      },
      () => {
        this.handleSearch();
      }
    );
  };

  handleSearch = () => {
    let categoryItems = this.state[this.state.selectedCategory];
    let searchToken = this.state.categoryItemSearchToken;
    if (searchToken) {
      searchToken = searchToken.toLowerCase();
      categoryItems.forEach(item => {
        item['isIncludedInSearched'] = item.value.toLowerCase().includes(searchToken);
      });
    } else {
      categoryItems.forEach(item => {
        item['isIncludedInSearched'] = true;
      });
    }
    this.setState({
      [this.state.selectedCategory]: categoryItems
    });
  };

  presetsClickHandler = () => {
    this.setState(
      {
        categoryItemSearchToken: ''
      },
      () => {
        this.handleSearch();
        this.setState({ selectedCategory: 'presets' });
      }
    );
  };

  presetEditClickHandler = preset => {
    console.log('TCL: GlobalFilter -> presetEditClickHandler -> preset', preset);

    this.setState({
      formDialogMode: 'openEdit',
      currentPresetName: preset.name,
      curPresetId: preset.id
    });
  };

  updatePresettSaveBtnClickHandler = (updatedPresetName, id, status) => {
    if (status === true) {
      const presets = this.state.presets;
      const preset = presets.find(item => item.id === id);
      if (preset) {
        preset.name = updatedPresetName;
        this.setState({ presets });
      }
    }

    this.setState({ formDialogMode: '' });
  };

  presetDeleteClickHandler = preset => {
    console.log('TCL: GlobalFilter -> presetDeleteClickHandler -> preset', preset);

    this.setState({
      openAlertDialog: true,
      currentPresetName: preset.name,
      curPresetId: preset.id
    });
  };

  deletePresetHandler = (status, a) => {
    console.log('delete preset handler');
    if (status === 'ok') {
      const presets = this.state.presets;
      const presetIndex = presets.findIndex(item => item.id === this.state.curPresetId);
      if (presetIndex !== -1) {
        presets.splice(presetIndex, 1);
        this.setState({ presets });
      }
    }

    this.setState({ openAlertDialog: false });
  };

  createPresetSaveBtnClickHandler = presetName => {
    const presets = JSON.parse(
      JSON.stringify([
        ...this.state.presets,
        {
          id: new Date().getTime(),
          name: presetName,
          filters: this.state.selectedFilter
        }
      ])
    );
    this.setState({ presets });
  };

  clearFilterClickHandler = () => {
    const uniqueCategoriesItems = {};
    this.state.categories.forEach(categoryField => {
      uniqueCategoriesItems[categoryField] = this.state[categoryField].map(ci => ({
        ...ci,
        isSelected: false,
        isDisabled: false
      }));
    });
    this.setState({
      ...uniqueCategoriesItems,
      selectedFilter: [],
      unSelectedFiltersObj: {}
    });
  };

  presetItemClickHandler = (preset, event) => {
    this.setState({ selectedFilter: preset.filters }, () => {
      this.filterData(preset.filters[0].category);
    });
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
          <FontAwesomeIcon icon={faTimes} style={{ margin: 3 }} aria-hidden="true" />
        </div>

        <Drawer
          className={classes.FilterDrawer}
          anchor="right"
          open={globalFilterOpen}
          PaperProps={{
            style: {
              width: drawerWidth,
              padding: '15px',
              overflow: 'auto'
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
            {this.props.enableMemberSearch ? <div> member search</div> : ''}
            {this.props.enableDateSearch ? <div> Date search</div> : ''}
            {this.props.enableMonthRangeSearch ? <div> Month range search</div> : ''}

            <div className={classes.globalFilterContainer}>
              <div className={classes.topContainer}>
                <div className={classes.leftContainer}>
                  {this.state.categories.map(category => (
                    <div
                      key={category}
                      className={
                        classes.leftContainerItem +
                        ' ' +
                        (this.state.selectedCategory === category ? classes.selectedCategory : '')
                      }
                      onClick={this.categoryClickHandler.bind(this, category)}
                    >
                      {category}
                    </div>
                  ))}
                  <Divider />
                  <div
                    className={
                      classes.leftContainerItem +
                      ' ' +
                      (this.state.selectedCategory === 'presets' ? classes.selectedCategory : '')
                    }
                    onClick={this.presetsClickHandler}
                  >
                    Presets
                  </div>
                </div>
                <div className={classes.rightContainer}>
                  {this.state.selectedCategory === 'presets' ? (
                    <List>
                      {this.state.presets.map(preset => {
                        return (
                          <ListItem button key={preset.id} className={classes.presetListItem}>
                            <span
                              className={classes.presetItemLabel}
                              onClick={this.presetItemClickHandler.bind(this, preset)}
                            >
                              {preset.name}
                            </span>
                            <div className={classes.presetListItemIConContainer}>
                              <FontAwesomeIcon
                                icon={faEdit}
                                aria-hidden="true"
                                className={classes.presetEditIcon}
                                onClick={this.presetEditClickHandler.bind(this, preset)}
                              />
                              <FontAwesomeIcon
                                icon={faTrashAlt}
                                aria-hidden="true"
                                className={classes.presetDeleteIcon}
                                onClick={this.presetDeleteClickHandler.bind(this, preset)}
                              />
                            </div>
                          </ListItem>
                        );
                      })}
                      <div className={classes.presetListItemCreateNewPreset}>
                        <FormDialog
                          id={this.state.curPresetId}
                          mode={this.state.formDialogMode}
                          presetName={this.state.currentPresetName}
                          disableCreatePresetBtn={
                            this.state.selectedFilter.length > 0 ? false : true
                          }
                          createPresetHandler={presetName =>
                            this.createPresetSaveBtnClickHandler(presetName)
                          }
                          updatePresetHandler={(updatedPresetName, id, status) => {
                            this.updatePresettSaveBtnClickHandler(updatedPresetName, id, status);
                          }}
                        />
                        <AlertDialog
                          title="Delete Preset"
                          description={`Are you sure you want to delete preset ${
                            this.state.currentPresetName
                          }`}
                          open={this.state.openAlertDialog}
                          deletePreset={status => this.deletePresetHandler(status)}
                        />
                      </div>
                    </List>
                  ) : (
                    <div>
                      <input
                        type="text"
                        placeholder="Search"
                        value={this.state.categoryItemSearchToken}
                        className={classes.searchField}
                        onChange={this.searchTextChangeHandler}
                      />
                      <div className={classes.selectAll}>Select All</div>
                      {this.state[this.state.selectedCategory].map(categoryItem => {
                        return (
                          <div
                            key={categoryItem.value}
                            className={
                              classes.rightContainerItem +
                              ' ' +
                              (categoryItem.isDisabled || !categoryItem.isIncludedInSearched
                                ? classes.categoryItemDisabled
                                : ' ')
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
                              ''
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className={classes.bottomContainer}>
                {this.state.selectedFilter.map(sf => {
                  return !this.state.unSelectedFiltersObj[`${sf.category}###${sf.categoryVal}`] ? (
                    <div
                      className={classes.selectedFilterChipContainer}
                      key={sf.categoryVal + sf.category}
                    >
                      <div className={classes.selectedFilterChipLabel}>{sf.categoryVal}</div>
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
                    ''
                  );
                })}
              </div>
            </div>

            <div style={{ justifyContent: 'flex-end', display: 'flex' }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: 'grey',
                  color: 'white',
                  marginRight: '16px'
                }}
                className={classes.button}
                onClick={this.clearFilterClickHandler}
              >
                Clear
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: '#009fae', color: 'white' }}
                className={classes.button}
                onClick={this.applyFilterClickHandler}
              >
                Apply
              </Button>
            </div>
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

const GlobalFilterWrapped = withStyles(styles, { withTheme: true })(GlobalFilter);

export default GlobalFilterWrapped;
