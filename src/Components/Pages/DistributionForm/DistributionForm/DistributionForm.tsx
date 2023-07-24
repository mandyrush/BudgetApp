import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { FormContainer } from "./Styles";

const DistributionForm = () => {
  return (
    <article>
      <h2>Distribution Form</h2>
      // buffer/ emergency fund // CC - pull from list of expenses // Retirement
      // Roth - Amanda // Roth - Des // Joint account // Add button
      <FormContainer>
        <FormControl fullWidth>
          <TextField
            type="text"
            name="title"
            label="Title"
            id="title"
            value={0}
            size="small"
            onChange={() => {}}
          />
        </FormControl>
      </FormContainer>
    </article>
  );
};

export default DistributionForm;
