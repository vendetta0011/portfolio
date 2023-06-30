export interface TWorkHistoryRowData {
  firm: string;
  location: string;
  role: string;
  time: string;
  overviewRows: string[];
}
export interface TWorkHistoryOverviewRowFCProps {
  rowData: string;
}
export function WorkHistoryOverviewRowFC({
  rowData,
}: TWorkHistoryOverviewRowFCProps) {
  return <div>{rowData}</div>;
}

export interface TWorkHistoryRowFCProps {
  rowData: TWorkHistoryRowData;
}
export function WorkHistoryRowFC({ rowData }: TWorkHistoryRowFCProps) {
  return (
    <div>
      <div>
        <div>
          {rowData.firm}, {rowData.location}
        </div>
        <div>{rowData.role}</div>
        <div>{rowData.time}</div>
      </div>
      <div>
        <div>Job overview</div>
        <div>
          {rowData.overviewRows.map((r, i) => (
            <WorkHistoryOverviewRowFC rowData={r} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
