export const SearchResultItem = ({ museum }) => {
  return (
    <>
      <div>{museum.name}</div>
      <div>{museum.location}</div>
      <div>{museum.website}</div>
    </>
  );
};
