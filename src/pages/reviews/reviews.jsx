import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PageHeader, Button } from 'antd';
import mapData from './mapData';
import { getReviews } from '../../store/actions/reviews';
import ReviewsTable from '../../components/reviews-table';
import GradesTable from '../../components/grades-table';
import Feedback from '../../components/review-feedback';

class Reviews extends React.Component {
  state = {
    isReview: false,
    nameTask: '',
    review: {},
    dataGrades: [],
  };

  componentDidMount() {
    const { getReviews } = this.props;
    getReviews();
  }

  showReview = (record) => {
    const { history } = this.props;
    history.push(`${record.taskTitle.trim()}`);

    const dataGrades = this.getDataGrades(record.key);
    const review = this.getReview(record.key);
    this.setState({
      isReview: true,
      nameTask: record.taskTitle,
      dataGrades: [...dataGrades],
      review,
    });
  };

  hideReview = () => {
    const { history } = this.props;
    history.go(-1);
    this.setState({ isReview: false });
  };

  getDataGrades = (id) => {
    const { reviewsData } = this.props;
    const gradesData = [];
    reviewsData.forEach((item) => {
      if (item.id === id) {
        gradesData.push(item.grade.items);
      }
    });
    return gradesData;
  };

  getReview = (id) => {
    const { reviewsData } = this.props;
    let review;
    reviewsData.forEach((item) => {
      if (item.id === id) {
        review = item;
      }
    });
    return review;
  };

  render() {
    const { reviewsData } = this.props;
    const reviews = [];
    reviewsData.forEach((review) => reviews.push(mapData(review)));

    const { isReview, nameTask, dataGrades, review } = this.state;

    if (isReview) {
      return (
        <div className="wrapper">
          <PageHeader className="site-page-header" title={`${nameTask}`} />
          <Button onClick={() => this.hideReview()} type="primary">
            Back
          </Button>
          <GradesTable tableData={dataGrades} />
          <Feedback review={review} />
        </div>
      );
    }
    return (
      <div className="wrapper">
        <PageHeader className="site-page-header" title="Reviews" />
        <ReviewsTable tableData={reviews} handleClick={this.showReview} />
      </div>
    );
  }
}

const mapStateToProps = ({ reviewsData, login }) => {
  return { reviewsData, login };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviews: () => dispatch(getReviews()),
  };
};

Reviews.propTypes = {
  reviewsData: PropTypes.arrayOf(PropTypes.object),
  getReviews: PropTypes.func,
  history: PropTypes.instanceOf(Object).isRequired,
};

Reviews.defaultProps = {
  reviewsData: PropTypes.array,
  getReviews: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
