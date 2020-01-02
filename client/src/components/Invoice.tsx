import React, { FunctionComponent } from "react";
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Icon from '@mdi/react'
import { mdiProgressClock, mdiCheck } from '@mdi/js'
import { useTheme } from "emotion-theming";

interface Props {
  invoice: InvoiceType
};

export interface InvoiceType {
  _id?: string,
  title?: string,
  status?: string,
  sumTotal?: number,
  date?: string,
  isLoading?: boolean | false,
};

const Invoice: React.FunctionComponent<Props> = props => {
  const { invoice } = props;
  const theme: any = useTheme();

  return(
    <div
      css={theme => ({
      width: "100%",
      display: "flex",
      padding: "0.5rem 0.5rem 0.5rem 0",
      color: theme.colors.text,
      marginBottom: "1rem",
    })}
    >
      <div
        css={{
          display: "flex",
          width: "10%",
          alignItems: "center"
        }}
      >
        <Icon path={invoice.status === "Valmis" ? mdiCheck : mdiProgressClock}
        title="Status"
        size={1}
        color={theme.colors.pink}
        />
      </div>
      <div
        css={{
          display: "flex",
          width: "70%",
          flexDirection: "column",
        }}
      >
        <div>
          {invoice.title}
        </div>
        <div
          css={{
            color: theme.colors.textdimmer
          }}
        >
          {invoice.date}
        </div>
      </div>
      <div
        css={{
          display: "flex",
          width: "20%",
          justifyContent: "flex-end"
        }}
      >
          {invoice.status}
      </div>
    </div>
  );
};

export default Invoice;