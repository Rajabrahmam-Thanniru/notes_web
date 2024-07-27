import React from "react";
import * as yup from "yup";
import "../css/UploadNote.css";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";

function UploadNote() {
  const initialValues = {
    title: "",
    note: "",
  };

  const onSubmit = (data: unknown) => {
    axios.post("http://localhost:3001/notes", data).then((response) => {
      console.log("IT WORKED");
    });
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    note: yup.string().required("Description is required"),
  });

  return (
    <>
      <div>
        <h1>Create Note</h1>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div>
              <Field
                id="form"
                name="title"
                placeholder="(e.g wings of fire...)"
              />
              <ErrorMessage name="title" component="span" className="error" />
            </div>
            <div>
              <Field
                id="form"
                name="note"
                placeholder="(e.g lkahsdffkhdk....)"
              />
              <ErrorMessage name="note" component="span" className="error" />
            </div>

            <button type="submit" onClick={onSubmit}>
              Create Note
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default UploadNote;
