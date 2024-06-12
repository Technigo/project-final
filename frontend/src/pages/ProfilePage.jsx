import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { TextInput } from "../atoms/TextInput";
import { ProfileCard } from "../components/ProfileCard";
import { useNavigate } from "react-router-dom";

const backend_url = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export const ProfilePage = () => {
  const { username, signOut } = useUserStore();
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState({});
  const [updateCount, setUpdateCount] = useState(0);
  const [hidden, setHidden] = useState(true);
  const [updateData, setUpdateData] = useState({
    street: "",
    postCode: "",
    city: "",
  });

  const [deleteUser, setDeleteUser] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const navigate = useNavigate();

  const fetchProfile = async (id) => {
    try {
      const response = await fetch(`${backend_url}/users/${id}`);
      if (!response.ok) {
        throw new Error("Profile response was not ok");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const submitUpdateAddress = async (event) => {
    event.preventDefault();
    const fullUpdatedAddress = `${updateData.street} ${updateData.postCode} ${updateData.city}`;
    try {
      const response = await fetch(`${backend_url}/users/${userId}/update`, {
        method: "PATCH",
        body: JSON.stringify({
          address: fullUpdatedAddress,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Patching response was not ok");
      } else {
        const result = await response.json();
        setUpdateCount((prevCount) => prevCount + 1);
        setUpdateData({ street: "", postCode: "", city: "" });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const toggleHidden = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleUpdateChange = (fieldName, value) => {
    setUpdateData((prevUpdateData) => ({
      ...prevUpdateData,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    fetchProfile(userId);
  }, [userId, updateCount]);

  const handleDelete = async (event, userId) => {
    try {
      const response = await fetch(`${backend_url}/users/delete/${userId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("delete response failed");
      }
      const data = await response.json();
      console.log("user deleted", data);
      setDeleteUser(true);
      signOut();
      navigate("/");
    } catch (error) {
      console.error("Error deleting profile", error);
    }
  };

  const confirmDelete = () => {
    setShowConfirmation(true);
    setConfirmationMessage(
      "Are you sure you want to delete your subscription?"
    );
  };

  return (
    <div className="flex flex-col max-w-sm mx-auto p-2 md:mx-8 lg:mx-32 py-7 md:py-10 lg:py-36 gap-4 justify-center items-center min-h-screen md:max-w-md border border-black">

      <Headline titleText={`${username}`} />

      <div className="p-8 mb-4 bg-fourth rounded-md">
        <ProfileCard
          name={userData.name}
          email={userData.email}
          address={userData.address}
        />
      </div>

      <div className="">
        {/* <Text
          text={
            "Have you recently moved and are worried the books won't reach you at your new place? Don't worry! Click here to update your address."
          }
        /> */}
        <Button
          onClick={toggleHidden}
          btnText={"Update address"}
          buttonStyle={
            "bg-tertiary px-7 py-2 text-secondary font-josefinsans md:text-xl rounded-md w-max self-center "
          }
        />
        {!hidden && (
          <div className="mt-6">
            <form onSubmit={submitUpdateAddress} className="flex flex-col gap-4">
              <fieldset className="">
                {/* <legend>Address</legend> */}
                <TextInput
                  label={"Street"}
                  inputType={"text"}
                  inputName={"street"}
                  placeholder={"Type your street"}
                  value={updateData.street}
                  onChange={(event) =>
                    handleUpdateChange("street", event.target.value)
                  }
                  labelStyle="font-josefinsans text-base md:text-lg flex flex-col my-3"
                  inputStyle="font-worksans text-sm border-2 rounded-lg p-2"
                />

                  <div className="md:w-32">
                    <TextInput
                      label={"Post code"}
                      inputType={"text"}
                      inputName={"postcode"}
                      placeholder={"xxx xx"}
                      value={updateData.postCode}
                      onChange={(event) =>
                        handleUpdateChange("postCode", event.target.value)
                      }
                      labelStyle="font-josefinsans text-base md:text-lg flex flex-col my-3"
                      inputStyle="font-worksans text-sm border-2 rounded-lg p-2"
                    />
                  </div>

                  <div className="md:w-64 xl:w-80">
                    <TextInput
                      label={"City"}
                      inputType={"text"}
                      inputName={"city"}
                      placeholder={"Type your city"}
                      value={updateData.city}
                      onChange={(event) =>
                        handleUpdateChange("city", event.target.value)
                      }
                      labelStyle="font-josefinsans text-base md:text-lg flex flex-col my-3"
                      inputStyle="font-worksans text-sm border-2 rounded-lg p-2"
                    />
                  </div>
              </fieldset>
              <Button
                type={"submit"}
                btnText={"Update"}
                buttonStyle={
                  "bg-tertiary px-8 py-2 text-secondary font-josefinsans md:text-xl rounded-md "
                }
              />
            </form>
          </div>
        )}
      </div>

      <div className="flex flex-col border border-black gap-4 mt-auto justify-center items-center">
        <div>
          <Text text={"Delete account"} />
        </div>
      

        {!deleteUser && (
          <>            
            <Button
              btnText={"Delete"}
              onClick={(event) => confirmDelete(event)}
              type="submit"
              buttonStyle={
                "bg-tertiary px-4 py-1 text-secondary font-josefinsans md:text-xl rounded-md w-20 md:w-24"
              }
            />
          
            {showConfirmation && (
              <div className="">
                <Text 
                section="text-center" 
                text={confirmationMessage} 
                />
                  <Button
                    onClick={() => setShowConfirmation(false)}
                    btnText="No"
                    buttonStyle={
                      "bg-tertiary px-4 py-1 text-secondary font-josefinsans md:text-xl rounded-md w-20 md:w-24"
                    }
                  />
                  <Button
                    onClick={(event) => handleDelete(event, userId)}
                    btnText="Yes"
                    buttonStyle={
                      "bg-tertiary px-4 py-1 text-secondary font-josefinsans md:text-xl rounded-md w-20 md:w-24"
                    }
                  />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
