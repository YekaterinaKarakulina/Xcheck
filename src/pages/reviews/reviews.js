import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PageHeader, Button } from 'antd';
import history from '../../history/history';

import mapData from './mapData';
import getReviews from '../../store/actions/reviews';
import ReviewsTable from '../../components/reviews-table';
import GradesTable from '../../components/grades-table';

class Reviews extends React.Component {
  state = {
    isReview: false,
    nameTask: '',
    dataGrades: [],
  };

  componentDidMount() {
    const { getReviews } = this.props;
    getReviews();
  }

  showReview = (record) => {
    history.push(`/reviews/${record.task.trim()}`);
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
    const { reviews } = this.props;
    const gradesData = [];
    reviews.forEach((item) => {
      if (item.id === id) {
        gradesData.push(item.grade.items);
      }
    });
    return gradesData;
  };

  render() {
    const { reviews } = this.props;
    const reviewsData = [];
    reviews.forEach((review) => reviewsData.push(mapData(review)));

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

const mapStateToProps = ({ reviews }) => {
  return { reviews };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviews: () => dispatch(getReviews()),
  };
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
  getReviews: PropTypes.func,
};

Reviews.defaultProps = {
  reviews: PropTypes.array,
  getReviews: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
