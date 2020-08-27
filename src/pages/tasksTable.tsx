import React from 'react';
import { connect } from 'react-redux';
import { Button, PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getTasksTable } from '../store/actions/index';
import TasksTableList from '../components/app/tasksTableList';
import mapDataTable from '../components/app/tasksTable/mapDataTable';

interface Props {
  props?: any;
  getTasksTable(): Object;
  tasksTable: any;
}

class TasksTable extends React.Component<Props, {}> {
  componentDidMount() {
    const { getTasksTable } = this.props;
    getTasksTable();
  }

  render() {
    const { tasksTable } = this.props;
    const tableData = [];
    tasksTable.forEach((session) => {
      tableData.push(mapDataTable(session));
    });

    return (
      <div className="wrapper">
        <PageHeader className="site-page-header" title="Tasks table" />
        <Button
          style={{ margin: '1rem' }}
          shape="round"
          type="primary"
          icon={<PlusOutlined />}
          size="small"
        >
          Add new task
        </Button>
        <TasksTableList tableData={tableData} />
      </div>
    );
  }
}

const mapStateToProps = ({ tasksTable }) => {
  return { tasksTable };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTasksTable: () => dispatch(getTasksTable()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksTable);
