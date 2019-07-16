import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createMuiTheme, Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component, Fragment } from 'react';

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
        width: '70%',
        margin: '0 5px',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ccc'
    },
    rightContainerItem: {
        minHeight: '40px',
        lineHeight: '40px',
        border: '1px solid #ccc',
        padding: '0 15px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    categoryItemDisabled: {
        color: 'rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgba(256, 256, 256, 0.5)'
    },
    bottomContainer: {
        border: '1px solid dodgerblue',
        margin: '15px',
        padding: '10px'
    },
    selectedFilterChip: {
        border: '1px solid red',
        borderRadius: '3px',
        padding: '5px',
        margin: '5px',
        display: 'inline-block'
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
                organization: 'BayCare Health Plans',
                product_type: 'MAPD',
                plan_type: 'HMO',
                county: 'Polk County',
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
            selectedCategory: 'organization',
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
            organizationSet.add(d['organization']);
            planTypeSet.add(d['plan_type']);
            productTypeSet.add(d['product_type']);
            regionSet.add(d['region']);
            countySet.add(d['county']);
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
        // finding the categoryItem selected in the unique category set for checking or unchecking
        const foundCategory = tmpCategory.find(item => item.value === categoryItem.value);
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
                categoryVal: categoryItem.value
            };
            if (lastFoundIndex === -1) {
                this.state.selectedFilter.push(newFilterItem);
            } else {
                this.state.selectedFilter.splice(lastFoundIndex + 1, 0, newFilterItem);
            }
        } else {
            const foundIndex = this.state.selectedFilter.findIndex(
                f => f.category === category && f.categoryVal === categoryItem.value
            );
            this.state.selectedFilter.splice(foundIndex, 1); //need to change as we directly changing the state
        }

        let tmpFilteredData = JSON.parse(JSON.stringify(this.state.data));
        const groupedSelectedFilter = [];
        this.state.selectedFilter.forEach(sf => {
            const found = groupedSelectedFilter.find(item => item.category === sf.category);
            if (found) {
                found.categoryValues[sf.categoryVal] = 1;
            } else {
                groupedSelectedFilter.push({
                    category: sf.category,
                    categoryValues: { [sf.categoryVal]: 1 }
                });
            }
        });

        if (this.state.selectedFilter.length > 0) {
            groupedSelectedFilter.forEach((gsf, i) => {
                tmpFilteredData = tmpFilteredData.filter(d =>
                    gsf.categoryValues.hasOwnProperty(d[gsf.category])
                );
            });
        }

        let availableOrganization = {};
        let availablePlanType = {};
        let availableProductType = {};
        let availableRegion = {};
        let availableCounty = {};

        for (let d of tmpFilteredData) {
            availableOrganization[d['organization']] = true;
            availablePlanType[d['plan_type']] = true;
            availableProductType[d['product_type']] = true;
            availableRegion[d['region']] = true;
            availableCounty[d['county']] = true;
        }

        if (this.state.selectedFilter.length > 0) {
            const rootFilter = this.state.selectedFilter[0].category;

            const organization = this.state.organization;
            let isRootFilter = rootFilter === 'organization';
            for (let o of organization) {
                if (isRootFilter || availableOrganization.hasOwnProperty(o.value)) {
                    o.isDisabled = false;
                } else {
                    o.isDisabled = true;
                }
            }

            const county = this.state.county;
            isRootFilter = rootFilter === 'county';
            for (let c of county) {
                if (isRootFilter || availableCounty.hasOwnProperty(c.value)) {
                    c.isDisabled = false;
                } else {
                    c.isDisabled = true;
                }
            }

            const region = this.state.region;
            for (let r of region) {
                if (isRootFilter || availableRegion.hasOwnProperty(r.value)) {
                    r.isDisabled = false;
                } else {
                    r.isDisabled = true;
                }
            }

            const product_type = this.state.product_type;
            for (let prodT of product_type) {
                if (isRootFilter || availableProductType.hasOwnProperty(prodT.value)) {
                    prodT.isDisabled = false;
                } else {
                    prodT.isDisabled = true;
                }
            }

            const plan_type = this.state.plan_type;
            for (let planT of product_type) {
                if (isRootFilter || availablePlanType.hasOwnProperty(planT.value)) {
                    planT.isDisabled = false;
                } else {
                    planT.isDisabled = true;
                }
            }

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
                                                (this.state.selectedCategory === category
                                                    ? classes.selectedCategory
                                                    : '')
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
                                                    ' ' +
                                                    (categoryItem.isDisabled
                                                        ? classes.categoryItemDisabled
                                                        : ' ')
                                                }
                                                onClick={this.categoryItemSelectionChangeHandler.bind(
                                                    this,
                                                    this.state.selectedCategory,
                                                    categoryItem
                                                )}
                                            >
                                                <span>{categoryItem.value}</span>
                                                {categoryItem.isSelected ? (
                                                    <FontAwesomeIcon
                                                        icon={faCheck}
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    ''
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

const GlobalFilterWrapped = withStyles(styles, { withTheme: true })(GlobalFilter);

export default GlobalFilterWrapped;
