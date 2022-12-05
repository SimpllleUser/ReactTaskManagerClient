import { Rule } from "antd/lib/form";

const required = true;
const TITLE_MIN_LENGTH = 3;
const DESCRIPTION_MIN_LENGTH = 10;

const getMinialLengthMessage = (length: number): string  => `Min length ${length}`

const title: Rule[] = [
    {
        required,
        message: "Please input title",
      },
      {
        min: TITLE_MIN_LENGTH,
        message: getMinialLengthMessage(TITLE_MIN_LENGTH),
      },
];
const description: Rule[] = [
    {
        required,
        message: "Please input description",
      },
      {
        min: DESCRIPTION_MIN_LENGTH,
        message: getMinialLengthMessage(DESCRIPTION_MIN_LENGTH),
      },
];

const rules = {
    taskFrom: {
        title,
        description,
    },
};

export default rules;