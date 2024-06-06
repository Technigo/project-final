export const ProfileForm = ({ userData, setUserData, handleUpdateProfile }) => {
  return (
    <form onSubmit={handleUpdateProfile} className="space-y-4 flex-1">
      <input
        type="text"
        placeholder="Username"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
        className="block w-full px-4 py-2 rounded border border-gray-300"
      />
      <input
        type="text"
        placeholder="Bio"
        value={userData.bio}
        onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
        className="block w-full px-4 py-2 rounded border border-gray-300"
      />
      <input
        type="text"
        placeholder="Hobbies"
        value={userData.hobbies}
        onChange={(e) => setUserData({ ...userData, hobbies: e.target.value })}
        className="block w-full px-4 py-2 rounded border border-gray-300"
      />
      <button
        type="submit"
        className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
      >
        Save Changes
      </button>
    </form>
  );
};
