const checkStatus = (status) => {
  switch (status) {
    case 'active':
      return 'green';
    case 'open':
      return 'green';
    case 'draft':
      return 'geekblue';
    case 'closed':
      return 'volcano';
    case 'archived':
      return 'red';
    default:
      return 'green';
  }
};

export default checkStatus;
