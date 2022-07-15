import { Field, FieldArray, Form, Formik } from "formik";
import {
  Button,
  Container,
  FormGroup,
  Input,
  InputGroup,
  Jumbotron,
  Textarea,
} from "./UI";
import * as Yup from "yup";
import "./App.css";

const validationSchema = Yup.object().shape({
  names: Yup.array().of(
    Yup.string()
      .required("name is required")
      .min(2, "too short")
      .max(12, "too large")
  ),
  email: Yup.string().required("required").email("not an email"),
  message: Yup.string().required("required")
});

function App() {
  return (
    <Container>
      <Jumbotron text="Feedback" />
      <Formik
        initialValues={{ names: [], email: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form>
            <FieldArray
              name="names"
              render={(arrayHelper) => (
                <>
                  {values.names.map((name, index) => (
                    <Field name={`names.${index}`} key={index}>
                      {({ field, meta: { touched, error } }) => (
                        <FormGroup touched={touched} error={error} label="Name">
                          <InputGroup>
                            <Input
                              type="text"
                              isValid={!(error && touched)}
                              field={field}
                            />
                            <Button
                              type="button"
                              onClick={() => arrayHelper.remove(index)}
                              danger
                            >
                              x
                            </Button>
                          </InputGroup>
                        </FormGroup>
                      )}
                    </Field>
                  ))}
                  <div className="form-group">
                    <Button
                      type="button"
                      onClick={() => arrayHelper.push("")}
                      primary
                    >
                      Add Name
                    </Button>
                  </div>
                </>
              )}
            ></FieldArray>
            <Field name="email">
              {({ field, meta: { touched, error } }) => (
                <FormGroup touched={touched} error={error} label="Email">
                  <Input
                    type="email"
                    isValid={!(error && touched)}
                    field={field}
                  />
                </FormGroup>
              )}
            </Field>
            <Field name="message">
              {({ field, meta: { touched, error } }) => (
                <FormGroup touched={touched} error={error} label="Message">
                  <Textarea
                    type="email"
                    isValid={!(error && touched)}
                    field={field}
                  />
                </FormGroup>
              )}
            </Field>
            <div className="form-group">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default App;
