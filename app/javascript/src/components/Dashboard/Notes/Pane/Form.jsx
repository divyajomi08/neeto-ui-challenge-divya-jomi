import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input, Select, Textarea } from "neetoui/formik";

import notesApi from "apis/notes";

import { NOTES_FORM_VALIDATION_SCHEMA, ROLES, TAGS } from "../constants";

const Form = ({ onClose, refetch, note, isEdit }) => {
  const { Footer, Body } = Pane;

  const handleSubmit = async values => {
    if (isEdit) return;
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
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="flex flex-col justify-between">
          <Body className="space-y-6">
            <div className="w-full space-y-6">
              <Input
                required
                label="Title"
                name="title"
                placeholder="Enter note title"
              />
              <Textarea
                required
                label="Description"
                name="description"
                placeholder="Enter note description"
                rows={1}
              />
              <Select
                required
                label="Assigned Contact"
                name="role"
                options={ROLES}
                placeholder="Select Role"
              />
              <Select
                isMulti
                required
                label="Tag"
                name="tags"
                options={TAGS}
                placeholder="Select Tags"
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
            <Button label="Cancel" style="secondary" onClick={onClose} />
          </Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
