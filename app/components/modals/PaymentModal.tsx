import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../Button";
import Input from "../inputs/Input";
import Modal from "./Modal";

const PaymentModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cardDetails, setCardDetails] = useState<null | FieldValues>(null); // Explicitly defining the type as null | FieldValues

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FieldValues>({
    defaultValues: {
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    // Storing card details
    setCardDetails(data);

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Payment successful!");
      // Close the modal after successful payment
      // Implement your logic to close the modal here
    }, 2000);
  };

  const handleCloseModal = () => {
    // Implement your logic to close the modal here
    // For example, if you have a state to control modal visibility, you can set it to false
  };

  const handleDownloadReceipt = () => {
    if (cardDetails) {
      // Convert card details to JSON string
      const jsonData = JSON.stringify(cardDetails, null, 2);
      // Create a Blob containing the data
      const blob = new Blob([jsonData], { type: "application/json" });
      // Create a link element to trigger the download
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "card_details.json";
      // Trigger the download
      link.click();
      // Cleanup
      window.URL.revokeObjectURL(link.href);
    } else {
      toast.error("No card details available to download.");
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="cardNumber"
        label="Card Number"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="expirationDate"
        label="Expiration Date"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="cvv"
        label="CVV"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex justify-between mt-4">
      <Button
        label="Pay Now"
        onClick={handleSubmit(onSubmit)}
        disabled={isLoading}
      />
      <Button
        label="Download Receipt"
        onClick={handleDownloadReceipt}
        disabled={!cardDetails || isLoading}
      />
    </div>
  );

  return (
    <Modal
      isOpen={true} // Assuming PaymentModal is always open
      title="Payment"
      actionLabel="Pay"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
      onClose={handleCloseModal} // Pass the handleCloseModal function
    />
  );
};

export default PaymentModal;
