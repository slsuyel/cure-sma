/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Form, Input, Button, Checkbox, Select } from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';

import logo from '../assets/Images/logocuresma.png';
import { useState } from 'react';
interface DonateModalProps {
  visible: boolean;
  onClose: () => void;
}

const DonateModal = ({ visible, onClose }: DonateModalProps) => {
  const [form] = Form.useForm();
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const onChange = (value: any) => {
    setRecaptchaValue(value);
  };

  const handleOk = () => {
    if (!recaptchaValue) {
      return;
    }
    form
      .validateFields()
      .then(values => {
        console.log('Form values:', values);
        onClose();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal open={visible} onOk={handleOk} onCancel={onClose} footer={null}>
      <div className="text-center">
        <img src={logo} alt="" width={100} />
        <h3>Donation Form</h3>
        <p>Thanks for donation to our cause</p>
      </div>
      <Form
        form={form}
        layout="vertical"
        name="donateForm"
        initialValues={{ currency: 'USD' }}
      >
        <div className="row mx-auto">
          <Form.Item
            className="col-md-6 my-1"
            name="firstName"
            label="First Name"
            rules={[
              { required: true, message: 'Please input your first name!' },
            ]}
          >
            <Input style={{ height: 40 }} />
          </Form.Item>
          <Form.Item
            className="col-md-6 my-1"
            name="lastName"
            label="Last Name"
            rules={[
              { required: true, message: 'Please input your last name!' },
            ]}
          >
            <Input style={{ height: 40 }} />
          </Form.Item>

          <Form.Item
            className="col-md-6 my-1"
            name="phoneNumber"
            label="Phone Number"
            rules={[
              { required: true, message: 'Please input your phone number!' },
            ]}
          >
            <Input style={{ height: 40 }} />
          </Form.Item>
          <Form.Item
            className="col-md-6 my-1"
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: 'Please input your email address!' },
            ]}
          >
            <Input style={{ height: 40 }} />
          </Form.Item>
          <Form.Item className="col-md-6 my-1" name="currency" label="Currency">
            <Select style={{ height: 40 }}>
              <Select.Option value="USD">$ USD</Select.Option>
              <Select.Option value="BDT">৳ BDT</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            className="col-md-6 my-1"
            name="amount"
            label="Donation Amount"
            rules={[
              { required: true, message: 'Please input donation amount!' },
            ]}
          >
            <Input style={{ height: 40 }} type="number" />
          </Form.Item>
          <Form.Item name="address" label="Address" className="my-1">
            <Input style={{ height: 40 }} />
          </Form.Item>
          <Form.Item
            name="donatePurpose"
            label="Donate Purpose"
            className="my-1"
          >
            <Input style={{ height: 40 }} />
          </Form.Item>
          <Form.Item
            className="my-1"
            name="agreement"
            valuePropName="checked"
            rules={[{ required: true, message: 'Please agree to proceed!' }]}
          >
            <Checkbox required>
              I agree to make a donation, and proceed to pay.
            </Checkbox>
          </Form.Item>
          <Form.Item className="d-flex justify-content-center mb-2 my-2">
            <ReCAPTCHA
              sitekey="6LfWVwoqAAAAAPhNbTuMMgNToxKK7-nd4VszWLEA"
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item className="d-flex justify-content-end mb-2 my-2">
            <Button
              disabled={!recaptchaValue}
              type="primary"
              htmlType="submit"
              onClick={handleOk}
            >
              Proceed
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default DonateModal;
