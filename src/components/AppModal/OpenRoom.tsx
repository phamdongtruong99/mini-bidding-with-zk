import { zkApi } from "@api/zkApi";
import BamInput from "@components/Form/BamInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, CircularProgress, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDetailInRoom } from "@services/roomService";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as yup from "yup";

const schema = yup.object().shape({
  start_after: yup.number().required("start_after is required"),
});

const OpenRoom = ({ open, toggle }) => {
  const { query } = useRouter();
  const { refetch } = useDetailInRoom();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{
    start_after: number;
  }>({
    resolver: yupResolver(schema),
    defaultValues: {
      start_after: 5,
    },
    mode: "onChange",
  });

  const onSubmit = async (formValues) => {
    try {
      setIsLoading(true);
      await zkApi.openRoom({
        start_after: formValues.start_after,
        room_id: +query.id,
      });
      toast.success("Room opened successfully");
      toggle();
      refetch();
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Modal open={open} onClose={toggle}>
        <Box sx={style}>
          <Typography textAlign={"center"} pb={2} variant="subtitle1">
            Open room bidding
          </Typography>

          <BamInput
            control={control}
            name="start_after"
            placeholder="Start after..."
            label="Start after"
            rules={{ required: true }}
            error={errors.start_after}
            autoFocus={true}
          />

          <Box pt={2} textAlign="right">
            <Button
              variant="outlined"
              type="submit"
              startIcon={
                isLoading && <CircularProgress size={20} color="secondary" />
              }
              disabled={isLoading}
              onClick={handleSubmit(onSubmit)}
            >
              <Typography>Submit</Typography>
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color: "#fff",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export default OpenRoom;
