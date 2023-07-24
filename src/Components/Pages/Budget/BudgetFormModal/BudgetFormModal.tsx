import { BudgetEntry } from "../../../../Models/Budget";
import BudgetItemCreate from "../BudgetItemCreate";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ModalBody } from "./Styles";

interface BudgetFormModalProps {
  addBudgetItem: (item: BudgetEntry) => void;
  formModalOpen: boolean;
  handleCloseFormModal: () => void;
}

const BudgetFormModal = ({
  addBudgetItem,
  formModalOpen,
  handleCloseFormModal,
}: BudgetFormModalProps) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={formModalOpen}
        onClose={handleCloseFormModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={formModalOpen}>
          <ModalBody>
            <h2>Add Budget Item</h2>
            <BudgetItemCreate
              addBudgetItem={addBudgetItem}
              handleCloseFormModal={handleCloseFormModal}
            />
          </ModalBody>
        </Fade>
      </Modal>
    </div>
  );
};

export default BudgetFormModal;
