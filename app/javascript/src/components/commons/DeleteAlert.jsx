import React from "react";

import { Alert } from "neetoui";
import PropTypes from "prop-types";
import { useTranslation, Trans } from "react-i18next";

const DeleteAlert = ({
  isOpen,
  item,
  itemName = "",
  isSubmitting = false,
  onClose,
  handleDelete,
}) => {
  const { t } = useTranslation();

  return (
    <Alert
      isOpen={isOpen}
      isSubmitting={isSubmitting}
      title={t("alerts.deleteTile", { item })}
      message={
        <Trans
          components={{ bold: <strong /> }}
          i18nKey="alerts.deleteMessage"
          values={{ item: item.toLowerCase(), itemName }}
        />
      }
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

DeleteAlert.propTypes = {
  onClose: PropTypes.func,
  item: PropTypes.string,
  itemName: PropTypes.string,
  isSubmitting: PropTypes.bool,
  handleDelete: PropTypes.func,
};

export default DeleteAlert;
