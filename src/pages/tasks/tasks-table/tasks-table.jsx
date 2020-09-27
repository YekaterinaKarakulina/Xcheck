import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getTasksTable } from '../../../store/actions/task';
import TasksTableList from '../../../components/tasks/tasks-table/tasks-table-list';
import mapDataTable from '../../../components/tasks/tasks-table/map-data-table';

class TasksTable extends React.Component {
  componentDidMount() {
    const { getTasksTable } = this.props;
    getTasksTable();
  }

  render() {
    const { tasksTableData } = this.props;
    const tableData = [];
    tasksTableData.forEach((session) => {
      tableData.push(mapDataTable(session));
    });

    return (
      <div className="wrapper">
        <PageHeader className="site-page-header" title="Tasks" />
        <Button
          style={{ margin: '1rem' }}
          type="primary"
          icon={<PlusOutlined style={{ marginRight: '1rem' }} />}
        >
          <Link style={{ color: 'white' }} to="/tasks/task-form">
            Add new task
          </Link>
        </Button>
        <TasksTableList tableData={tableData} />
      </div>
    );
  }
}

TasksTable.propTypes = {
  tasksTableData: PropTypes.instanceOf(Array).isRequired,
  getTasksTable: PropTypes.func.isRequired,
};

const mapStateToProps = ({ tasksTableData }) => {
  return { tasksTableData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTasksTable: () => dispatch(getTasksTable()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksTable);
