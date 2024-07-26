import "../css/UploadNote.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
const UploadNote = () => {
  return (
    <>
      <div>
        <h1>Create Note</h1>
      </div>
      <div>
        <Formik initialValues={}></Formik>
      </div>
    </>
  );
};

export default UploadNote;
