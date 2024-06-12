export const ProfileForm = ({ userData, setUserData, handleUpdateProfile }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleUpdateProfile} className="space-y-4 flex-1">
      <div>
        <label className="block text-sm font-bold mb-2">Nickname</label>
        <input
          type="text"
          name="name"
          placeholder="How should we call you..."
          value={userData.name || ""}
          onChange={handleChange}
          className="block w-full mb-4 px-4 py-2 rounded border border-gray-300"
        />
      </div>
      <div>
        <label className="block text-sm font-bold mb-2">Bio</label>
        <textarea
          name="bio"
          placeholder="Tell us something about yourself..."
          value={userData.bio || ""}
          onChange={handleChange}
          className="block w-full mb-4 px-4 py-2 rounded border border-gray-300"
        />
      </div>
      <div>
        <label className="block text-sm font-bold mb-2">Hobbies</label>
        <input
          type="text"
          placeholder="What do you like to do..."
          name="hobby"
          value={userData.hobby || ""}
          onChange={handleChange}
          className="block w-full mb-4 px-4 py-2 rounded border border-gray-300"
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-light hover:bg-secondary font-bold py-2 px-4 rounded w-full"
      >
        Save Changes
      </button>
    </form>
  );
};
