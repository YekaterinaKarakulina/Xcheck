import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PageHeader, Button } from 'antd';
import history from '../../history/history';

import mapData from './mapData';
import { getReviewsList } from '../../store/actions';
import ReviewsTable from '../../components/reviewsTable';
import GradesTable from '../../components/gradesTable';

class ReviewsListPage extends React.Component {
  state = {
    isReview: false,
    nameTask: '',
    dataGrades: [],
  };

  componentDidMount() {
    const { getReviewsList } = this.props;
    getReviewsList();
  }

  showReview = (record) => {
    history.push(`/reviews/${record.task}`);
    const data = this.getDataReview(record.key);
    this.setState({
      isReview: true,
      nameTask: record.task,
      dataGrades: [...data],
    });
  };

  hideReview = () => {
    history.push(`/reviews`);
    this.setState({ isReview: false });
  };

  getDataReview = (id) => {
    const { reviewsList } = this.props;
    const gradesData = [];
    reviewsList.forEach((item) => {
      if (item.id === id) {
        gradesData.push(item.grade.items);
      }
    });
    return gradesData;
  };

  render() {
    const { reviewsList } = this.props;
    const reviewsData = [];
    reviewsList.forEach((review) => reviewsData.push(mapData(review)));

    const { isReview } = this.state;
    const { nameTask } = this.state;
    const { dataGrades } = this.state;

    if (isReview) {
      return (
        <div className="wrapper">
          <PageHeader className="site-page-header" title={`${nameTask}`} />
          <Button
            onClick={() => this.hideReview()}
            type="primary"
            size="small"
            style={{ width: 90 }}
          >
            Back
          </Button>
          <GradesTable tableData={dataGrades} />
        </div>
      );
    }
    return (
      <div className="wrapper">
        <PageHeader className="site-page-header" title="Reviews" />
        <ReviewsTable tableData={reviewsData} handleClick={this.showReview} />
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
