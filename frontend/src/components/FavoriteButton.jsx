import { useState } from "react";

export const FavoriteButton = () => {
  const [hasBeenLiked, setHasBeenLiked] = useState(false);

  return <button>💛</button>;
};
