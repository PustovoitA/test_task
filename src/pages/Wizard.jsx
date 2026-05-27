import { useState } from "react";
import {
    Form,
    Input,
    InputNumber,
    Select,
    Button,
    Descriptions,
} from "antd";

import styles from "./Wizard.module.css";

function Wizard () {
    const [form] = Form.useForm();
    const [submittedData, setSubmittedData] = useState(()=>{
        const savedData = localStorage.getItem("wizardData");
        return savedData
        ? JSON.parse(savedData)
        : null;
    });
    const onFinish = (values) => {
        setSubmittedData(values);

        localStorage.setItem("wizardData", JSON.stringify(values))
    }
    const reset = () => {
        form.resetFields();
        setSubmittedData(null);
        localStorage.removeItem("wizardData");
    };
    const [isValid, setIsValid] = useState(false);

    if(!submittedData){
        return<div className={styles.container}>
             <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFieldsChange={() => {
                const hasErrors = form.getFieldsError().some(({ errors }) =>errors.length);
                const allTouched = form.isFieldsTouched(true);
                setIsValid(allTouched &&!hasErrors);
            }}
            >
                <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Name is required",
                    },
                    {
                        min: 2,
                        message: "Name must contain at least 2 characters",
                    },
                ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Email is required",
                    },
                    {
                        type: "email",
                        message: "Invalid email",
                    },
                ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                label="Country"
                name="country"
                rules={[
                    {
                        required: true,
                        message: "Select a country",
                    },
                ]}
                >
                    <Select
                        options={[
                            {
                                value: "Ukraine",
                                label: "Ukraine",
                            },
                            {
                                value: "Switzerland",
                                label: "Switzerland",
                            },
                            {
                                value: "Germany",
                                label: "Germany",
                            },
                            {
                                value: "France",
                                label: "France",
                            },
                            {
                                value: "Portugal",
                                label: "Portugal",
                            },
                        ]}
                    />
                </Form.Item>

                <Form.Item
                label="Age"
                name="age"
                rules={[
                    {
                        required: true,
                        message: "Age is required",
                    },
                    {
                        type: "number",
                        min: 18,
                        max: 100,
                        message:
                            "Age must be between 18 and 100",
                    },
                ]}
                >
                    <InputNumber min={18} max={100} style={{ width: "100%" }}/>
                </Form.Item>

                <Button type="primary" htmlType="submit" disabled={!isValid}>Submit</Button>
            </Form>
        </div>
    }else{
        return<>
            <Descriptions
            title="Submitted Data"
            bordered
            >
                <Descriptions.Item label="Name">
                    {submittedData.name}
                </Descriptions.Item>

                <Descriptions.Item label="Email">
                    {submittedData.email}
                </Descriptions.Item>

                <Descriptions.Item label="Country">
                    {submittedData.country}
                </Descriptions.Item>

                <Descriptions.Item label="Age">
                    {submittedData.age}
                </Descriptions.Item>
            </Descriptions>

            <Button type="primary" onClick={reset} style={{ marginTop: 16 }}>Start Again</Button>
        </>
    }
}

export default Wizard