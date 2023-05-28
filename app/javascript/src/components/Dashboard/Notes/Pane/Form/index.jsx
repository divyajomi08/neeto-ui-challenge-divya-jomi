import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input, Select, Textarea } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";

import { VALIDATION_SCHEMA, ROLES, TAGS } from "./constants";

const Form = ({ onClose, refetch, note, isEdit }) => {
  const { Footer, Body } = Pane;

  const { t } = useTranslation();

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
    } catch (err) {
      logger.error(err);
    } finally {
      onClose();
    }
  };

  return (
    <Formik
      initialValues={note}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <Body>
            <div className="w-full space-y-6">
              <Input
                required
                label={t("common.title")}
                name="title"
                placeholder={t("placeholder.title")}
              />
              <Textarea
                required
                label={t("common.description")}
                name="description"
                placeholder={t("placeholder.description")}
                rows={1}
              />
              <Select
                required
                label={t("common.assignedContact")}
                name="role"
                options={ROLES}
                placeholder={t("placeholder.assignedContact")}
              />
              <Select
                isMulti
                required
                label={t("common.tags")}
                name="tags"
                options={TAGS}
                placeholder={t("placeholder.tags")}
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
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
