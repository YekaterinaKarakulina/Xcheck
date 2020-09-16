import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { updateReview } from '../../store/actions/reviews';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} style={{ width: '70%' }} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

class Feedback extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
    user: {},
  };

  componentDidMount = () => {
    const { review, login } = this.props;
    const { user } = login;
    this.setState({
      comments: review.comments,
      user,
    });
  };

  updateComments = () => {
    const { review, updateReview } = this.props;
    const { comments } = this.state;
    review.comments = comments;
    updateReview(review);
  };

  handleSubmit = () => {
    const { value } = this.state;
    if (!value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      const { value, comments, user } = this.state;
      const avatarUrl = user.avatar_url;
      const name = user.login;

      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: name,
            avatar: avatarUrl,
            content: value,
          },
          ...comments,
        ],
      });
    }, 0);

    setTimeout(this.updateComments, 100);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value, user } = this.state;
    const avatarUrl = user.avatar_url;

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={avatarUrl ? <Avatar src={avatarUrl} /> : <Avatar icon={<UserOutlined />} />}
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

Feedback.propTypes = {
  updateReview: PropTypes.func.isRequired,
  review: PropTypes.objectOf(PropTypes.any).isRequired,
  login: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ login }) => {
  return { login };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateReview: (review) => dispatch(updateReview(review)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
