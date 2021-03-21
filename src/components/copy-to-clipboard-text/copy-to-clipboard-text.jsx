import React from "react";

import { Button, Tooltip } from "antd";
import { CopyOutlined } from "@ant-design/icons";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import { useCopyToClipboard } from "react-use";

const STATUS_COPY = {
  COPY: "copy",
  COPIED: "copied",
};

const TITLE_BY_STATUS = {
  [STATUS_COPY.COPY]: "Copy",
  [STATUS_COPY.COPIED]: "Copied",
};

const CopyToClipboardText = ({ text }) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = React.useState(STATUS_COPY.COPY);

  const onClickCopy = React.useCallback(() => {
    copyToClipboard(text);
    setStatusCopy(STATUS_COPY.COPIED);
  }, [copyToClipboard, text]);

  const onClickAway = React.useCallback(() => {
    setStatusCopy(STATUS_COPY.COPY);
  }, [setStatusCopy]);

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Tooltip placement="top" title={TITLE_BY_STATUS[statusCopy]}>
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            padding: 0,
          }}
          type="link"
          onClick={onClickCopy}
        >
          <CopyOutlined /> {text}
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

export default CopyToClipboardText;
