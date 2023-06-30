import { OverviewRowFC } from "./components/OverviewRowFC";
import { WorkHistoryRowFC } from "./components/WorkHistoryRowFC";
import { overviewRowsData, workHistoryRowsData } from "./data";

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <div>Hi, I’m </div>
          <div>Divyansh Rana</div>
          <div>Data Analyst Noida</div>
          <div> CONTACT ME</div>
        </div>
        <div>PIC</div>
      </div>
      <div>
        <h1>Summary</h1>
        <p>
          Highly skilled and results-driven data analytics professional with a
          strong background in extracting actionable insights from complex
          datasets. Adept at transforming raw data into meaningful reports and
          dashboards that facilitate data-driven decision-making. Demonstrated
          ability to collaborate effectively with cross-functional teams and
          stakeholders to identify business needs and develop innovative
          data-driven solutions. Excellent communication skills with a proven
          track record of presenting findings to both technical and
          non-technical audiences. Seeking an opportunity to leverage my
          analytical expertise to contribute to the success of a progressive
          organization.
        </p>
      </div>
      <div>
        {/* heading */}
        <div>Overview</div>
        {/* Content */}
        <div>
          {/* Row */}
          {overviewRowsData.map((dataFor1Row, index) => (
            <OverviewRowFC rowData={dataFor1Row} key={index} />
          ))}
        </div>
      </div>
      <div>
        {/* heading */}
        <div>Work history</div>
        {/* Content */}
        <div>
          {/* Row */}
          {workHistoryRowsData.map((dataFor1Row, index) => (
            <WorkHistoryRowFC rowData={dataFor1Row} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
