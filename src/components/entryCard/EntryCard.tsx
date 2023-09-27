type Props = {
  nameTripe: string;
  imageURL: string;
};

const EntryCard = ({ nameTripe, imageURL }: Props) => {
  return (
    <div>
      <h1 role="showNameTrip">{nameTripe}</h1>
      <img role="imageTrip" src={imageURL} alt={nameTripe} />
      <button>show more</button>
      <button>update</button>
      <button>delete</button>
    </div>
  );
};

export default EntryCard;
