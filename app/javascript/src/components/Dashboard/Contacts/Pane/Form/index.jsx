import React from "react";

import { Formik, Form as NeetoUIForm } from "formik";
import { Check } from "neetoicons";
import { Toastr, Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";
import { v4 as uuid } from "uuid";

import { ROLES, VALIDATION_SCHEMA } from "./constants";

const Form = ({ initialValues, setContacts, onClose }) => {
  const handleSubmit = values => {
    const newContact = { ...values, id: uuid(), role: values.role.value };
    setContacts(contacts => [...contacts, newContact]);
    Toastr.success("Contact added successfully");
    onClose();
  };

  const { Body, Footer } = Pane;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <NeetoUIForm>
          <Body>
            <div className="w-full space-y-6">
              <div className="flex space-x-2">
                <Input
                  required
                  label="First Name"
                  name="firstName"
                  placeholder="Enter first name"
                />
                <Input
                  required
                  label="Last Name"
                  name="lastName"
                  placeholder="Enter last name"
                />
              </div>
              <Input
                required
                label="Email Address"
                name="email"
                placeholder="Enter your email Address"
              />
              <Select
                required
                label="Role"
                name="role"
                options={ROLES}
                placeholder="Select Role"
              />
            </div>
          </Body>
          <Footer className="space-x-2">
            <Button
              disabled={isSubmitting}
              icon={Check}
              label="Save Changes"
              loading={isSubmitting}
              type="submit"
            />
            <Button
              label="Cancel"
              style="secondary"
              type="reset"
              onClick={onClose}
            />
          </Footer>
        </NeetoUIForm>
      )}
    </Formik>
  );
};

export default Form;
