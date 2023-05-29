import React from "react";

import dayjs from "dayjs";
import { Formik, Form as NeetoUIForm } from "formik";
import { Check } from "neetoicons";
import { Toastr, Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";
import { mergeLeft } from "ramda";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";

import { ROLES, VALIDATION_SCHEMA } from "./constants";

const Form = ({ initialValues, setContacts, onClose }) => {
  const { t } = useTranslation();

  const { Body, Footer } = Pane;

  const handleSubmit = values => {
    const newContact = mergeLeft(
      {
        id: uuid(),
        role: values.role.value,
        createdAt: dayjs(new Date()).format("MMM D, YYYY"),
      },
      values
    );
    setContacts(contacts => [newContact, ...contacts]);
    Toastr.success(t("contacts.add.successMessage"));
    onClose();
  };

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
                  label={t("common.firstName")}
                  name="firstName"
                  placeholder={t("placeholder.firstName")}
                />
                <Input
                  required
                  label={t("common.lastName")}
                  name="lastName"
                  placeholder={t("placeholder.lastName")}
                />
              </div>
              <Input
                required
                label={t("common.emailAddress")}
                name="email"
                placeholder={t("placeholder.email")}
              />
              <Select
                required
                label={t("common.role")}
                name="role"
                options={ROLES}
                placeholder={t("placeholder.role")}
              />
            </div>
          </Body>
          <Footer className="space-x-2">
            <Button
              disabled={isSubmitting}
              icon={Check}
              label={t("button.save")}
              loading={isSubmitting}
              type="submit"
            />
            <Button
              label={t("button.cancel")}
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
