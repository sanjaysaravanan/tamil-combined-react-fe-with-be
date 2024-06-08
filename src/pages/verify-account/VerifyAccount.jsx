import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { verifyAccount } from "../../apis/auth";
const VerifyAccount = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyFunc = async () => {
      try {
        // Extracting query parameter
        const token = searchParams.get("token");

        if (!token) {
          setMessage("Invalid request: Missing token.");
          return;
        }

        // Making API call
        const data = await verifyAccount(token);

        // Handling response
        if (data.code === 1) {
          setMessage("Account successfully verified.");
        } else if (data.code === -1) {
          setMessage("The verification link has expired.");
        } else {
          setMessage("Verification failed. Please try again.");
        }
      } catch (error) {
        console.log(error);
        setMessage("An error occurred during verification.");
      }
    };

    verifyFunc();
  }, [searchParams]);

  return (
    <div>
      <h1>Account Verification</h1>
      <p>{message}</p>
    </div>
  );
};

export default VerifyAccount;
