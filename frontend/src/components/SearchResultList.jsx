import { SearchResultItem } from "./SearchResultItem";

export const SearchResultList = ({ museumList }) => {
  const renderMuseumList = () =>
    museumList.map((museum, index) => (
      <SearchResultItem key={index} museum={museum} />
    ));

  return <div> {renderMuseumList()} </div>;
};
