import { useWishStore } from "../store/useWishStore";
import { Text } from "../atoms/Text";
import { Like } from "./Like";
import { useEffect } from "react";

export const WishlistCard = () => {
  const { wishlist, fetchWishlist, handleLike, likesData } = useWishStore();

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <div className="">
      {wishlist.map((wish) => (
        <div key={wish._id} className="border border-black border-solid">
          <Text text={wish.title} />
          <Text text={wish.author} />
          <Text text={wish.message} />

          
            <Text text={`submitted by ${wish.user}`}/>
        
          <Text text={`submitted by ${wish.user}`}/>
          <Like
            emoji="❤️"
            label="heart"
            onClick={(event) => handleLike(event, wish._id)}
            likes={wish.likes}
          />
        </div>
      ))}
    </div>
  );
};
