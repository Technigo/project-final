import communityData from "../../data/communityData.json";
import defaultProfilePicture from "/icons/profile.png";

export const Community = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl text-primary bg-opacity-45 bg-white p-4 rounded-lg font-bold mb-8 text-center shadow-black ">
        Meet The Community
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {communityData.map((member) => (
          <div
            key={member.id}
            className="rounded-lg shadow-md p-4 text-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.603)" }}
          >
            <div className="h-32 w-32 md:h-48 md:w-48 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src={member.image || defaultProfilePicture}
                alt={member.name}
                className="h-full w-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-md text-dark mb-2">{member.bio}</p>
            <span className="inline-block bg-primary text-white py-1 px-2 rounded">
              {member.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
