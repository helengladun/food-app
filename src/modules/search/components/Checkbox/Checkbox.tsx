import {Field} from "formik";
import React from "react";

interface IProps {
  name: string,
  value: string,
  label: string
}

export const Checkbox = (props: IProps) => {
  return (
    <Field name={props.name}>
      {({ field, form}: any) => {
        return (
          <label>
            <input
              type="checkbox"
              {...props}
              checked={field.value.includes(props.value)}
              onChange={() => {
                if (field.value.includes(props.value)) {
                  const nextValue = field.value.filter(
                    (value: any) => value !== props.value
                  );
                  form.setFieldValue(props.name, nextValue);
                } else {
                  const nextValue = field.value.concat(props.value);
                  form.setFieldValue(props.name, nextValue);
                }
              }}
            />
            {props.label}
          </label>
        )}}
    </Field>
  );
};