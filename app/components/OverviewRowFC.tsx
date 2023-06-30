export type TOverviewRowData = {
  value: number;
  description: string;
};

export type TOverviewRowFCProps = {
  rowData: TOverviewRowData;
};

export function OverviewRowFC({ rowData }: TOverviewRowFCProps) {
  return (
    <div>
      <div>{rowData.value}</div>
      <div>{rowData.description}</div>
    </div>
  );
}
