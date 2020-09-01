import React from 'react';
import { PageHeader } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import mapData from './mapData';
import { getReviewsList } from '../../store/actions';
import ReviewsTable from '../../components/reviewsTable/reviewsTable';

class ReviewsListPage extends React.Component {
  componentDidMount() {
    const { getReviewsList } = this.props;
    getReviewsList();
  }

  render() {
    const { reviewsList } = this.props;
    const tableData = [];
    reviewsList.forEach((review) => tableData.push(mapData(review)));

    return (
      <div className="wrapper">
        <PageHeader className="site-page-header" title="Reviews" />
        <ReviewsTable tableData={tableData} />
      </div>
    );
  }
}

const mapStateToProps = ({ reviewsList }) => {
  return { reviewsList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviewsList: () => dispatch(getReviewsList()),
  };
};

ReviewsListPage.propTypes = {
  reviewsList: PropTypes.arrayOf(PropTypes.object),
  getReviewsList: PropTypes.func,
};

ReviewsListPage.defaultProps = {
  reviewsList: PropTypes.array,
  getReviewsList: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsListPage);
