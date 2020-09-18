const checkStatus = (state) => {
  switch (state) {
    case 'active':
      return 'green';
    case 'open':
      return 'green';
    case 'draft':
      return 'geekblue';
    case 'closed':
      return 'volcano';
    case 'published':
      return 'cyan';
    case 'archived':
      return 'red';
    case 'onReview':
      return 'cyan';
    default:
      return 'green';
  }
};

export default checkStatus;
