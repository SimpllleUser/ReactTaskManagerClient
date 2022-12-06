import { message } from "antd";
import { Rule } from "antd/lib/form";

interface SelectorValidationParams {
  domainName: string;
  entityName: string;
}

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

const selector = ({ domainName, entityName }: SelectorValidationParams): Rule[] => ([{
  required,
  message: `Please select ${domainName} ${entityName}`,
}]);

const rules = {
    projectForm: {
        title,
        description,
    },
    taskFrom: {
        title,
        description,
    },
    selector,
};

export default rules;