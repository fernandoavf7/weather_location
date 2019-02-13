import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from './../actions/index';
import LocationList from './../components/location_list';

class LocationListContainer extends Component {
    handleSelectedLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <div>
                <LocationList
                    cities={this.props.cities}
                    onSelectedLocation={this.handleSelectedLocation} />
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
}

const mapDispatchToProps = dispatch => (
    {
      setCity: value => dispatch(setCity(value))
    }
  );

export default connect(null, mapDispatchToProps)(LocationListContainer);