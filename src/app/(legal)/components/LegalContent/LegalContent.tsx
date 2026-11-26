import { ReactNode } from "react";
import styles from "./LegalContent.module.scss";

type Props = {
  children: ReactNode;
};

type HeadingProps = {
  children: ReactNode;
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
};

type LiProps = {
  children: React.ReactNode;
};

type OlProps = React.ComponentPropsWithoutRef<"ol">;

type TableProps = {
  children: ReactNode;
};

export const LegalContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const classes = [styles.mainWrapper, className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
};

LegalContent.MainHeader = function MainHeader({
  heading,
  operatedBy,
  lastReviewed,
  effectiveDate,
}: {
  heading: ReactNode;
  operatedBy?: string;
  effectiveDate?: string;
  lastReviewed?: string;
}) {
  return (
    <div className={styles.mainHeader}>
      <h1>{heading}</h1>
      {operatedBy && (
        <div className={styles.content}>Operated by: {operatedBy}</div>
      )}
      {effectiveDate && (
        <div className={styles.content}>
          Effective Date: {effectiveDate} | Last Reviewed: {lastReviewed}
        </div>
      )}
    </div>
  );
};

LegalContent.Heading = function Heading({
  children,
  as: Tag = "h2",
}: HeadingProps) {
  return <Tag>{children}</Tag>;
};

LegalContent.P = function P({ children }: Props) {
  return <p>{children}</p>;
};

LegalContent.Ul = function Ul({ children }: Props) {
  return <ul>{children}</ul>;
};

LegalContent.Ol = function Ol({ children, ...props }: OlProps) {
  return <ol {...props}>{children}</ol>;
};

LegalContent.Li = function Li({ children }: LiProps) {
  return <li style={{ listStyle: "" }}>{children}</li>;
};

LegalContent.Hr = function Hr() {
  return <hr className={styles.hr} />;
};

LegalContent.Table = function Table({ children }: TableProps) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        border: "1px solid #000",
      }}
    >
      <tbody>{children}</tbody>
    </table>
  );
};

LegalContent.Tr = function Tr({ children }: Props) {
  return <tr>{children}</tr>;
};

LegalContent.Th = function Th({ children }: Props) {
  return (
    <th
      style={{
        border: "1px solid #000",
        padding: "8px",
        textAlign: "left",
        color: "var(--black)",
      }}
    >
      {children}
    </th>
  );
};

LegalContent.Td = function Td({ children }: Props) {
  return (
    <td
      style={{
        border: "1px solid #000",
        padding: "8px",
        color: "var(--black)",
      }}
    >
      {children}
    </td>
  );
};
