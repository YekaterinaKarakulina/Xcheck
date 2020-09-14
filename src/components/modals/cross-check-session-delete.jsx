import React from 'react';
import { Modal, Button } from 'antd';
import { FrownTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';

const CrossCheckSessionModal = (props) => {
  const { isModalVisible, closeModal } = props;

  return (
    <Modal
      visible={isModalVisible}
      title="Unable to delete crossCheck session"
      onCancel={closeModal}
      footer={[
        <Button key="submit" type="primary" onClick={closeModal}>
          Ok
        </Button>,
      ]}
    >
      <>
        <FrownTwoTone twoToneColor="#ff4d4f" style={{ marginRight: '1rem' }} />
        <span>This crossCheck session has linked review request!!!</span>
      </>
    </Modal>
  );
};

CrossCheckSessionModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CrossCheckSessionModal;
