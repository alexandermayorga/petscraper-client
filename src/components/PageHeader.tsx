type PageHeaderProps = {
  pageTitle: string;
  pageLeadText: string;
};

export default function PageHeader(props: PageHeaderProps) {
  const { pageTitle, pageLeadText } = props;
  return (
    <>
      <div className="p-3 mb-4 bg-info bg-opacity-25 border-info border rounded-3">
        <h1 className="display-4 fw-bold">{pageTitle}</h1>
        <p className="lead mb-0">{pageLeadText}</p>
      </div>
    </>
  );
}
