import { EducationInfo } from "../components/education/Education";
import { WorkExpInfo } from "../components/experience/WorkExperience";
import { PersonInfo } from "../components/general/PersonInformation";

export const examplePersonInfo = {
  name: "John Doe",
  address: "Seattle, WA",
  emailAddress: "johndoe@example.com",
  phoneNumber: "555-555-5555",
};

export const exampleWorkExpInfo = {
  companyName: "ABC Inc.",
  positionTitle: "Software Developer",
  responsibilities:
    "As a software developer, my core responsibility was the development of web applications. This involved translating client requirements into user-friendly interfaces, collaborating with cross-functional teams, and writing efficient code throughout the backend and frontend. My role also included testing and debugging to ensure the delivery of high-quality web solutions that met client expectations.",
  startDate: "01/01/2022",
  endDate: "12/31/2022",
  location: "Cityville, WA",
};

export const exampleEducationInfo = {
  schoolName: "University of XYZ",
  degree: "Bachelor of Science in Computer Science",
  enrolledDate: "08/01/2018",
  graduatedDate: "05/15/2022",
  awards:
    "I was honored to consistently achieve the Dean's List recognition for my outstanding academic performance during the 2019 and 2020 academic years, reflecting my dedication and commitment to excellence.",
};

export const loadForms = (
  personInfo: { setValue: (data: PersonInfo) => void },
  workExpInfo: { setValue: (data: WorkExpInfo) => void },
  educationInfo: { setValue: (data: EducationInfo) => void }
) => {
  personInfo.setValue(examplePersonInfo);
  workExpInfo.setValue(exampleWorkExpInfo);
  educationInfo.setValue(exampleEducationInfo);
};
