/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Table, Tag, Space } from 'antd';
import { EyeTwoTone, EditTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { getCrossCheckSessionById } from '../../store/actions/crossCheckSession';

class CrossCheckSessionsTable extends React.Component {
  componentDidMount() {}

  render() {
    const columns = [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
      },
      {
        title: 'State',
        key: 'state',
        dataIndex: 'state',
        render: (state) => {
          let color = 'green';
          switch (state) {
            case 'active':
              color = 'green';
              break;
            case 'draft':
              color = 'geekblue';
              break;
            case 'closed':
              color = 'volcano';
              break;
            default:
              color = 'green';
          }
          return <Tag color={color}>{state.toUpperCase()}</Tag>;
        },
      },
      {
        title: 'Task',
        dataIndex: 'task',
        key: 'task',
        render: (task) => <a>{task}</a>,
      },
      {
        title: 'Coefficient',
        dataIndex: 'coefficient',
        key: 'coefficient',
      },
      {
        title: 'Start date',
        dataIndex: 'startDate',
        key: 'startDate',
      },
      {
        title: 'End date',
        dataIndex: 'endDate',
        key: 'endDate',
      },
      {
        title: 'Action',
        key: 'action',
        render: (action, row) => (
          <Space size="middle" data-id={row.title}>
            <EyeTwoTone twoToneColor="#9254de" />
            <EditTwoTone
              twoToneColor="#ffa940"
              onClick={() => {
                console.log('---------- edit -------');
                console.log(row.title);
                const { getCrossCheckSessionById } = this.props;
                getCrossCheckSessionById(row.title);
              }}
            />
            <CloseCircleTwoTone twoToneColor="#ff4d4f" />
          </Space>
        ),
      },
    ];

    const { tableData } = this.props;

    return <Table columns={columns} dataSource={tableData} />;
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCrossCheckSessionById: (id) => dispatch(getCrossCheckSessionById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrossCheckSessionsTable);
