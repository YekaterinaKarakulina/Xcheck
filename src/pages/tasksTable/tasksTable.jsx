import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, PageHeader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getTasksTable } from '../../store/actions/index';
import TasksTableList from '../../components/tasksTable/tasksTableList';
import mapDataTable from '../../components/tasksTable/mapDataTable';

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
        <PageHeader className="site-page-header" title="Tasks table" />
        <Button style={{ margin: '1rem' }} type="primary" icon={<PlusOutlined />} size="small">
          Add new task
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
