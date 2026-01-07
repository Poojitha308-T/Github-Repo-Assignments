import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UpdateTodoModal = ({ open, onClose, value, onSave }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>Edit Todo</DialogHeader>
        <Input defaultValue={value} onChange={(e) => onSave(e.target.value)} />
        <Button onClick={onClose}>Save</Button>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTodoModal;