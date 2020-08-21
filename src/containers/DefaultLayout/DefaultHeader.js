import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppAsideToggler, AppSidebarToggler} from '@coreui/react';
import { Nav, NavItem} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};
class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> * #side bar toggle for the mobile version/}
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/#" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/#" className="nav-link">System Monitoring </Link>
          </NavItem>
        </Nav>
        {/* For the mobile version */}
        {/* <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment> 
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;
export default DefaultHeader;
